import { beforeEach, describe, expect, it, vi } from 'vitest';
import { nanoid } from 'nanoid';

import { createShortUrl } from './urls.js';
import { longUrlMap, shortUrlMap, visitCount } from '../db/db.js';

vi.mock('nanoid', () => ({ nanoid: () => 'abcd1234' }));

const mockReq = (longUrl: string | undefined) =>
  ({ params: { longUrl } }) as any;

const mockRes = () => {
  const res: any = {};
  res.status = vi.fn().mockReturnValue(res);
  res.json = vi.fn().mockReturnValue(res);
  return res;
};

describe('create short url from long url', () => {
  // beforeEach(() =>{})

  // it should throw error with code 400 if no longUrl is provided
  it('should throw error 400 if no longUrl is provided', () => {
    const req = mockReq(undefined);
    expect(() => createShortUrl(req, mockRes())).toThrow('Url required');
  });

  it('should return existing shortUrl if longUrl already mapped, returns status 200, json existing1', () => {
    longUrlMap.set('http://example.com', 'existing1');
    const req = mockReq('http://example.com');
    const res = mockRes();

    expect.assertions(2);

    createShortUrl(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ shortUrl: 'existing1' });
  });

  it('create a new shortUrl from longUrl and returns status 201; longUrlMap, shortUrlMap should have correct values', () => {
    const req = mockReq('http://example2.com');
    const res = mockRes();

    expect.assertions(4);

    createShortUrl(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ shortUrl: 'abcd1234' });
    expect(longUrlMap.has('http://example2.com')).toBe(true);
    expect(shortUrlMap.has('abcd1234')).toBe(true);
  });

  // mockRes should call status with 201
  // mockRes should call json with {shortUrl}
});
