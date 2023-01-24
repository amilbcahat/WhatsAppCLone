const express = require("express");
const cors = require("cors");
const app = express();
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
dotenv.config();
app.use(cors());

app.use(fileUpload({ useTempFiles: true }));

app.use(express.json());
//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//Database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewURLParser: true,
  })
  .then(() => console.log("Database Connected Succesfully"))
  .catch((err) => console.log("Error Connecting to MongoDB", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}...`);
});
