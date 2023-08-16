require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mvrulgs.mongodb.net/?retryWrites=true&w=majority`);
    console.log('Connected to MongoDB.');
}

main().catch((error) => console.log(error));

module.exports = main;