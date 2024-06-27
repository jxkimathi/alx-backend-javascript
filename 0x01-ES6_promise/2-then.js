function handleResponseFromAPI(promise) {
  const myPromise = new Promise((resolve, reject) => {
    resolve(`status: 200, body: 'Success'`);
    reject(``);
  });
  
  let resolution = myPromise
  .then(console.log(`Got a response from the API`));
  
  return resolution;
}

const promise = Promise.resolve();
handleResponseFromAPI(promise);