import { debitRequis } from "../components/debit-requis.html.js";
import { parametreData } from "../components/parametreData.html.js";
import { parametreEntreSmarphoneDataCard, volumeTraficInternetDataCard, volumeTraficInternetSmartPhone  } from "./data.js";
import {  navParametreEntre, section, navDebitRequis } from "./dom.js";
import { calculeData, calculeVolume } from "./function.js";



//inner(section, parametreData());

/** Navigation , pour ce dernier on utilise un principe simple
 *  à savoir : on a des fonctions qui retournes de contenues html,
 *  lorqu'on clique sur le bouton de navigation, la fonction contenant le html demander est appelée 
 * 
 * */
navParametreEntre?.addEventListener('click', ()=>{
    section.innerHTML = '';
    section.innerHTML = parametreData();
     const totalAbonneInput = document.querySelector("#total-abonne-input");
     const dataCardInput = document.querySelector("#data-card-input");
     const smartphoneInput = document.querySelector("#smartphone-input"); //
     const totalDataCard = document.querySelector("#total-data-card");
     const totalSmartphone = document.querySelector("#total-smartphone");

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
        parametreEntreSmarphoneDataCard["totalDataCard"] = parseFloat(totalDataCard.value);
        parametreEntreSmarphoneDataCard["totalSmartPhone"] = parseFloat(totalSmartphone.value);
        parametreEntreSmarphoneDataCard["totaleAbonne"] = parseFloat(e.target.value);
        //
    }
    console.log(parametreEntreSmarphoneDataCard);
})
dataCardInput?.addEventListener("input", (e)=>{
    if(parseFloat(totalAbonneInput.value) <= 0 || parseFloat(e.target.value) <=0){
        alert("les valeurs choisies doivent être positives");
    }else{
        totalDataCard.value = calculeData(parseFloat(totalAbonneInput.value), parseFloat(e.target.value));
        parametreEntreSmarphoneDataCard["totalDataCard"] = parseFloat( totalDataCard.value);
    }
    console.log(parametreEntreSmarphoneDataCard);


})
smartphoneInput?.addEventListener("input", (e)=>{
    if(parseFloat(totalAbonneInput.value) <= 0 || parseFloat(e.target.value) <=0){
        alert("les valeurs choisies doivent être positives");
    }else{
        totalSmartphone.value = calculeData(parseFloat(totalAbonneInput.value), parseFloat(e.target.value))
        parametreEntreSmarphoneDataCard["totalSmartPhone"] = parseFloat(totalSmartphone.value);
    }
    console.log(parametreEntreSmarphoneDataCard);
})

/* end section 1 Parametres d'entrées - % de smartphones et de "Data Card" */
})

navDebitRequis.addEventListener('click', ()=>{
    section.innerHTML = '';
    section.innerHTML = debitRequis();
    /** 
 *  debut
 * Section 2 pour les volumes 
 * */
 const allInputForVolume = document.querySelectorAll("table tbody tr td .inputs");

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
})



/**
 * Fin de la navigation
*/








/**
 * fin de la section
 */


