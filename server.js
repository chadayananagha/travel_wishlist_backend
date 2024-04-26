const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080;

const countries = [
  {
    id: 1,
    name: "Bhutan",
    alpha2Code: "BT",
    alpha3Code: "BTN",
  },
  {
    id: 2,
    name: "Finland",
    alpha2Code: "FI",
    alpha3Code: "FIN",
  },
  {
    id: 3,
    name: "Switzerland",
    alpha2Code: "CH",
    alpha3Code: "CHE",
  },
  {
    id: 4,
    name: "Austria",
    alpha2Code: "AT",
    alpha3Code: "AUT",
  },
  {
    id: 5,
    name: "Belgium",
    alpha2Code: "BE",
    alpha3Code: "BEL",
  },
  {
    id: 6,
    name: "Canada",
    alpha2Code: "CA",
    alpha3Code: "CAN",
  },
  {
    id: 7,
    name: "France",
    alpha2Code: "FR",
    alpha3Code: "FRA",
  },
];

app.get("/", (req, res) => {
  res.json("Welcome to my API");
});

app.get("/countries", (req, res) => {
  res.json(countries);
});

app.get("/countries/:id", (req, res) => {
  const { id } = req.params;
  const country = countries.find((f) => f.id === parseInt(id, 10));
  if (country) {
    res.json(country);
  } else {
    res.status(404).json({ msg: "Country not found :(" });
  }
});

app.post("/countries", (req, res) => {
  const { name, alpha2Code, alpha3Code } = req.body;

  const id = countries.length + 1;

  const newCountry = {
    id: id,
    name,
    alpha2Code,
    alpha3Code,
  };
  countries.push(newCountry);
  res.status(201).json({ message: "Country added successfully.", countries });
});

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
