document.addEventListener("DOMContentLoaded",()=>{
    let input = document.getElementById("input");
    let buttons = document.querySelectorAll(".btn");

    let currentInput = "";
    let operator = null;
    let firstOperand = "";
    let secondOperand = "";

    buttons.forEach(button => {
        button.addEventListener("click",()=>{
            let value = button.getAttribute("data-value");
            if(value === "C"){
                // C => Clear every thing
                currentInput = "";
                operator = null ;
                firstOperand = "";
                secondOperand = "";
                input.value = "";      
            }
            else if(value === "DEL"){
                // DEL => delete last element
                currentInput = currentInput.slice(0,-1);
                input.value = currentInput;
                        }
            else if (value === "="){
                // =  => perform calculation
                if(operator && firstOperand && currentInput){
                    secondOperand = currentInput;
                    let result = calculate(firstOperand , secondOperand , operator);
                    input.value = result;
                    currentInput = result;
                    operator = null ;
                    firstOperand = "";
                    secondOperand = "";
                }
            }
            else if (["+" , "-" , "*" , "/"].includes(value)){
                if(currentInput){
                    operator = value;
                    firstOperand = currentInput;
                    secondOperand = ""
                    currentInput = ""
                }
            } 
            else{
                currentInput += value;
                input.value = currentInput;
            }     
        })
    })
     function calculate(num1,num2,operator){
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);


            if (num2 === 0) return "Error";      
        switch(operator){
            case "+":
            return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2 ;
            case "/":
                return num1 / num2 ;
            default:
                return 0  

        }
     }
})