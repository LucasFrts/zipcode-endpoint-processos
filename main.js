import { getZipcode } from './controllers/zipcode-controller.js'
import express from 'express'
const app = express()
const port = 3000

app.get('/cep/:zipcode', getZipcode);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})