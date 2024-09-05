const inputText = document.querySelectorAll(".input-text");

inputText.forEach(input => {
   
    input.addEventListener("change", () => {
        if(input.value !== ""){
            input.classList.add("verde")
        }
        else{
            input.classList.remove("verde")

        }
    })

    const botao = document.querySelector(".botao");
    botao.addEventListener("click", () => {
        if(input.value === "" ){
            input.classList.add("vermelho").innerText = '*Campo obrigatório';
            
        
        }
        else{
            input.classList.remove("verde")

        }
       
    })
    
});