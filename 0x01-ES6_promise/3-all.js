import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  const func1 = uploadPhoto();
  const func2 = createUser();

  return Promise.all([func1, func2]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
