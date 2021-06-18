const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(express.static('build'))

app.use(cors())

morgan.token('post-data', function postData(request) {
  if (request.method === "POST") {
    return JSON.stringify(request.body)
  }
  else {
    return new String("")
  }
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post-data'))

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  }
]

/*
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})
*/

app.get('/api/persons', (request, response) => {
  response.status(200).json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    response.status(200).json(person)
  }
  else {
    response.status(404).json({
      error: `Person with id ${id} does not exist`
    })
  }
})

app.get('/info', (request, response) => {
  response.status(200).send(`
        <p>
            Phonebook has info for ${persons.length} people<br />
            <br />
            ${new Date()}
        </p>
    `)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  if (!persons.find(person => person.id === id)) {
    response.status(409).json({
      error: `Person with id ${id} does not exist or has already been deleted`
    })
  }

  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const generateId = () => {
  return Math.floor(Math.random() * 100000)
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(409).json({
      error: "Name or number is missing"
    })
  }
  else if (persons.find(person => person.name === body.name)) {
    return response.status(409).json({
      error: "name must be unique"
    })
  }

  const person = {
    ...body,
    id: generateId()
  }
  persons = persons.concat(person)

  response.status(200).json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})