const expres = require('express')
const app = express()
const bcrypt = require('bcrypt')

app.use(express.json())

const users = []

app.get('/users', async (req, res)) => {
    res.json(users)
}

app.post('/users', (req, res) => {
    try {
        const salt = bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        console.log(salt)
        console.log(hashedPassword)
        const user = { name: req.body.name, password: hashedPassword}
    users.push(user)
    res.status(201).send() 
   } catch {
       res.status(500).send()
   }
})

app.post('users/login', (req,res) => {
    const user = users.find(user => username = req.body.name)
    if  (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
       if (await bcrypt.compare(req.body.password, user.password)) {
           res.send('Sucesss')
    } else {
        res.send('Not Allowed')
    }
    } catch {
        res.status(500).send()
    }

})


app.listen(3000)
