const botones=document.querySelectorAll(".boton");
const pantallAinput=document.querySelector(".pantallAinput");
const reinicio=document.querySelector(".botoNreinicio");
const operadorr=document.querySelectorAll(".operador");
const igual=document.querySelector(".igual");
let num1=0;
let num2=0;
let operador="";
let operadorGuardado="";
function pulsar(a){
      if (a.target.classList.contains("operador") || a.target.classList.contains("igual")) return;
    const numero = a.target.innerText;
    pantallAinput.value = pantallAinput.value === ""
        ? numero
        : pantallAinput.value + numero;
}

botones.forEach(boton=>{
    boton.addEventListener("click",pulsar);
}
)
function reiniciar(){
pantallAinput.value="";

}
reinicio.addEventListener("click", reiniciar);

function op(b){
operador=b.target.innerText;
if (operador=="+" || operador=="-" || operador=="*" || operador=="/" || operador=="%"){
      operadorGuardado=operador;
   num1=(pantallAinput.value);
  pantallAinput.value="";
}

else if(operador=="="){
  num2=(pantallAinput.value);
 switch(operadorGuardado){
      case "+": pantallAinput.value = Number(num1) + Number(num2); break;
      case "-": pantallAinput.value = Number(num1) - Number(num2); break;
      case "*": pantallAinput.value = Number(num1) * Number(num2); break;
      case "/": pantallAinput.value = Number(num1) / Number(num2); 
      if (num2==0){
        pantallAinput.value="Error";
      }
      break;
      case "%": pantallAinput.value = Number(num1) % Number(num2); break;
    }
}
}
operadorr.forEach(sum=>{
sum.addEventListener("click", op);
})
igual.addEventListener("click", op);