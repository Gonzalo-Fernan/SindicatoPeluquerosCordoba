const botonMenu = document.getElementById("botonMenu")
const menuList = document.getElementById("menu")
const cerrar = document.getElementById("cerrar")
const body = document.getElementById("main")
const convenios = document.getElementById("convenios")
const escalas = document.getElementById("escalas")

botonMenu.addEventListener("click", (e)=>{
    menuList.classList.remove("active")
    body.classList.add("background")
})

cerrar.addEventListener("click",()=>{
    menuList.classList.add("active")
    body.classList.remove("background")
})

convenios.addEventListener("click", hide)


function hide () {
    menuList.classList.add("active")
    body.classList.remove("background")
}