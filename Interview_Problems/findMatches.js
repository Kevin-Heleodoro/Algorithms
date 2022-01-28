/*
 * Given two array-of-hashes arguments, find which (if any) elements from the second list match each
 * element from the first list.
 *
 * Elements are considered a match if EITHER the id value is the same, OR both name and context are
 * the same.
 *
 * If an element from the first list has no corresponding match in the second list, that can be
 * represented by null. Elements from the second list with no match in the first need not be present
 * in the output.
 *
 * Keys in the second "haystack" argument can be assumed (or enforced) to be unique, i.e. no two
 * values will share the same id or name + context.
 */

/*
 * Examples (references variables defined below):
 *
 * compare(findMatches([n1], haystack), [[n1, h1]]) === true     # both have id = 1
 * compare(findMatches([n2], haystack), [[n2, h3]]) === true     # h1 and h3 both have name = 'Foo', but only h3 has context = 1
 * compare(findMatches([n4], haystack), [[n4, nil]]) === true    # n4 has no matching value in haystack
 * compare(findMatches(needles, haystack), [[n1, h1], [n2, h3], [n3, h2], [n4, null]])  # multiple elements, order matches that of needles
 */
const h1 = { id: 1, name: 'Foo', context: 0 };
const h2 = { id: 2, name: 'Bar', context: 0 };
const h3 = { id: 3, name: 'Foo', context: 1 };
const h4 = { id: 4, name: 'Baz', context: 2 };
const haystack = [h1, h2, h3, h4];

const n1 = { id: 1, name: 'Baz', context: 0 };
const n2 = { name: 'Foo', context: 1 };
const n3 = { name: 'Bar', context: 0 };
const n4 = { name: 'Baz', context: 1 };
const needles = [n1, n2, n3, n4];


//Attempt 1:
let findMatches = (needles, haystack) => {
  const results =[]
  for(let n in needles) {
    let match; //match is declared in the outer loop for edge cases where there are no matches
    for(let h in haystack){
      
      if(needles[n].id === haystack[h].id) { // if the id's are the same, they match
        match = [needles[n], haystack[h]]
        if(!results.includes(match)) {
          results.push(match)
        }
      }

      else if(needles[n].name === haystack[h].name && needles[n].context === haystack[h].context) { // if names and context are the same, they match
        match = [needles[n], haystack[h]]
        if(!results.includes(match)) {
          results.push(match)
        }
      }
    } 

    if(!match) { // if no match for needle, push up a null
      results.push([needles[n], null])
    }
  }
  return results;
};

const compare = (left, right) => {
  return JSON.stringify(left) === JSON.stringify(right);
};

// console.log(findMatches(needles, haystack));

// console.log(findMatches([n1], haystack));
// console.log(compare(findMatches([n1], haystack), [[n1, h1]])); // True

// console.log(findMatches([n2], haystack));
// console.log(compare(findMatches([n2], haystack), [[n2, h3]])); // True

// console.log(findMatches([n4], haystack));
// console.log(compare(findMatches([n4], haystack), [[n4, null]])); // True

// console.log(findMatches(needles, haystack));
// console.log(compare(findMatches(needles, haystack), [[n1, h1], [n2, h3], [n3, h2], [n4, null]])); // True