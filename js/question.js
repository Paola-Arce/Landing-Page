//funcion para proteger las variables de otras archivos

(function(){

    const titleQuestions = [...document.querySelectorAll('.questions__title')] ;// los 3 puntos son para convertir los elementos en un array
    titleQuestions.forEach(question=> {

        question.addEventListener('click', ()=>{

            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add'); 
            question.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight; // da el alto minimo para que un elemento se muestre
            }
            
            answer.style.height =`${height}px`;
        })
    })
})();