const express = require('express')
const sequelize = require('./config/config')
const User = require('./models/user')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
]

// app.get('/contacts', async (req, res) => {
//   try {
//     const users = await User.findAll()
//     res.json(users)
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// })

app.get('/contacts', (req, res) => {
  res.json(mockUsers)
})

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`)
    })
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error)
  })
