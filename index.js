require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

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

/* let persons = [
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
] */

/* app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
}) */

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.status(200).json(persons)
  })
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.status(200).json(person)
      }
      else {
        response.status(404).json({
          error: `Person with id ${request.params.id} does not exist`
        })
      }
    })
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'malformatted id' })
    })
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

/* const generateId = () => {
  return Math.floor(Math.random() * 100000)
} */

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(409).json({
      error: "Name or number is missing"
    })
  }

  Person.find({ name: `${body.name}` })
    .then(docs => {
      if (docs.length > 0) {
        // If name already exists
        return response.status(409).json({
          error: "name must be unique"
        })
      }
      else {
        // If name doesn't already exist
        /* const person = {
          ...body,
          id: generateId()
        }
        persons = persons.concat(person) */
        const person = new Person({
          ...body
        })

        person.save()
          .then(savedPerson => {
            response.status(200).json(savedPerson)
          })
          .catch(error => {
            console.log(error)
          })
      }
    })
    .catch(error => {
      console.log(error)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})