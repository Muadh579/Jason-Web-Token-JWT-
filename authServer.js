const express = require('express')
const app  = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

let refreshTokens = []

app.post('Login', (req, res) => {
const  refreshToken = req.body.token

 const username = req.body.username
 const user = {name: username }

 const accessToken = generateAcessToken(user)
 const refreshToke = jwt.sign(user, prcoess.env.REFRESH_TOKEN_SECRET)
if (refreshToken == null) return res.sendStatus(401)
if (refreshToken.includes (refreshToken)) return res.sendStatus(403)
jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err,user)=> {
if (err) return res.sendStatus(403)
const accessToken = generateAcessToken({name: user.name })

 })

 process.env.REFRESH_TOKEN_SECRET
 refreshTokens. push(refreshToken)
 
 res.json({accessToken : accessToken, refreshToken: refreshToken})

})

function generateAcessToken(user) {
    return jwt.sign(user, process.env.ACESS_TOKEN_SECRET, {expiresIn: '10 m'})
}

app.listen(4000)
