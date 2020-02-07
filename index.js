// All functions take an array of drivers and a string as arguments.

// Write a Function To Case-insensitively Match strings
// Return the matching list of drivers.
const findMatching = (driverArr, name) => {
    return driverArr.filter( d => 
        d.toLowerCase() === name.toLowerCase()
    )
}


// Write a Function To Partially Match Substrings
// Query the array, return all drivers whose names begin with the provided letters.
const fuzzyMatch = (driverArr, letter) => {
    return driverArr.filter( d =>
        d[0] === letter[0]
    )
}

// Write a Function To Match object Values To a Provided string
// In this function, each element of the drivers array is a JavaScript object 
// that has a property of name. The function should return each element 
// whose name property matches the provided string argument.
const matchName = (driverObj, string) => {
    return driverObj.filter( driver => 
        driver.name === string)
}