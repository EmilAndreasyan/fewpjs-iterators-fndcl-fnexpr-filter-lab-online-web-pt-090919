// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findingMatch (drivers, name) {
  return drivers.filter(driver => {
    driver.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch (drivers, string) {
  return drivers.filter(driver => {
    driver.toLowerCase().indexOf(string.toLowerCase()) === 0;
  })
}

// function matchName (drivers, name) {
//   return drivers.filter(driver => {
//     driver.name === name
//   })
// }

function matchName(source, soughtName) {
  return source.filter( record => record.name === soughtName)
}