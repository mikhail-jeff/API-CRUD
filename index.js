import express from "express";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.get("/", (req, res) => {
	res.send(`Hello from Homepage!`);
});

app.use("/users", usersRoutes);

// Connection
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
