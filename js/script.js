

let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});


/* my code */
// sing Up code
let name=document.getElementById("name");
let email=document.getElementById("email");
let password=document.getElementById("password");
let confirmPassword=document.getElementById("confimPassword");
let singUpBtn=document.getElementById("sing_up");
/* rgx */
let nameRgx=/^([a-zA-Z])+$/;
 let emailRgx=/^([a-zA-Z0-9])+[@]([a-z])*[.]com$/;
 let passwordReg=/^([0-9])+$/
let singUpData=(localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]);

console.log(singUpData);
singUpBtn.addEventListener("click",()=>{
 
      if(password.value==confirmPassword.value){
          if(nameRgx.test(name.value) && emailRgx.test(email.value) &&passwordReg.test(password.value)){
             let userObj={
                uName:name.value,
                uEmail:email.value,
                uPassword:password.value,
                uConPassword:confirmPassword.value,
            }
            singUpData.push(userObj);
            localStorage.setItem("data",JSON.stringify(singUpData));
            name.value="";
            email.value="",
            password.value="",
            confirmPassword.value=""
            swal("Good job!", "Registration Success!", "success")
   }else{
    swal("Warning!", "Please enter valid credential!", "error")
   }
}
   else{
    swal("Warning!", "Password miss match!", "error")
   }
} 
)

//login code

let loginUser=document.getElementById("loginUser")
let loginEmail=document.getElementById("lEmail")
let loginPassword=document.getElementById("lPassword");
let url=document.getElementById("url");
loginUser.addEventListener("click",(event)=>{
    event.preventDefault();
    let conform=false;
    for (let index = 0; index < singUpData.length; index++) {
         if(loginEmail.value===singUpData[index].uEmail && loginPassword.value===singUpData[index].uPassword){
            conform=true;
            break;
         }
        
    }
    if(conform){
      
        window.location="https://www.linkedin.com/in/santhosh01happy/";
        loginEmail.value="";
        loginPassword.value="";
     swal("Good job!", "Login success!", "success")
        

    }else{
     swal("Warning!", "User name invalid!", "success")
        
    }
})




