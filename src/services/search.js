import fuzzysort from 'fuzzysort';

export function fuzzySort(term, collection) {
  return fuzzysort.go(term, collection, { key: 'name', threshold: -99 }).map(x => x.obj);
}
