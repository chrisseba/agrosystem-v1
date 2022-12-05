import express from 'express'
import { Farmer } from '../models/farmer.js'

const farmerRouter = new express.Router()

farmerRouter.post('/farmer', async (req, res) => {
  const farmer = new Farmer(req.body)

  console.log(farmer)
  res.status(201).send(farmer)
})

export  {farmerRouter}