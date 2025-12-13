const { MongoClient } = require('mongodb')
const dotenv = require ("dotenv")

dotenv.config()

const url = process.env.MONGO_URL
const dbName = process.env.DB_NAME

const client = new MongoClient(url)
let db
const connectDB = async () => {
    try {
        if (!db) {
            await client.connect()
            db = client.db(dbName)
            console.log(`Connected to MongoDB: ${dbName}`);
        }
        return db
    } catch (error) {
        console.log("MongoDB Connection Error:", error.message);
        process.exit(1)
    }
}

module.exports = connectDB