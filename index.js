
const express = require("express")
const uuid = require("uuid")
const cors = require("cors")

const port = process.env.PORT || 3001
const app = express()
app.use(express.json())
app.use(cors())


const users = []

const check_id = (request, response, next) => {

    const { id } = request.params

    const index = users.findIndex(user => user.id === id)

    if (index < 0) {
        return response.status(404).json({ message: "User not Found" })
    }

    request.user_index = index
    request.user_id = id

    next()

}



app.get('/users/', (request, response) => {


    return response.json(users)
})


app.post('/users/', (request, response) => {
    const { name, age } = request.body

    const user = { id: uuid.v4(), name, age }

    users.push(user)

    return response.status(201).json(user)
})

app.put('/users/:id', check_id, (request, response) => {


    const { name, age } = request.body

    const index = request.user_index

    const id = request.user_id

    const uptade_user = { id, name, age }

    users[index] = uptade_user

    return response.json(uptade_user)
})


app.delete('/users/:id', check_id, (request, response) => {

    const index = request.user_index

    users.splice(index, 1)

    return response.status(201).json({ message: "User deleted" })
})


















app.listen(port, () => {
    console.log(`🚚  vamos rodar ${port}`)
})




