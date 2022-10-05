let nombre, apellido, usuario, email, address, country

function LeerData(){
let nombre = document.getElementById ('firstName').value 
let apellido = document.getElementById ('lastName').value 
let nombreUsuario = document.getElementById ('username').value
let email = document.getElementById ('email').value
let adress = document.getElementById ('address').value
let country = document.getElementById ('country').value
}
let formulario = document.getElementById ('form')
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
})

function GuardarLocalStorage (){
localStorage.setItem ('Nombre',nombre)
localStorage.setItem ('Apellido',apellido)
localStorage.setItem ('Usario',usuario)
localStorage.setItem ('Email',email)
localStorage.setItem ('Address',address)
localStorage.setItem ('Country',country)
}

function ExtraerInfo(){
    localStorage.setItem('Nombre')
    alert('Bienvenido', )
}

