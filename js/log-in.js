
const btn = document.querySelector('.btn-login');
const loginForm = document.getElementById('loginForm');




loginForm.addEventListener('submit',(e)=>{
    const getData = JSON.parse(localStorage.getItem('userData'));
    const userNameValue = document.querySelector('#userNameLogIn').value;
    const userPsrValue =(document.querySelector('#userPasswordLogIn').value);
    e.preventDefault();
    

    if(!userNameValue == "" && !userPsrValue == ""){
      // Verificar si el usuario existe y la contraseña es correcta
      let found = getData.find(element => element.name == userNameValue);
      if(found && found.password == userPsrValue ){
        // Redirigir al usuario a la página de bienvenida
        /*window.location.href = `result.html?username=${userNameValue}`;*/
        window.location.href = `index.html?username=${userNameValue}`;
        
      }else{
        alert('usuario o contraseña incorectos');
        e.preventDefault();
      }
        
      return;
    }
})
/*
export function userName(){
  const userNameValue = document.querySelector('#userNameLogIn').value;
  return userNameValue;
}


/*
window.addEventListener('click', e=>{
      switch(e.target.id){
        case 'btn-login':
          
          logFunc(e);

          break;
      }
})

function logFunc(e){
  const getData = JSON.parse(localStorage.getItem('info'));
  const userPsrValue =(document.querySelector('#userPasswordLogIn').value);
  const userNameValue = document.querySelector('#userNameLogIn').value;

  if(!userNameValue == "" && !userPsrValue == ""){
   
    let found = getData.find(element => element.name == userNameValue);
    if(found && found.password == userPsrValue ){
      window.open('./result.html')
      
    }else{
      alert('usuario o contraseña incorectos');
      e.preventDefault();
    }
      
    
  }else{
    
  }
  
}

*/





