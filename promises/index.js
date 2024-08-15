const axios = require('axios');
// Promise.all - 
// Promise.race - 
// Promise.any - 
const fetchData = async (id, time = 200, reject = false) => {
    await new Promise((resolve) => setTimeout(resolve, time))

    if (reject)
        await Promise.reject("fake error")

    return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
}

const main = async () => {
    const finalPromise = Promise.any([fetchData(1, 400, true), fetchData(2, 100, true)]).then(r => {
        return r.data
        // return r.map(a => a.data)
    })

    return finalPromise;
}
main().then(console.log);