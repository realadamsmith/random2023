const express = require('express');
const cors = require("cors");

const app = express();
const router = express.Router()
const shippo = require('shippo')("shippo_live_4048014a676c46a6eace43cf2cb2fbc96bd5faaa")
app.use(cors({ origin: true }));

app.use(express.json({limit: '1mb'}));

port = 3012

app.get('/', (req, res) => {
  res.send('Its it')
})

app.post('/nasa', (req, res) => {
  // const response = fetch('https://api.nasa.gov/planetary/apod?api_key=FXyjuqy5NbMlOZC1cpFyszd6hUzX9r40saQV2oRX', {
  // })
  // const result = response.json()
  // console.log(result)
  return res.json(req.body);
  //  res.send("success");
  // try {
  // } catch (error) {
  //   res.json(error)
  // }
});

app.post("/shippoTransaction", async (req, res) => {
  const { desiredLabel } = req.body;
  const transaction = await shippo.transaction.create({
        "label_file_type": "PDF",
        "async": false
    })
    return res.json(transaction)
});


app.listen(port, () => console.log(`Example app is listening on port ${port}`));

