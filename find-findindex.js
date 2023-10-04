/* Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 
const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];
findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined*/

function findUserByUsername(usersArray, username) {
  //Use the find method to search for an object with a matching username
  return usersArray.find(function(user) {
    return user.username === username;
  })
}

/*Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 
const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];
removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined*/

function removeUser(usersArray, username) {
  // Use the findIndex method to find the index of the object with the matching username
  const indexToRemove = usersArray.findIndex(function (user) {
    return user.username === username;
  });
  // If the index is found (not -1), remove the object from the array and return it
  if (indexToRemove !== -1) {
    return usersArray.splice(indexToRemove, 1)[0];
  }
  // If the index is not found, return undefined
  return undefined;
}