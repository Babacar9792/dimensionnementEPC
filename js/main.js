import { debitRequis } from "../components/debit-requis.html.js";
import { parametreData } from "../components/parametreData.html.js";
import { volumeTraficInternetDataCard, volumeTraficInternetSmartPhone  } from "./data.js";
import { totalAbonneInput, dataCardInput, smartphoneInput, totalDataCard, totalSmartphone, navParametreEntre, section, btnToTable1, btnToTable2, table2, table1, allInputForVolume, navDebitRequis } from "./dom.js";
import { calculeData, calculeVolume, inner } from "./function.js";



//inner(section, parametreData());

/** Navigation , pour ce dernier on utilise un principe simple
 *  à savoir : on a des fonctions qui retournes de contenues html,
 *  lorqu'on clique sur le bouton de navigation, la fonction contenant le html demander est appelée 
 * 
 * */
navParametreEntre?.addEventListener('click', ()=>{
    section.innerHTML = '';
    section.innerHTML = parametreData();
})

navDebitRequis.addEventListener('click', ()=>{
    section.innerHTML = '';
    section.innerHTML = debitRequis();
})



/**
 * Fin de la navigation
*/

/**
 *  start section 1 Parametres d'entrées - % de smartphones et de "Data Card" 
 * */
totalAbonneInput?.addEventListener("input",(e)=>{
    totalDataCard.value = "0";
    totalSmartphone.value = "0";
    if(parseFloat(e.target.value) <=0 || e.target.value == ""){
        alert("La valeur doit être strictement positive");
    }else{
        totalDataCard.value = (parseFloat(dataCardInput.value) <=0 || dataCardInput.value == "") ? "0" : calculeData(parseFloat(e.target.value), parseFloat(dataCardInput.value));
        totalSmartphone.value = parseFloat(smartphoneInput.value) <=0 ? "0" : calculeData(parseFloat(e.target.value), parseFloat(smartphoneInput.value));
    }
})
dataCardInput?.addEventListener("input", (e)=>{
    if(parseFloat(totalAbonneInput.value) <= 0 || parseFloat(e.target.value) <=0){
        alert("les valeurs choisies doivent être positives");
    }else{
        totalDataCard.value = calculeData(parseFloat(totalAbonneInput.value), parseFloat(e.target.value));
    }

})
smartphoneInput?.addEventListener("input", (e)=>{
    if(parseFloat(totalAbonneInput.value) <= 0 || parseFloat(e.target.value) <=0){
        alert("les valeurs choisies doivent être positives");
    }else{
        totalSmartphone.value = calculeData(parseFloat(totalAbonneInput.value), parseFloat(e.target.value))
    }
})

/* end section 1 Parametres d'entrées - % de smartphones et de "Data Card" */


/** 
 *  debut
 * Section 2 pour les volumes 
 * */

allInputForVolume.forEach(element => {
    let tab = element.getAttribute("tab");
    let ligne = element.getAttribute("ligne");
    let colonne = element.getAttribute("colonne");
    if(tab == "smartPhone"){
        element.value = volumeTraficInternetSmartPhone[ligne][colonne];
    }
    else {
        element.value = volumeTraficInternetDataCard[ligne][colonne];
    }
    calculeVolume(element);
    
})



/**
 * fin de la section
 */


