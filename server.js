const app = require("./app");
const connectDB = require("./config/db");

//connect to database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER started on port ${PORT}`));
