// Obtener el nombre de usuario de la URL
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');


const userNameView = document.querySelector('.userNameView');
const linkAcount= document.querySelector('.linkAcount');


console.log(username)

if(username == null){
    console.log('no existe')
}else{
    userNameView.innerHTML = username;
    linkAcount.innerHTML = username;
    linkAcount.removeAttribute("href");

}



