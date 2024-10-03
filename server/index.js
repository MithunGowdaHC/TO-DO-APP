// Jai Sri Ram;

const express =  require("express")

const app = express()

const PORT = 4000;

app.get("/hello", (req, res) => {
    res.status(200).json({msg:" Hello Mithun !" })
})

app.listen(PORT, ()=>{
    console.log(`Your server is running at http://localhost:${PORT}`)
})
