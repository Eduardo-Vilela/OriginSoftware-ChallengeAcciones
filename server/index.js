import express from 'express'
import testRouter from './routes/testRouter.js'

const app = express()
const PORT = 8000

app.use(express.json())

app.get('/', (req,res) =>{
    res.send('Backend de prueba con Supabase')
})

app.use('/api/testService', testRouter)

app.listen(PORT, () => {
    console.log("Backend server is running!");
})

