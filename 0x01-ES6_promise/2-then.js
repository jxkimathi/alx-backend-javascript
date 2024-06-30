export default function handleResponseFromAPI(promise) {
  const resolve = { status: 200, body: 'success' };
  return promise
    .then(() => resolve)
    .catch(() => new Error())
    .finally(() => { console.log('Got a resonse fromthe API'); });
}
