// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findingMatch (drivers, name) {
  drivers.filter(driver => {
    driver.toLowerCase() === name.toLowerCase()
  })
}

findingMatch(drivers, "Bobby")

// function fuzzyMatch (drivers, string) {
//   drivers.filter(driver => {
//     let letter = driver.charAt(0)
//     let matchLetter = string.charAt(0)
//     return driver if letter === matchLetter;
//   })
// }

function matchName (drivers, string) {
  drivers.filter(driver => {
    driver.name === string
  })
}
