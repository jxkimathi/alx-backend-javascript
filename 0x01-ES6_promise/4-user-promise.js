function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    resolve(`firstName: '${firstName}', lastName: '${lastName}'`);
  });
}

console.log(signUpUser("Bob", "Dylan"));