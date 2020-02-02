function findMatching(driversAr, string) {
  return driversAr.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(driversAr, string) {
  return driversAr.filter(driver => {
    return driver.charAt(0) === string.charAt(0);
  });
}

function matchName(driversAr, string) {
  return driversAr.filter(driver => {
    return driver.name === string;
  });
}
