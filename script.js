//    let json = {
//     llave: valor
//    }


let bd = [
    {
        email:"alejagomez.026@gmail.com",
        password:"aleja",
        username:"alejandra",
        active: true
    },
    {
        email:"sofia@gmail.com",
        password:"sofi",
        username:"sofia",
        active: true
    },
    {
        email:"laura@gmail.com",
        password:"lau",
        username:"laura",
        active: true
    },
]
function sayhi(){
   let username = document.querySelector("#username").value
   let password = document.querySelector("#password").value

   if(username === "" || username.length < 4) return alert ("no cumple con los parametros")
   

for(let i = 0 ; i < bd.length; i++){
    if(username == bd[i].username || username == bd[i].email && password == bd[i].password ){
        alert("ingreso correcto")
        return;
    }
    
}

    alert("usuario o contraseña incorrecta")


}