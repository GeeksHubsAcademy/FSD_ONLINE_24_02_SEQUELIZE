const express = require("express");
// require('dotenev').config()
const dotenv = require("dotenv");
const authorController = require("./controllers/authorController");
dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/api/healthy", (req, res) => {
	res.status(200).json({
		success: true,
		message: "My APP server is healthy",
	});
});

// CRUD DE AUTHORS
app.post("/api/authors", authorController.createAuthor);

app.get(
  '/api/authors',
  (req, res) => {
    res.status(200).json(
      {
        success: true,
        message: "Authors retrieved"
      }
    )
  }
)

app.put(
  '/api/authors/:id',
  (req, res) => {
    console.log(req.params.id);

    res.status(200).json(
      {
        success: true,
        message: "Author updated"
      }
    )
  }
)



app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});
