const { googleSearch } = require('./script');

dbMock = ['dog.com', 'cheese.com', 'disney.com', 'dogbreeds.com'];

describe('googlesearch', () => {
  it('a dummy test', () => {
    expect('hello').toBe('hello');
  });

  it('search google', () => {
    expect(googleSearch('test', dbMock)).toEqual([]);

    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogbreeds.com']);
  });

  it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('should not return more than 2 results', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(2);
  });
});
