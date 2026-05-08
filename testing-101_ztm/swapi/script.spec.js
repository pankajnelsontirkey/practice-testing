const swapi = require('./script');

describe('swapi', () => {
  it('calls swapi to get people', (/* done */) => {
    expect.assertions(1);
    return swapi.getPeople(fetch).then((data) => {
      expect(data.count).toEqual(87);
      // done();
    });
  });

  it('calls swapi to get people', () => {
    expect.assertions(2);
    return swapi.getPeoplePromise(fetch).then((data) => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });

  it('getPeople returns count and results', () => {
    const mockFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve({ count: 87, results: [0, 1, 2, 3, 4, 5] })
      })
    );

    expect.assertions(4);

    return swapi.getPeoplePromise(mockFetch).then((data) => {
      expect(mockFetch.mock.calls).toHaveLength(1);
      expect(mockFetch).toHaveBeenCalledWith(`${swapi.url}`);
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });
});
