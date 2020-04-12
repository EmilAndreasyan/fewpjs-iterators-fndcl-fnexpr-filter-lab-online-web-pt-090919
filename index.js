// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findingMatch (drivers, name) {
  return drivers.filter(driver => {
    driver.toLowerCase() === name.toLowerCase()
  })
}

findingMatch(drivers, "Bobby")

function fuzzyMatch (drivers, string) {
  return drivers.filter(driver => {
    driver.toLowerCase()
  })
}

function matchName (drivers, string) {
  drivers.filter(driver => {
    driver.name === string
  })
}
