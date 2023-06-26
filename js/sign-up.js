const btn = document.querySelector('.btn-signUp');
const signupForm = document.getElementById('signupForm');


let info=[{}];

signupForm.addEventListener('submit',(e)=>{
    const userNameValue = document.querySelector('#userNameSignUp').value;
    const userPsrValue = document.querySelector('#userPasswordSignUp').value;
    const userPsrRepeatValue = document.querySelector('#userPasswordRepeatSignUp').value;
    const infoString = JSON.stringify(info);
    
    if(!userNameValue == "" && !userPsrValue == ""){
      // Verificar si el nombre de usuario ya está en uso
      if(infoString.includes(userNameValue)){
        alert('ya existe ese nombre');
        e.preventDefault();

      }else{
        // Verificar si ambas contraseñas son iguales
        if(userPsrValue == userPsrRepeatValue){
          // Guardar el nuevo usuario en localStorage
            info.push({
                    name: userNameValue,
                    password: userPsrValue
                    });
                    localStorage.setItem('userData',JSON.stringify(info));
                    window.open('./log-in.html');
        }else{
            alert('la contraseña no es la misma');
            e.preventDefault();
        }
        
      
      }
      
      return;
    }
})

//Guardar los datos en info[]
let getData = JSON.parse(localStorage.getItem('userData'));
console.log(getData);
if(getData==null){
    console.log('')
    info=[];
}else{
  info=getData;
  
}
console.log(info);
