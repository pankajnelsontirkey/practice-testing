import type { Request, Response } from 'express';
import { nanoid } from 'nanoid';

import { longUrlMap, shortUrlMap, visitCount } from '../db/db.js';
import type { CustomError } from '../index.js';

interface UrlParams {
  longUrl: string;
}
interface CodeParams {
  shortUrl: string;
}

export const createShortUrl = (req: Request<UrlParams>, res: Response) => {
  const {
    params: { longUrl }
  } = req;

  if (!longUrl) {
    const error: CustomError = new Error('Url required');
    error.statusCode = 400;
    throw error;
  }

  if (longUrlMap.has(longUrl)) {
    return res.status(200).json(longUrlMap.get(longUrl));
  }

  let shortUrl = '';
  do {
    shortUrl = nanoid(8);
  } while (shortUrlMap.has(shortUrl));

  shortUrlMap.set(shortUrl, longUrl);
  longUrlMap.set(longUrl, shortUrl);

  res.status(201).json({ shortUrl });
};

export const getLongUrl = (req: Request<CodeParams>, res: Response) => {
  const {
    params: { shortUrl }
  } = req;
  let longUrl = shortUrlMap.get(shortUrl);

  if (!longUrl) {
    const error: CustomError = new Error('Invalid code!');
    error.statusCode = 404;
    error.data = { badValue: shortUrl };
    throw error;
  }

  visitCount.set(shortUrl, (visitCount.get(shortUrl) || 0) + 1);

  if (!longUrl.includes('https://')) {
    longUrl = `https://${longUrl}`;
  }

  res.redirect(301, longUrl);
};

export const getVisitCount = (req: Request<CodeParams>, res: Response) => {
  const {
    params: { shortUrl }
  } = req;
  const count = visitCount.get(shortUrl);
  res.status(200).json({ shortUrl, visitCount: count });
};
