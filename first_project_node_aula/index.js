/*
-> Query params => meusite.com/users?name=wanndeko&age=24 // filtros 
-> Route params => /users/2    // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
-> Request Body => {"name: wanndeko", "age:"}


- GET          => Buscar informação no back-end
- POST         => Criar informação no back-end
- PUT / PATCH  => Alterar/Atualizar informação no back-end
- DELETE       => Deletar informação no back-end 
- Middleware   => INTERCEPETADOR => tem o poder de parar ou alterar dados da requisição


-> THIS  //////////////

-> this em inglês significa => este, esta, isto...

No JavaScript, o this faz referencia:

Node => module.exports
Web => window


ESCOPO:

=> GLOBAL -> Quando começamos a escrever  nossa aplicação.
    nos contexto global, o this faz referencia ao objeto global,
    que é o objeto window no navegador de internet ou ao objeto global no Node.js.


=> Local -> Por exempleo, dentro de uma função 



*/


// const n_express = require("express")
// const port = 3000

// const app = n_express()

// app.get('/users/:id', (request, response) => {
//     // const { name, age } = request.query // Destructuring assignment
//     const { id } = request.params

//     return response.json({id})

// })

// app.listen(port, () => {
//     console.log(`🖥️  vamos rodar ${port}`)
// })

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////




const n_express = require("express")
const uuid = require("uuid")
const cors = require("cors")

const port = 3001
const app = n_express()
app.use(n_express.json())
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




