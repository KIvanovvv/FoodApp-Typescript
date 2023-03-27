const mongoose = require("mongoose");

async function runDB() {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(
      `mongodb+srv://kivanov:GBlcgm8P5UmOVhRU@cluster0.gkosfhk.mongodb.net/test`
    );
    console.log(`Database is connected`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = runDB;
