const express= require ('express');
const axios = require ('axios');
const app = express();

app.get('/', function(req,res){
    let jsonObj=[
        {
        id:234,
        name:"leila"
    },
    {
        id:234,
        name:"leila"
    },
    {
        id:234,
        name:"leila"
    },
    {
        id:234,
        name:"leila"
    },
    {
        id:234,
        name:"leila"
    }

]
res.send(jsonObj);

})
app.listen ('3402', ()=>{
    console.log("app listening on port 3402");
})
axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then(res =>{
    res.json(results.data)
})
.catch(err =>{

})
