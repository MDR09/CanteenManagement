const mongo = require("mongoose");

const uri = process.env.MONGO_URI; // Add your connection string to .env

module.exports = async () => mongo.connect(uri);