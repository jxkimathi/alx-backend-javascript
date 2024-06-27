import signUpUser from "./4-user-promise"
import uploadPhoto from "./5-photo-reject"

function handleProfileSignup(firstName, lastName, filename) {
  return signUpUser(firstName, lastName, uploadPhoto(filename));
}

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
