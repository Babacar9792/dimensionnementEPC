import { capaciteHtml } from "../components/capacite.js";
import { debitRequis } from "../components/debit-requis.html.js";
import { dimensionnement } from "../components/dimensionnement.js";
import { parametreData } from "../components/parametreData.html.js";
import { calculProcedure } from "../components/procedure-signalisation.js";
import { traficTotal } from "../components/trafic-total.js";
import { configuration_profileData, parametreEntreSmarphoneDataCard, volumeTraficInternetDataCard, volumeTraficInternetSmartPhone  } from "./data.js";
import {  navParametreEntre, section, navDebitRequis, configuration_profile, navTracficTotal, navCalculProcedure, navDimensionnement, navCapacite } from "./dom.js";
import { calculeData, calculeVolume, dimensionnementPlanUsager, lastTab, procedureSignalisation, traficTotalVpnInternetDlUl, traficTotalVpnInternetUl } from "./function.js";



/** start Modale 
 * 
 * 
 * 
 */
const modal = document.querySelector("dialog")
const btnCloseModal = document.querySelector(".btn-close")
const btnOpenModal = document.querySelector(".btn-open")

btnOpenModal.addEventListener("click", () => {
  modal.showModal()
})

btnCloseModal.addEventListener("click", () => {
  modal.close()
})

configuration_profile.value = configuration_profileData['configuration_profile'];
configuration_profile.addEventListener('input',(e)=>{
    if(parseFloat(e.target.value) <0 || e.target.value == ""){
        e.target.value = 1;
    }
    configuration_profileData['configuration_profile'] = parseFloat(e.target.value);
    const data_card_utilisant_vpn = document.querySelector("#data_card_utilisant_vpn");
    if(data_card_utilisant_vpn){
        data_card_utilisant_vpn.value = Math.round(parseFloat(configuration_profile.value)*parametreEntreSmarphoneDataCard['totaleAbonne']/100);
    }
    const trafic_total_vpn = document.querySelector("#trafic_total_vpn");
    if(trafic_total_vpn){
        trafic_total_vpn.value = data_card_utilisant_vpn.value * volumeTraficInternetDataCard['vpn']['volumeTraficUlDL']/1000000;
    }
    const data_card_utilisant_vpn2 = document.querySelector('#data_card_utilisant_vpn2');
    if(data_card_utilisant_vpn2 ){
        data_card_utilisant_vpn2.value = Math.round(parseFloat(configuration_profile.value)*parametreEntreSmarphoneDataCard['totaleAbonne']);
    }
    const trafic_total_vpn2 = document.querySelector('#trafic_total_vpn2');
    if(trafic_total_vpn2){
        trafic_total_vpn2.value = data_card_utilisant_vpn2.value * volumeTraficInternetDataCard['vpn']['volumeTraficUlDL']/1000000;
    }
    const debit_total_vpn = document.querySelector('#debit_total_vpn');
    if(debit_total_vpn){
        debit_total_vpn.value = parseFloat(trafic_total_vpn.value)*8*1000/3600;
    }
    const debit_total_vpn2 = document.querySelector('#debit_total_vpn2');
    if (debit_total_vpn2) {
        debit_total_vpn2.value = parseFloat(trafic_total_vpn2.value)*8*1000/3600;
    }

})

/**end modale */

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
    
})
dataCardInput?.addEventListener("input", (e)=>{
    if(parseFloat(totalAbonneInput.value) <= 0 || parseFloat(e.target.value) <=0){
        alert("les valeurs choisies doivent être positives");
    }else{
        totalDataCard.value = calculeData(parseFloat(totalAbonneInput.value), parseFloat(e.target.value));
        parametreEntreSmarphoneDataCard["totalDataCard"] = parseFloat( totalDataCard.value);
    }
    


})
smartphoneInput?.addEventListener("input", (e)=>{
    if(parseFloat(totalAbonneInput.value) <= 0 || parseFloat(e.target.value) <=0){
        alert("les valeurs choisies doivent être positives");
    }else{
        totalSmartphone.value = calculeData(parseFloat(totalAbonneInput.value), parseFloat(e.target.value))
        parametreEntreSmarphoneDataCard["totalSmartPhone"] = parseFloat(totalSmartphone.value);
    }
    
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


navTracficTotal.addEventListener('click', ()=>{

    section.innerHTML = '';
    section.innerHTML = traficTotal();
    traficTotalVpnInternetDlUl();
    traficTotalVpnInternetUl();
})

navCalculProcedure.addEventListener("click",()=>{
    section.innerHTML = '';
    section.innerHTML = calculProcedure();
    procedureSignalisation();
})





/**
 * Fin de la navigation
*/


/**  procédure de signalisation */



/** fin de procédure de signalisation */


navDimensionnement.addEventListener("click", ()=>{
    section.innerHTML = "";
    section.innerHTML = dimensionnement();
    dimensionnementPlanUsager();
})

navCapacite.addEventListener('click', ()=>{
    section.innerHTML = "";
    section.innerHTML = capaciteHtml();
    lastTab();
})









/**
 * fin de la section
 */


