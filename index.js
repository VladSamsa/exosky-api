

const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const app = express()
app.use(express.json())




app.get('/exoplanets', async (req, res) => {
  const exoplanets = await prisma.exoplanet.findMany()
  res.json(exoplanets)
})


app.post('/exoplanets', async (req, res) => {
  const data = req.body
  const newExoplanet = await prisma.exoplanet.create({
    data,
  })
  res.status(201).json(newExoplanet)
})

//repository
app.get('/exoplanets', async (req, res) => {
  const exoplanets = await prisma.exoplanet.findMany()
  res.json(exoplanets)
})

app.get('/exoplanets/:id', async (req, res) => {
  const { id } = req.params
  const exoplanet = await prisma.exoplanet.findUnique({
    where: { id: Number(id) },
  })
  if (exoplanet) {
    res.json(exoplanet)
  } else {
    res.status(404).json({ error: 'Exoplanet not found' })
  }
})

app.post('/exoplanets', async (req, res) => {
  const data = req.body
  const newExoplanet = await prisma.exoplanet.create({
    data,
  })
  res.status(201).json(newExoplanet)
})

app.put('/exoplanets/:id', async (req, res) => {
  const { id } = req.params
  const data = req.body
  try {
    const updatedExoplanet = await prisma.exoplanet.update({
      where: { id: Number(id) },
      data,
    })
    res.json(updatedExoplanet)
  } catch (error) {
    res.status(404).json({ error: 'Exoplanet not found' })
  }
})

app.delete('/exoplanets/:id', async (req, res) => {
  const { id } = req.params
  try {
    await prisma.exoplanet.delete({
      where: { id: Number(id) },
    })
    res.status(204).send()
  } catch (error) {
    res.status(404).json({ error: 'Exoplanet not found' })
  }
})

const port = 3000
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})