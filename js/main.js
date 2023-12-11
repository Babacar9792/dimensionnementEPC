import { totalAbonneInput, dataCardInput, smartphoneInput, totalDataCard, totalSmartphone } from "./dom.js";
import { calculeData } from "./function.js";



/*  start section 1 Parametres d'entrées - % de smartphones et de "Data Card" */
totalAbonneInput.addEventListener("input",(e)=>{
    totalDataCard.value = "0";
    totalSmartphone.value = "0";
    if(parseFloat(e.target.value) <=0 || e.target.value == ""){
        alert("La valeur doit être strictement positive");

    }else{
        totalDataCard.value = (parseFloat(dataCardInput.value) <=0 || dataCardInput.value == "") ? "0" : calculeData(parseFloat(e.target.value), parseFloat(dataCardInput.value));
        totalSmartphone.value = parseFloat(smartphoneInput.value) <=0 ? "0" : calculeData(parseFloat(e.target.value), parseFloat(smartphoneInput.value));
   
        
    }
})
dataCardInput.addEventListener("input", (e)=>{
    if(parseFloat(totalAbonneInput.value) <= 0 || parseFloat(e.target.value) <=0){
        alert("les valeurs choisies doivent être positives");
    }else{
        totalDataCard.value = calculeData(parseFloat(totalAbonneInput.value), parseFloat(e.target.value));
    }

})
smartphoneInput.addEventListener("input", (e)=>{
    if(parseFloat(totalAbonneInput.value) <= 0 || parseFloat(e.target.value) <=0){
        alert("les valeurs choisies doivent être positives");
    }else{
        totalSmartphone.value = calculeData(parseFloat(totalAbonneInput.value), parseFloat(e.target.value))
    }
})

/* end section 1 Parametres d'entrées - % de smartphones et de "Data Card" */

