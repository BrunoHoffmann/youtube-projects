console.log('01');

queueMicrotask(() => {
  console.log('02')
});

setTimeout(() => {
  console.log('03')
}, 0);

console.log('04');

Promise.resolve(true).then(() => {
  console.log('05')
});
