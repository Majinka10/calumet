// Obtengo todos los botones de la misma clase
var botones = document.querySelectorAll(".numero");
var operaciones = document.querySelectorAll(".operation");
var inputs = document.querySelectorAll(".inputs");
// Obtengo los siguientes elementos por su ID
var resetBtn = document.getElementById("reset");
var deleteBtn = document.getElementById("delete");
var resultBtn = document.getElementById("result");
var operacionSpan = document.getElementById("operation-input");
var resultInp = document.getElementById("result-input");
var errorMessage = document.getElementById("error-message");
var errorMessageNumber = document.getElementById("error-message-number");
var errorMessageOperation = document.getElementById("error-message-operation");

var actualInput = inputs[0];
var valuesInputs = []

//FALTA EL INPUT DEL RESULTADO Y LOS BOTONES PARA LAS OPERACIONES

//Inicializo los valores de cada input
for (k=0; k<inputs.length; k++){
    valuesInputs[k]="";
};

// Le agrego un evento al hacer click a cada input iterando la lista de inputs
for (j=0; j<inputs.length; j++){
    inputs[j].addEventListener("click", function(){
        actualInput=this;
    });
};

// Le agrego un evento al hacer click a cada boton iterando la lista de botones
for (i=0; i<botones.length; i++){
    botones[i].addEventListener("click", function(){
        var botonValue = this.value;

        actualIndex = Array.from(inputs).indexOf(actualInput); //Comvierto la lista en un array para poder aplicar indexOf

        valuesInputs[actualIndex] += botonValue;
        actualInput.value=valuesInputs[actualIndex];
    });
};

//Le agrego un evento al hacer click al boton de reset que limpia todos los inputs
resetBtn.addEventListener("click", function(){
    for(i=0; i<inputs.length; i++){
        inputs[i].value="";
        valuesInputs[i]="";
    }
    operacionSpan.textContent = "";
    resultInp.value = "";
})

// Le agrego un evento al hacer click al boton de reset que elimina un caracter con slice
deleteBtn.addEventListener("click", function(){
    actualIndex = Array.from(inputs).indexOf(actualInput); 
    valuesInputs[actualIndex] = valuesInputs[actualIndex].slice(0, -1);
    actualInput.value=valuesInputs[actualIndex];
})


//Le agrego el evento a las operaciones, para que al hacer click actualicen el valor del input 'operation'
for(i=0; i<operaciones.length; i++){
    operaciones[i].addEventListener("click", function(){
        var operacionValue = this.value;
        operacionSpan.textContent = operacionValue;
    })
}

var resultado = 0;
resultBtn.addEventListener("click", function(){
    var operacionValue = operacionSpan.textContent;
    if (valuesInputs[0] && valuesInputs[1] && operacionValue){
        switch(operacionValue){
            case '+':
                resultado = parseInt(valuesInputs[0]) + parseInt(valuesInputs[1]);
                break;
            case '-':
                resultado = parseInt(valuesInputs[0]) - parseInt(valuesInputs[1]);
                break;
            case '*':
                resultado = parseInt(valuesInputs[0]) * parseInt(valuesInputs[1]);
                break;
            case '/':
                resultado = parseInt(valuesInputs[0]) / parseInt(valuesInputs[1]);
                break;
        }
        resultInp.value=resultado;}
    else if(valuesInputs[0] && valuesInputs[1] && !operacionValue){
        errorMessageOperation.style.display = "inline-block";   
        setTimeout(() => {
            errorMessageOperation.style.display = "none";   
          }, 4000)
    }
    else if(!valuesInputs[0] && !valuesInputs[1] && operacionValue){
        errorMessageNumber.style.display = "inline-block";   
        setTimeout(() => {
            errorMessageNumber.style.display = "none";   
          }, 4000)
    }
    else {
        errorMessage.style.display = "inline-block";   
        setTimeout(() => {
            errorMessage.style.display = "none";   
          }, 4000)
    }
})
