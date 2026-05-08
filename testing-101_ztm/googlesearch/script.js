const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'liverpoolfc.com',
  'catbreeds.com'
];

const googleSearch = (searchKey, db) => {
  const matches = db.filter((website) => website.includes(searchKey));

  return matches.length > 2 ? matches.slice(0, 2) : matches;
};

// console.log(googleSearch('soup', googleDatabase));
// console.log(googleSearch('cat', googleDatabase));

module.exports = { googleSearch };
