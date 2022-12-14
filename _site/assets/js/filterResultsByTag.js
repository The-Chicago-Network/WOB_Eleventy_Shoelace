/*
 * Returns an array of objects from resultsArr, where targetProperty contains every value held in tagsArr:
 *
 * filterResultsByTag(resultsArr, tagsArr, "targetProperty"));
 */
export const filterResultsByTag = (resultsArr, tagsArr, targetProperty) => {
  return resultsArr.filter((result) => {
    let allMatchesSuccessful = true;
    tagsArr.forEach(x => {
      new RegExp(`(^${x};)|(; ${x};)|(; ${x}$)|(^${x}$)`).test(result.document[targetProperty]) ? null : allMatchesSuccessful = false;
    })
    return allMatchesSuccessful;
  })
};
