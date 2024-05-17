const express = require("express");
// require('dotenev').config()
const dotenv = require("dotenv");
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
app.post("/api/authors", (req, res) => {
  // REcuperamos la info
	console.log(req.body);
	const name = req.body.name;
	const nationality = req.body.nationality;
	console.log(name);
	console.log(nationality);

  // Validar Info. Esto son solo ejemplos
  if(!name) {
    return res.status(400).json({
      success: false,
      message: "Name required",
    });
  }

  // Si hace falta tratamos la info, esto son solo ejemplos
  let newNationality = nationality.toLowerCase()
  console.log(newNationality);

  // Atacar a la bd para crear el nuevo registro del author
  

	res.status(201).json({
		success: true,
		message: "Author created",
	});
});

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});
