const mongoose = require('mongoose')
require('dotenv').config()
module.exports = async () => {
    try {
        if(!process.env.DB_URI) throw new Error("Please specify mongoDB connection string in .env file as DB_URI") 
        mongoose.connect(process.env.DB_URI)
        console.log('Connected to DB!')
    } catch (error) {
        console.log('DB connection Error:', error.message)
        process.exit(1)
    }
}

/* TEST 123 */