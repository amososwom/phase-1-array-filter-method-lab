// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, driverName){
let result = array.filter( value => value.toLowerCase() === driverName.toLowerCase())

return result;
}
function fuzzyMatch(array, driverName){
    let result = array.filter( value => value.toLowerCase()[0] === driverName.toLowerCase()[0])

    return result;
}

const driversDetails = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(array, driverName){
    let result = array.filter( value => value.name.toLowerCase()[0] === driverName.toLowerCase()[0])
    return (result);
}
