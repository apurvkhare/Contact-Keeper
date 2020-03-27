const express = require("express");
const ConnectDB = require("./config/db");
const path = require("path")

const app = express();

//Connect to the DB
ConnectDB();

//Init a middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to Contact Keeper API" });
});

//Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

//Serve static assets in production
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))

  app.get('*', (req,res) => res.sendFile(path.resolve(__dirname,'client','build','index.html')))
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
