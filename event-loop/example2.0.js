for (let i = 0; i < 2; i++) {
  setTimeout(() => {
    // Non-blocking operation
    // Web api
    // Task
    console.log('Task', i)
  }, 0)
}

for (let i = 0; i < 2; i++) {
  // blocking operation
  // call stack
  console.log('Call stack', i)
}

for (let i = 0; i < 2; i++) {
  queueMicrotask(() => {
    // Non-blocking operation
    // Web api
    // Microtask
    console.log('Microtask', i)
  })
}