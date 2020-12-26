let name = "" // define name as a let to scope .

function handleSubmit() { // in this function take the value  by id from input and print it in console 
    name = document.getElementById('name').value 


    fetch(`http://localhost:3000/user?name=${name}`,{ 
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
}) 
    fetch('http://localhost:3000/user',{
    method:'post',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name
    })
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})
    
}



