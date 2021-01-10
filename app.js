window.onload=function(){
    //alert("If you like it, please upvote and comment")
     $("#card").flip({ axis: 'y', trigger: 'manual' });
    var button=document.querySelectorAll("button");
    var input=document.querySelector("input")
    var calculadora=document.querySelector(".calculadora")
    var contacto=document.getElementById("contacto")
    button.forEach(function(button){
        button.addEventListener("click",calculator)
    })
    
    function calculator(e){
        e.preventDefault();
        var valor=parseInt(e.target.innerText);
        texto=input.value;
        
        if(isNaN(valor)){
            var signo=e.target.innerText;
            if((signo=="/" || signo=="*") && (input.value.indexOf("/")>=0 || input.value.indexOf("*")>=0)){
                input.value=texto.slice(0,-1);
            }
            switch(signo){
                case "Info": $("#card").flip("true");
                break;
                case "Back": $("#card").flip(false);
                case "C": input.value="";
                break;
                case "=": try{
                    input.value=eval(input.value);
                    
                    
                    
                }catch(error){
                    
                    input.value="Syntax Error" 
                }
                break;
                case "<": input.value=texto.slice(0,-1);
                break;
                default: input.value+=signo;
                break;
            }
        }else{
            input.value+=valor;
        }
            
    }

    









}