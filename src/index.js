import express from 'express'
import  {farmerRouter}  from './routers/farmerRouter.js' 

const app = express()
const port = 3000

app.use(express.json())
app.use(farmerRouter)

app.listen(port, () => {console.log('Server is up on port ' + port)})