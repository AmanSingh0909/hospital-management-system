const cluster = require('cluster')
const os = require('os')

const numCPUs = os.cpus().length

if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);

    // fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.process.pid} died. Starting new one.`)
        cluster.fork()
    })
} else {
    // Each worker runs your Express app
    require('./src/server') 
    console.log(`Worker ${process.pid} started`);
}