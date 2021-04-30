import fuzzysort from 'fuzzysort';

export function fuzzySort(term, collection) {
  // console.log(term);
  // console.log(collection);
  const results = fuzzysort.go(term, collection, { key: 'name', threshold: -99 });
  console.log(results);
  return results.map(x => x.obj);
}
