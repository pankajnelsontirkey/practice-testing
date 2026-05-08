const url = 'https://swapi.py4e.com/api/people';

const getPeoplePromise = (fetch) =>
  fetch(`${url}`)
    .then((response) => response.json())
    .then((data) => {
      return { count: data.count, results: data.results };
    })
    .catch((err) => {
      console.error(err);
    });

const getPeople = async (fetch) => {
  const response = await fetch(`${url}`);
  const data = await response.json();

  return { count: data.count, results: data.results };
};

// console.log(getPeoplePromise(fetch));
// console.log(await getPeople(fetch));

module.exports = { getPeople, getPeoplePromise, url };
