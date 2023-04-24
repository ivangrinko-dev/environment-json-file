const express = require("express");
const { getAll, createEnviroment, deleteEnviroment} = require(`./service/service.js`);
const bodyParser = require(`body-parser`);

const app = express();
app.use (bodyParser.json())
app.get(`/`, function (req, res) {
  try {
    const data = getAll();
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

app.post(`/`, function (req, res) {
  try {
    const { label, category, priority } = req.body;
    const data = createEnviroment(label, category, priority);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

app.delete(`/:id`, function (req, res) {
  try {
    const {id } = req.params;
    const data = deleteEnviroment(id);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(3000, () => console.log("server is running"));
