const express = require("express");
const bodyParser = require("body-parser");
const emailRoutes = require("./routes/send-email");
const emailGroupRoutes = require("./routes/send-email-gruppe");
const emailSadiyaRoutes = require("./routes/send-email-sadiya");
const emailNadineRoutes = require("./routes/send-email-nadine");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Update to match the port where your React app is running
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Routes
app.use("/api", emailRoutes);
app.use("/api", emailGroupRoutes);
app.use("/api", emailSadiyaRoutes);
app.use("/api", emailNadineRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
