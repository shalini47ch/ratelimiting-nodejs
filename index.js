const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");

const app = express();
const port = 3000;

app.use(cors());
app.use("/api", apiRoutes);

//now the next one is to listen on a specific port number
app.listen(port, () => {
  console.log(`Server running on port number ${port}`);
});
