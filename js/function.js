import { capaciteInterface, dimensionnementUser, parametreEntreSmarphoneDataCard, procedureObjet, valeurPreliminaire, volumeTraficInternetDataCard, volumeTraficInternetSmartPhone } from "./data.js";
import { configuration_profile } from "./dom.js";


export function calculeData(total, pourcentage){
    return total * pourcentage/100;
}

export function inner(section,components){
    section.innerHTML = '';
    section.innerHTML = components;
}

export function calculeVolume(element) {
    element.addEventListener('input', (e)=>{
        if(parseFloat(e.target.value) <= 0 || e.target.value == ""){
            alert('les valeurs négatives ou nulles ne sont pas acceptées')
            e.target.value = 1;
        }
        else{
            let tabNew = e.target.getAttribute("tab");
            let ligneNew = e.target.getAttribute("ligne");
            let colonneNew = e.target.getAttribute("colonne");
            if(tabNew == "dataCard"){
                getVolumeByTableau(volumeTraficInternetDataCard,tabNew, ligneNew, colonneNew, e);
                if (ligneNew == "vpn") {
                    let inputForSommeVpnUlDl = document.querySelector("#dataCard_volumeTraficUlDL_vpn");
                    let inputForSommeVpnDl = document.querySelector("#dataCard_volumeTraficDl_vpn");
                    inputForSommeVpnUlDl.value = volumeTraficInternetDataCard["vpn"]['volumeTraficUlDL'];
                    inputForSommeVpnDl.value = volumeTraficInternetDataCard["vpn"]['volumeTraficDl'];
                    
                }
            }else{
                getVolumeByTableau(volumeTraficInternetSmartPhone,tabNew, ligneNew, colonneNew, e);
                
            }
        }
    })
}

export function paramFirstTab(){
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
}

function getVolumeByTableau(objetTableau,tabNew, ligneNew, colonneNew, e) {
    let ele = document.querySelector(`#${tabNew+'_'+ligneNew+'_volumeTraficUlDL'}`);
    let ele1 = document.querySelector(`#${tabNew+'_'+ligneNew+'_volumeTraficDl'}`);
    objetTableau[ligneNew][colonneNew] = parseFloat(e.target.value);
                switch (colonneNew) {
                    case 'nombreDeSession':
                        objetTableau[ligneNew]['nombreDeSession'] = parseFloat(e.target.value);
                        objetTableau[ligneNew]['volumeTraficUlDL']=objetTableau[ligneNew]['nombreDeSession']*objetTableau[ligneNew]['tailleSession'];
                        ele.value = objetTableau[ligneNew]['volumeTraficUlDL'].toString();
                        ele1.value  = parseFloat(ele.value)*parseFloat(objetTableau[ligneNew]['pourcentageDl'])/100;
                        break;
                    case 'tailleSession':
                        objetTableau[ligneNew]['tailleSession'] = parseFloat(e.target.value);
                        objetTableau[ligneNew]['volumeTraficUlDL']=objetTableau[ligneNew]['nombreDeSession']*objetTableau[ligneNew]['tailleSession'];
                        ele.value = objetTableau[ligneNew]['volumeTraficUlDL'];
                        ele1.value = parseFloat(ele.value)*parseFloat(objetTableau[ligneNew]['pourcentageDl'])/100;
                    break;
                    case 'pourcentageDl':
                        objetTableau[ligneNew]['pourcentageDl'] = parseFloat(e.target.value);
                        ele1.value = objetTableau[ligneNew]['pourcentageDl']*objetTableau[ligneNew]['volumeTraficUlDL']/100;
                        objetTableau[ligneNew]['volumeTraficDl'] = parseFloat(ele1.value);
                    break;
                    default:
                        alert("choix indisponible");
                        break;
                }
                objetTableau[ligneNew]['volumeTraficDl'] = parseFloat(ele.value)*parseFloat(objetTableau[ligneNew]['pourcentageDl'])/100;
                displaySommeTotaleTrafic(objetTableau,tabNew, "volumeTraficUlDL");
                displaySommeTotaleTrafic(objetTableau,tabNew, "volumeTraficDl");
}


function displaySommeTotaleTrafic(objetTableau,tab, critere) {
    let inputForSommeInternet = document.querySelector(`#${tab+'_'+critere+'_internet'}`)
    inputForSommeInternet.value  = SommeTotaleTrafic(objetTableau, critere);
    
}
function SommeTotaleTrafic(objetTableau, critere){
    let somme = 0;
    for (let cle in objetTableau) {
        if (objetTableau.hasOwnProperty(cle)) {
            somme += parseFloat(objetTableau[cle][critere])
        }
    }
    return somme;
}


export function traficTotalVpnInternetDlUl(){
    const volume_trafic_totale_smartphone = document.querySelector("#volume_trafic_totale_smartphone");
    volume_trafic_totale_smartphone.value = parametreEntreSmarphoneDataCard['totalSmartPhone']*SommeTotaleTrafic(volumeTraficInternetSmartPhone, "volumeTraficUlDL")/1000000 ;

    const volume_trafic_totale_carte = document.querySelector('#volume_trafic_totale_carte');
    volume_trafic_totale_carte.value = parametreEntreSmarphoneDataCard['totalDataCard'] * SommeTotaleTrafic(volumeTraficInternetDataCard, "volumeTraficUlDL")/1000000;
     
    const volume_trafic_totale = document.querySelector('#volume_trafic_totale');
    volume_trafic_totale.value = parseFloat(volume_trafic_totale_smartphone.value)+parseFloat(volume_trafic_totale_carte.value);

    const debit_internet_ul_dl = document.querySelector("#debit_internet_ul_dl");
    debit_internet_ul_dl.value = parseFloat(volume_trafic_totale.value)*8*1000/3600;

    const data_card_utilisant_vpn = document.querySelector("#data_card_utilisant_vpn");
    data_card_utilisant_vpn.value = Math.round(parseFloat(configuration_profile.value)*parametreEntreSmarphoneDataCard['totaleAbonne']);


    const trafic_total_vpn = document.querySelector("#trafic_total_vpn");
    trafic_total_vpn.value = data_card_utilisant_vpn.value * volumeTraficInternetDataCard['vpn']['volumeTraficUlDL']/1000000;

    const debit_total_vpn = document.querySelector('#debit_total_vpn');
    debit_total_vpn.value = parseFloat(trafic_total_vpn.value)*8*1000/3600;

}

export function traficTotalVpnInternetUl(){
    const volume_trafic_totale_smartphone2 = document.querySelector("#volume_trafic_totale_smartphone2");
    volume_trafic_totale_smartphone2.value = parametreEntreSmarphoneDataCard['totalSmartPhone']* SommeTotaleTrafic(volumeTraficInternetSmartPhone, "volumeTraficDl")/100000;
    
    const volume_trafic_totale_carte2 = document.querySelector("#volume_trafic_totale_carte2");
    volume_trafic_totale_carte2.value = parametreEntreSmarphoneDataCard['totalDataCard']* SommeTotaleTrafic(volumeTraficInternetDataCard, "volumeTraficDl")/100000;

    const volume_trafic_totale2 = document.querySelector('#volume_trafic_totale2');
    volume_trafic_totale2.value = parseFloat(volume_trafic_totale_smartphone2.value)+ parseFloat(volume_trafic_totale_carte2.value);

    const debit_internet_ul_dl2 = document.querySelector('#debit_internet_ul_dl2');
    debit_internet_ul_dl2.value = parseFloat(volume_trafic_totale2.value)*8*1000/3600; // parseFloat(parametreEntreSmarphoneDataCard['totalSmartPhone']* SommeTotaleTrafic(volumeTraficInternetSmartPhone, "volumeTraficDl")/100000)+ parseFloat(parametreEntreSmarphoneDataCard['totalDataCard']* SommeTotaleTrafic(volumeTraficInternetDataCard, "volumeTraficDl")/100000)*8*1000/3600

    const data_card_utilisant_vpn2 = document.querySelector('#data_card_utilisant_vpn2');
    data_card_utilisant_vpn2.value = Math.round(parseFloat(configuration_profile.value)*parametreEntreSmarphoneDataCard['totaleAbonne']);

    const trafic_total_vpn2 = document.querySelector('#trafic_total_vpn2');
    trafic_total_vpn2.value = data_card_utilisant_vpn2.value * volumeTraficInternetDataCard['vpn']['volumeTraficUlDL']/1000000;

    const debit_total_vpn2 = document.querySelector('#debit_total_vpn2');
    debit_total_vpn2.value = parseFloat(trafic_total_vpn2.value)*8*1000/3600; // parseFloat(Math.round(parseFloat(configuration_profile.value)*parametreEntreSmarphoneDataCard['totaleAbonne']) * volumeTraficInternetDataCard['vpn']['volumeTraficUlDL']/1000000)*8*1000/3600

}

export function procedureSignalisation() {
    const userActifHc = document.querySelector('#user-actif-hc');
    const abonneActifHc = document.querySelector('#abonne-actif-hc'); 
    const displayResultNAtach = document.querySelector('#display-result-n-atach');
    const nAtach = document.querySelector('#n-atach');
    const displayResultNDetach = document.querySelector('#display-result-n-detach');
    const nDetach = document.querySelector('#n-detach');
    const displayResultNIdleActive = document.querySelector('#display-result-n-idle-active');
    const nIdleActive = document.querySelector('#n-idle-active');
    const displayResultNPdn = document.querySelector("#display-result-n-pdn");
    const nPdn = document.querySelector("#n-pdn");
    const displayResultNBearersActivDesactiv = document.querySelector("#display-result-n-bearers-activ-desactiv");
    const nBearersActivDesactiv = document.querySelector("#n-bearers-activ-desactiv");
    const displayResultNTauInterMme = document.querySelector('#display-result-n-tau-inter_mme');
    const nTauInterMme = document.querySelector('#n-tau-inter_mme');
    const displayResultNTau = document.querySelector('#display-result-n-tau');
    const nTau = document.querySelector('#n-tau');
    const displayResultNX2Ho = document.querySelector('#display-result-n-x2-ho');
    const nX2Ho = document.querySelector('#n-x2-ho');
    const displayResultNS1Ho = document.querySelector('#display-result-n-s1-ho');
    const nS1Ho = document.querySelector('#n-s1-ho');
    const displayResultNNoInterMme = document.querySelector("#display-result-n-ho-inter-mme");
    const nHoInterMme = document.querySelector("#n-ho-inter-mme");
    const displayResultProcedure = document.querySelector("#display-result-procedure");



    /**
     * Initialisation
     */

            abonneActifHc.value = procedureObjet['abonneActivate'] ;
            displayResultProcedure.value = procedureObjet['procedure'];
            displayResultNAtach.value = procedureObjet['nAttach'];
            displayResultNDetach.value = procedureObjet['nDetache'];
            displayResultNIdleActive.value = procedureObjet['nIdleToActive'] ;
            displayResultNPdn.value = procedureObjet['nPdn'];
            displayResultNBearersActivDesactiv.value = procedureObjet['nBearers'];
            displayResultNTauInterMme.value = procedureObjet['nTauInterMme'] ;
            displayResultNTau.value = procedureObjet['nTau'] ;
            displayResultNX2Ho.value =  procedureObjet['nX2Ho'] ;
            displayResultNS1Ho.value = procedureObjet['nS1Ho'] ;
            displayResultNNoInterMme.value = procedureObjet['nHoInterMme'] ;

    /** Fin initialisation */

    userActifHc.addEventListener('input', (e)=>{
        if(parseFloat(e.target.value )< 0 || e.target.value == ""){
            e.target.value = 0;
        }
        abonneActifHc.value = parseFloat(e.target.value)*parametreEntreSmarphoneDataCard['totaleAbonne'];
        displayResultNAtach.value = Math.round(parseFloat(nAtach.value)*parseFloat(abonneActifHc.value));
        displayResultNDetach.value = Math.round(parseFloat(nDetach.value)*parseFloat(abonneActifHc.value));
        displayResultNIdleActive.value = Math.round(parseFloat(nIdleActive.value)*parseFloat(abonneActifHc.value));
        displayResultNPdn.value = Math.round(parseFloat(nPdn.value)*parseFloat(abonneActifHc.value));
        displayResultNBearersActivDesactiv.value = Math.round(parseFloat(nBearersActivDesactiv.value)*parseFloat(abonneActifHc.value));
        displayResultNTauInterMme.value = Math.round(parseFloat(nTauInterMme.value)*parseFloat(abonneActifHc.value));
        displayResultNTau.value = Math.round(parseFloat(nTau.value)*parseFloat(abonneActifHc.value));
        displayResultNX2Ho.value = Math.round(parseFloat(nX2Ho.value)*parseFloat(abonneActifHc.value));
        displayResultNS1Ho.value = Math.round(parseFloat(nS1Ho.value)*parseFloat(abonneActifHc.value));
        displayResultNNoInterMme.value = Math.round(parseFloat(nHoInterMme.value)*parseFloat(abonneActifHc.value));
        displayResultProcedure.value = getProcedure(
            displayResultNAtach.value,
             displayResultNDetach.value,
              displayResultNIdleActive.value, 
              displayResultNPdn.value,
               displayResultNBearersActivDesactiv.value,
                displayResultNTauInterMme.value,
                displayResultNTau.value,
                displayResultNX2Ho.value,
                displayResultNS1Ho.value,
                displayResultNNoInterMme.value
            )
            procedureObjet['abonneActivate'] = abonneActifHc.value 
            procedureObjet['procedure'] = displayResultProcedure.value; 
            procedureObjet['nAttach'] = displayResultNAtach.value;
            procedureObjet['nDetache'] = displayResultNDetach.value;
            procedureObjet['nIdleToActive'] = displayResultNIdleActive.value;
            procedureObjet['nPdn'] = displayResultNPdn.value;
            procedureObjet['nBearers'] = displayResultNBearersActivDesactiv.value;
            procedureObjet['nTauInterMme'] = displayResultNTauInterMme.value;
            procedureObjet['nTau'] = displayResultNTau.value;
            procedureObjet['nX2Ho'] = displayResultNX2Ho.value;
            procedureObjet['nS1Ho'] = displayResultNS1Ho.value;
            procedureObjet['nHoInterMme'] = displayResultNNoInterMme.value;
    })

  
    nAtach.addEventListener('input', (e)=>{
        if(parseFloat(e.target.value )< 0 || e.target.value == ""){
            e.target.value = 0;
        }
        displayResultNAtach.value = Math.round(parseFloat(e.target.value)*parseFloat(abonneActifHc.value));
        procedureObjet['nAttach'] = displayResultNAtach.value;
        //
        displayResultProcedure.value = getProcedure(
            displayResultNAtach.value,
             displayResultNDetach.value,
              displayResultNIdleActive.value, 
              displayResultNPdn.value,
               displayResultNBearersActivDesactiv.value,
                displayResultNTauInterMme.value,
                displayResultNTau.value,
                displayResultNX2Ho.value,
                displayResultNS1Ho.value,
                displayResultNNoInterMme.value
            )
            procedureObjet['procedure'] = displayResultProcedure.value;
    })
    nDetach.addEventListener('input', (e)=>{
        if(parseFloat(e.target.value )< 0 || e.target.value == ""){
            e.target.value = 0;
        }
        displayResultNDetach.value = Math.round(parseFloat(e.target.value)*parseFloat(abonneActifHc.value));
        procedureObjet['nDetache'] = displayResultNDetach.value;
        //
        displayResultProcedure.value = getProcedure(
            displayResultNAtach.value,
             displayResultNDetach.value,
              displayResultNIdleActive.value, 
              displayResultNPdn.value,
               displayResultNBearersActivDesactiv.value,
                displayResultNTauInterMme.value,
                displayResultNTau.value,
                displayResultNX2Ho.value,
                displayResultNS1Ho.value,
                displayResultNNoInterMme.value
            )
            procedureObjet['procedure'] = displayResultProcedure.value;
    })

    nIdleActive.addEventListener('input', (e)=>{
        if(parseFloat(e.target.value )< 0 || e.target.value == ""){
            e.target.value = 0;
        }
        displayResultNIdleActive.value = Math.round(parseFloat(e.target.value)*parseFloat(abonneActifHc.value));
        procedureObjet['nIdleToActive'] = displayResultNIdleActive.value;
        //
        displayResultProcedure.value = getProcedure(
            displayResultNAtach.value,
             displayResultNDetach.value,
              displayResultNIdleActive.value, 
              displayResultNPdn.value,
               displayResultNBearersActivDesactiv.value,
                displayResultNTauInterMme.value,
                displayResultNTau.value,
                displayResultNX2Ho.value,
                displayResultNS1Ho.value,
                displayResultNNoInterMme.value
            )
            procedureObjet['procedure'] = displayResultProcedure.value;
    })
    nPdn.addEventListener('input', (e)=>{
        if(parseFloat(e.target.value )< 0 || e.target.value == ""){
            e.target.value = 0;
        }
        displayResultNPdn.value = Math.round(parseFloat(e.target.value)*parseFloat(abonneActifHc.value));
        procedureObjet['nPdn'] = displayResultNPdn.value;
        //
        displayResultProcedure.value = getProcedure(
            displayResultNAtach.value,
             displayResultNDetach.value,
              displayResultNIdleActive.value, 
              displayResultNPdn.value,
               displayResultNBearersActivDesactiv.value,
                displayResultNTauInterMme.value,
                displayResultNTau.value,
                displayResultNX2Ho.value,
                displayResultNS1Ho.value,
                displayResultNNoInterMme.value
            )
            procedureObjet['procedure'] = displayResultProcedure.value;
    })

    nBearersActivDesactiv.addEventListener('input', (e)=>{
        if(parseFloat(e.target.value )< 0 || e.target.value == ""){
            e.target.value = 0;
        }
        displayResultNBearersActivDesactiv.value = Math.round(parseFloat(e.target.value)*parseFloat(abonneActifHc.value));
        procedureObjet['nBearers'] = displayResultNBearersActivDesactiv.value;
        //
        displayResultProcedure.value = getProcedure(
            displayResultNAtach.value,
             displayResultNDetach.value,
              displayResultNIdleActive.value, 
              displayResultNPdn.value,
               displayResultNBearersActivDesactiv.value,
                displayResultNTauInterMme.value,
                displayResultNTau.value,
                displayResultNX2Ho.value,
                displayResultNS1Ho.value,
                displayResultNNoInterMme.value
            )
            procedureObjet['procedure'] = displayResultProcedure.value;
    })
    nTauInterMme.addEventListener('input', (e)=>{
        if(parseFloat(e.target.value )< 0 || e.target.value == ""){
            e.target.value = 0;
        }
        displayResultNTauInterMme.value = Math.round(parseFloat(e.target.value)*parseFloat(abonneActifHc.value));
        procedureObjet['nTauInterMme'] = displayResultNTauInterMme.value;
        //
        displayResultProcedure.value = getProcedure(
            displayResultNAtach.value,
             displayResultNDetach.value,
              displayResultNIdleActive.value, 
              displayResultNPdn.value,
               displayResultNBearersActivDesactiv.value,
                displayResultNTauInterMme.value,
                displayResultNTau.value,
                displayResultNX2Ho.value,
                displayResultNS1Ho.value,
                displayResultNNoInterMme.value
            )
            procedureObjet['procedure'] = displayResultProcedure.value;
    })
    nTau.addEventListener('input', (e)=>{
        if(parseFloat(e.target.value )< 0 || e.target.value == ""){
            e.target.value = 0;
        }
        displayResultNTau.value = Math.round(parseFloat(e.target.value)*parseFloat(abonneActifHc.value));
        procedureObjet['nTau'] = displayResultNTau.value;
        //
        displayResultProcedure.value = getProcedure(
            displayResultNAtach.value,
             displayResultNDetach.value,
              displayResultNIdleActive.value, 
              displayResultNPdn.value,
               displayResultNBearersActivDesactiv.value,
                displayResultNTauInterMme.value,
                displayResultNTau.value,
                displayResultNX2Ho.value,
                displayResultNS1Ho.value,
                displayResultNNoInterMme.value
            )
            procedureObjet['procedure'] = displayResultProcedure.value;
    })
    nX2Ho.addEventListener('input', (e)=>{
        if(parseFloat(e.target.value )< 0 || e.target.value == ""){
            e.target.value = 0;
        }
        displayResultNX2Ho.value = Math.round(parseFloat(e.target.value)*parseFloat(abonneActifHc.value));
        procedureObjet['nX2Ho'] = displayResultNX2Ho.value;
        //
        displayResultProcedure.value = getProcedure(
            displayResultNAtach.value,
             displayResultNDetach.value,
              displayResultNIdleActive.value, 
              displayResultNPdn.value,
               displayResultNBearersActivDesactiv.value,
                displayResultNTauInterMme.value,
                displayResultNTau.value,
                displayResultNX2Ho.value,
                displayResultNS1Ho.value,
                displayResultNNoInterMme.value
            )
            procedureObjet['procedure'] = displayResultProcedure.value;
    })
    nS1Ho.addEventListener('input', (e)=>{
        if(parseFloat(e.target.value )< 0 || e.target.value == ""){
            e.target.value = 0;
        }
        displayResultNS1Ho.value = Math.round(parseFloat(e.target.value)*parseFloat(abonneActifHc.value));
        procedureObjet['nS1Ho'] = displayResultNS1Ho.value;
      //
        displayResultProcedure.value = getProcedure(
            displayResultNAtach.value,
             displayResultNDetach.value,
              displayResultNIdleActive.value, 
              displayResultNPdn.value,
               displayResultNBearersActivDesactiv.value,
                displayResultNTauInterMme.value,
                displayResultNTau.value,
                displayResultNX2Ho.value,
                displayResultNS1Ho.value,
                displayResultNNoInterMme.value
            )
            procedureObjet['procedure'] = displayResultProcedure.value;
    })
    nHoInterMme.addEventListener('input', (e)=>{
        if(parseFloat(e.target.value )< 0 || e.target.value == ""){
            e.target.value = 0;
        }
        displayResultNNoInterMme.value = Math.round(parseFloat(e.target.value)*parseFloat(abonneActifHc.value));
        procedureObjet['nHoInterMme'] = displayResultNNoInterMme.value;
        //
        displayResultProcedure.value = getProcedure(
            displayResultNAtach.value,
             displayResultNDetach.value,
              displayResultNIdleActive.value, 
              displayResultNPdn.value,
               displayResultNBearersActivDesactiv.value,
                displayResultNTauInterMme.value,
                displayResultNTau.value,
                displayResultNX2Ho.value,
                displayResultNS1Ho.value,
                displayResultNNoInterMme.value
            )
            procedureObjet['procedure'] = displayResultProcedure.value;
    })



    //
    
}

function getProcedure(a_1, a_2, a_3, a_4, a_5, a_6, a_7, a_8, a_9, a_10) {
    return parseFloat(a_1)+ parseFloat(a_2)+parseFloat(a_3)+parseFloat(a_4)+parseFloat(a_5)+parseFloat(a_6)+parseFloat(a_7)+parseFloat(a_8)+parseFloat(a_9)+parseFloat(a_10);
}

export function dimensionnementPlanUsager() {
    
    firtsTab();
    secondTab();
    thirdTab();
    
}


function firtsTab() {
    const overheadPaquet = document.querySelector("#overhead-paquet");
    const taillePaquet = document.querySelector('#taille-paquet');
    const overhead = document.querySelector('#overhead');
    const debitServiceInternet = document.querySelector('#debit-service-internet');
    const debitServiceVpn = document.querySelector('#debit-service-vpn');
    const debitTotal = document.querySelector('#debit-total');
    overheadPaquet.value = dimensionnementUser['interfaceS1U']['overheadPaquet'];
    taillePaquet.value = dimensionnementUser['interfaceS1U']['taillePaquet'];
    overhead.value = dimensionnementUser['interfaceS1U']['overhead'];
    debitServiceInternet.value = dimensionnementUser['interfaceS1U']['debitServiceInternet'];
    debitServiceVpn.value = dimensionnementUser['interfaceS1U']['debitServiceVpn'];
    debitTotal.value = dimensionnementUser['interfaceS1U']['debitTotal'];

    overheadPaquet.addEventListener('input', (e)=>{
        if(e.target.value == "" || parseFloat(e.target.value) <=0){
            e.target.value= 1;
        }
        overhead.value = parseFloat(e.target.value)/taillePaquet.value;
        let F38 = (SommeTotaleTrafic(volumeTraficInternetSmartPhone, 'volumeTraficDl') * parametreEntreSmarphoneDataCard['totalSmartPhone']/1000000 + SommeTotaleTrafic(volumeTraficInternetDataCard, 'volumeTraficDl')*parametreEntreSmarphoneDataCard['totalDataCard']/1000000)*8000/3600;
        let F41 = ((Math.round(parametreEntreSmarphoneDataCard['totaleAbonne']*parseFloat(configuration_profile.value)))*volumeTraficInternetDataCard['vpn']['volumeTraficUlDL']/1000000)*8000/3600;
        debitServiceInternet.value = (1 + parseFloat(overhead.value))*(1+parseFloat(overhead.value))*F38;
        debitServiceVpn.value = (1 + parseFloat(overhead.value))*F41;
        debitTotal.value = parseFloat(debitServiceInternet.value) + parseFloat(debitServiceVpn.value);


        dimensionnementUser['interfaceS1U']['overheadPaquet'] = overheadPaquet.value;
        dimensionnementUser['interfaceS1U']['taillePaquet'] =  taillePaquet.value ;
        dimensionnementUser['interfaceS1U']['overhead'] =  overhead.value;
        dimensionnementUser['interfaceS1U']['debitServiceInternet'] = debitServiceInternet.value;
        dimensionnementUser['interfaceS1U']['debitServiceVpn'] = debitServiceVpn.value;
        dimensionnementUser['interfaceS1U']['debitTotal'] =  debitTotal.value;
        // console.log( (1 + parseFloat(overhead.value))*(1+parseFloat(overhead.value))*F38);


    })

    taillePaquet.addEventListener('input', (e)=>{
        if(e.target.value == "" || parseFloat(e.target.value) <0){
            e.target.value= 0;
        }
        overhead.value = parseFloat(e.target.value)/overheadPaquet.value;
        F38 = 8000/3600*(SommeTotaleTrafic(volumeTraficInternetSmartPhone, 'volumeTraficDl') * parametreEntreSmarphoneDataCard['totalSmartPhone']/1000000 + SommeTotaleTrafic(volumeTraficInternetDataCard, 'volumeTraficDl')*parametreEntreSmarphoneDataCard['totalDataCard']/1000000);
        F41 = ((Math.round(parametreEntreSmarphoneDataCard['totaleAbonne']*parseFloat(configuration_profile.value)))*volumeTraficInternetDataCard['vpn']['volumeTraficUlDL']/1000000)*8000/3600;
        debitServiceInternet.value = (1 + parseFloat(overhead.value))*(1+parseFloat(overhead.value))*F38;
        console.log( (1 + parseFloat(overhead.value))*(1+parseFloat(overhead.value))*F38);
        debitServiceVpn.value = (1 + parseFloat(overhead.value))*F41;
        debitTotal.value = parseFloat(debitServiceInternet.value) + parseFloat(debitServiceVpn.value);


        dimensionnementUser['interfaceS1U']['overheadPaquet'] = overheadPaquet.value;
        dimensionnementUser['interfaceS1U']['taillePaquet'] =  taillePaquet.value ;
        dimensionnementUser['interfaceS1U']['overhead'] =  overhead.value;
        dimensionnementUser['interfaceS1U']['debitServiceInternet'] = debitServiceInternet.value;
        dimensionnementUser['interfaceS1U']['debitServiceVpn'] = debitServiceVpn.value;
        dimensionnementUser['interfaceS1U']['debitTotal'] =  debitTotal.value;

    })
    
}

function secondTab() {
    const overheadPaquet = document.querySelector("#overhead-paquet1");
    const taillePaquet = document.querySelector('#taille-paquet1');
    const overhead = document.querySelector('#overhead1');
    const debitServiceInternet = document.querySelector('#debit-service-internet1');
    const debitServiceVpn = document.querySelector('#debit-service-vpn1');
    const debitTotal = document.querySelector('#debit-total1');
    overheadPaquet.value = dimensionnementUser['interfaceS5']['overheadPaquet'];
    taillePaquet.value = dimensionnementUser['interfaceS5']['taillePaquet'];
    overhead.value = dimensionnementUser['interfaceS5']['overhead'];
    debitServiceInternet.value = dimensionnementUser['interfaceS5']['debitServiceInternet'];
    debitServiceVpn.value = dimensionnementUser['interfaceS5']['debitServiceVpn'];
    debitTotal.value = dimensionnementUser['interfaceS5']['debitTotal'];
    overheadPaquet.addEventListener('input', (e)=>{
        if(e.target.value == "" || parseFloat(e.target.value) <=0){
            e.target.value= 1;
        }
        overhead.value = parseFloat(e.target.value)/taillePaquet.value;
        let F38 = (SommeTotaleTrafic(volumeTraficInternetSmartPhone, 'volumeTraficDl') * parametreEntreSmarphoneDataCard['totalSmartPhone']/1000000 + SommeTotaleTrafic(volumeTraficInternetDataCard, 'volumeTraficDl')*parametreEntreSmarphoneDataCard['totalDataCard']/1000000)*8000/3600;
        let F41 = ((Math.round(parametreEntreSmarphoneDataCard['totaleAbonne']*parseFloat(configuration_profile.value)))*volumeTraficInternetDataCard['vpn']['volumeTraficUlDL']/1000000)*8000/3600;
        debitServiceInternet.value = (1 + parseFloat(overhead.value))*(1+parseFloat(overhead.value))*F38;
        debitServiceVpn.value = (1 + parseFloat(overhead.value))*F41;
        debitTotal.value = parseFloat(debitServiceInternet.value) + parseFloat(debitServiceVpn.value);


        dimensionnementUser['interfaceS5']['overheadPaquet'] = overheadPaquet.value;
        dimensionnementUser['interfaceS5']['taillePaquet'] =  taillePaquet.value ;
        dimensionnementUser['interfaceS5']['overhead'] =  overhead.value;
        dimensionnementUser['interfaceS5']['debitServiceInternet'] = debitServiceInternet.value;
        dimensionnementUser['interfaceS5']['debitServiceVpn'] = debitServiceVpn.value;
        dimensionnementUser['interfaceS5']['debitTotal'] =  debitTotal.value;
        // console.log( (1 + parseFloat(overhead.value))*(1+parseFloat(overhead.value))*F38);


    })

    taillePaquet.addEventListener('input', (e)=>{
        if(e.target.value == "" || parseFloat(e.target.value) <0){
            e.target.value= 0;
        }
        overhead.value = parseFloat(e.target.value)/overheadPaquet.value;
        F38 = 8000/3600*(SommeTotaleTrafic(volumeTraficInternetSmartPhone, 'volumeTraficDl') * parametreEntreSmarphoneDataCard['totalSmartPhone']/1000000 + SommeTotaleTrafic(volumeTraficInternetDataCard, 'volumeTraficDl')*parametreEntreSmarphoneDataCard['totalDataCard']/1000000);
        F41 = ((Math.round(parametreEntreSmarphoneDataCard['totaleAbonne']*parseFloat(configuration_profile.value)))*volumeTraficInternetDataCard['vpn']['volumeTraficUlDL']/1000000)*8000/3600;
        debitServiceInternet.value = (1 + parseFloat(overhead.value))*(1+parseFloat(overhead.value))*F38;
        // console.log( (1 + parseFloat(overhead.value))*(1+parseFloat(overhead.value))*F38);
        debitServiceVpn.value = (1 + parseFloat(overhead.value))*F41;
        debitTotal.value = parseFloat(debitServiceInternet.value) + parseFloat(debitServiceVpn.value);


        dimensionnementUser['interfaceS5']['overheadPaquet'] = overheadPaquet.value;
        dimensionnementUser['interfaceS5']['taillePaquet'] =  taillePaquet.value ;
        dimensionnementUser['interfaceS5']['overhead'] =  overhead.value;
        dimensionnementUser['interfaceS5']['debitServiceInternet'] = debitServiceInternet.value;
        dimensionnementUser['interfaceS5']['debitServiceVpn'] = debitServiceVpn.value;
        dimensionnementUser['interfaceS5']['debitTotal'] =  debitTotal.value;

    })
    
}


function thirdTab() {
    const overheadPaquet = document.querySelector("#overhead-paquet2");
    const taillePaquet = document.querySelector('#taille-paquet2');
    const overhead = document.querySelector('#overhead2');
    const debitServiceInternet = document.querySelector('#debit-service-internet2');
    const debitServiceVpn = document.querySelector('#debit-service-vpn2');
    const debitTotal = document.querySelector('#debit-total2');
    overheadPaquet.value = dimensionnementUser['interfaceSGi']['overheadPaquet'];
    taillePaquet.value = dimensionnementUser['interfaceSGi']['taillePaquet'];
    overhead.value = dimensionnementUser['interfaceSGi']['overhead'];
    debitServiceInternet.value = dimensionnementUser['interfaceSGi']['debitServiceInternet'];
    debitServiceVpn.value = dimensionnementUser['interfaceSGi']['debitServiceVpn'];
    debitTotal.value = dimensionnementUser['interfaceSGi']['debitTotal'];
    overheadPaquet.addEventListener('input', (e)=>{
        if(e.target.value == "" || parseFloat(e.target.value) <=0){
            e.target.value= 1;
        }
        overhead.value = parseFloat(e.target.value)/taillePaquet.value;
        let F38 = (SommeTotaleTrafic(volumeTraficInternetSmartPhone, 'volumeTraficDl') * parametreEntreSmarphoneDataCard['totalSmartPhone']/1000000 + SommeTotaleTrafic(volumeTraficInternetDataCard, 'volumeTraficDl')*parametreEntreSmarphoneDataCard['totalDataCard']/1000000)*8000/3600;
        let F41 = ((Math.round(parametreEntreSmarphoneDataCard['totaleAbonne']*parseFloat(configuration_profile.value)))*volumeTraficInternetDataCard['vpn']['volumeTraficUlDL']/1000000)*8000/3600;
        debitServiceInternet.value = (1 + parseFloat(overhead.value))*(1+parseFloat(overhead.value))*F38;
        debitServiceVpn.value = (1 + parseFloat(overhead.value))*F41;
        debitTotal.value = parseFloat(debitServiceInternet.value) + parseFloat(debitServiceVpn.value);


        dimensionnementUser['interfaceSGi']['overheadPaquet'] = overheadPaquet.value;
        dimensionnementUser['interfaceSGi']['taillePaquet'] =  taillePaquet.value ;
        dimensionnementUser['interfaceSGi']['overhead'] =  overhead.value;
        dimensionnementUser['interfaceSGi']['debitServiceInternet'] = debitServiceInternet.value;
        dimensionnementUser['interfaceSGi']['debitServiceVpn'] = debitServiceVpn.value;
        dimensionnementUser['interfaceSGi']['debitTotal'] =  debitTotal.value;
        // console.log( (1 + parseFloat(overhead.value))*(1+parseFloat(overhead.value))*F38);


    })

    taillePaquet.addEventListener('input', (e)=>{
        if(e.target.value == "" || parseFloat(e.target.value) <0){
            e.target.value= 0;
        }
        overhead.value = parseFloat(e.target.value)/overheadPaquet.value;
        F38 = 8000/3600*(SommeTotaleTrafic(volumeTraficInternetSmartPhone, 'volumeTraficDl') * parametreEntreSmarphoneDataCard['totalSmartPhone']/1000000 + SommeTotaleTrafic(volumeTraficInternetDataCard, 'volumeTraficDl')*parametreEntreSmarphoneDataCard['totalDataCard']/1000000);
        F41 = ((Math.round(parametreEntreSmarphoneDataCard['totaleAbonne']*parseFloat(configuration_profile.value)))*volumeTraficInternetDataCard['vpn']['volumeTraficUlDL']/1000000)*8000/3600;
        debitServiceInternet.value = (1 + parseFloat(overhead.value))*(1+parseFloat(overhead.value))*F38;
        // console.log( (1 + parseFloat(overhead.value))*(1+parseFloat(overhead.value))*F38);
        debitServiceVpn.value = (1 + parseFloat(overhead.value))*F41;
        debitTotal.value = parseFloat(debitServiceInternet.value) + parseFloat(debitServiceVpn.value);


        dimensionnementUser['interfaceSGi']['overheadPaquet'] = overheadPaquet.value;
        dimensionnementUser['interfaceSGi']['taillePaquet'] =  taillePaquet.value ;
        dimensionnementUser['interfaceSGi']['overhead'] =  overhead.value;
        dimensionnementUser['interfaceSGi']['debitServiceInternet'] = debitServiceInternet.value;
        dimensionnementUser['interfaceSGi']['debitServiceVpn'] = debitServiceVpn.value;
        dimensionnementUser['interfaceSGi']['debitTotal'] =  debitTotal.value;
    })
}

export function lastTab(){
    let tailleMoyen = document.querySelector('#taille-moyen');
    tailleMoyen.value = capaciteInterface['tailleMoyen'];
    tailleMoyen.addEventListener('input', (e)=>{
        if (e.target.value == "" || parseFloat(e.target.value)<=0) {
            e.target.value = 1;
        }
        capaciteInterface['tailleMoyen'] = parseFloat(e.target.value);
        // defaultValueLastTab();




    })
    defaultValueLastTab();
    const lastTableau = document.querySelectorAll(".last-tab");
    lastTableau.forEach((element )=>{
        element.addEventListener('input', (e)=>{
            const val = parseFloat(tailleMoyen.value); 
            let tab = e.target.getAttribute('tab');
            if(parseFloat(e.target.value) <0 || e.target.value == ""){
                e.target.value = 0;
            }
            executeLast(tab, e.target, val)
        })
    })
}

function defaultValueLastTab() {
    const defaults = document.querySelectorAll('.default');
    defaults.forEach(element => {
        let id = element.id.split('_');
        element.value = capaciteInterface[id[0]][id[1]];
    });
    
}


function executeLast(tab, e_target, val) {
    if(tab != "all"){
        let id = e_target.id.split("_");
        let nombre = capaciteInterface[id[0]]['nombre'];
        capaciteInterface[id[0]][id[1]] = parseFloat(e_target.value);
        capaciteInterface[id[0]][tab] = (parseFloat(e_target.value)*nombre*val)/(3600*1000000);
        let change = document.querySelector(`#${id[0]+'_'+tab}`);
        change.value = (parseFloat(e_target.value)*nombre*val)/(3600*1000000);
        let total = document.querySelector(`#total_${tab}`);
        total.value = SommeTotaleTrafic(capaciteInterface, tab);
        // console.log(SommeTotaleTrafic(capaciteInterface, tab));
        // console.log(total.value);
        
        
        
        }else{
            // console.log("all");
            let id = e_target.id.split("_");
            
            capaciteInterface[id[0]]['nombre'] = parseFloat(e_target.value);
            let capacitS1 =document.querySelector(`#${id[0]+'_capaciteS1C'}`);
            capacitS1.value = capaciteInterface[`${id[0]}`]['messageProcedure']*capaciteInterface[id[0]]['nombre']*val/(3600*1000000);
            capaciteInterface[id[0]]['capaciteS1C'] = capaciteInterface[id[0]]['messageProcedure']*capaciteInterface[id[0]]['nombre']*val/(3600*1000000);


                capacitS1 =document.querySelector(`#${id[0]+'_capaciteS11'}`);
                capacitS1.value = capaciteInterface[id[0]]['messageS11']*capaciteInterface[id[0]]['nombre']*val/(3600*1000000);
                capaciteInterface[id[0]]['capaciteS11'] = capaciteInterface[id[0]]['messageS11']*capaciteInterface[id[0]]['nombre']*val/(3600*1000000);

                capacitS1 =document.querySelector(`#${id[0]+'_capaciteS8'}`);
                capacitS1.value = capaciteInterface[id[0]]['messageS8']*capaciteInterface[id[0]]['nombre'];
                capaciteInterface[id[0]]['capaciteS8'] = capaciteInterface[id[0]]['messageS8']*capaciteInterface[id[0]]['nombre']*val/(3600*1000000);

                capacitS1 =document.querySelector(`#${id[0]+'_capaciteS6'}`);
                capacitS1.value = capaciteInterface[id[0]]['messageS6']*capaciteInterface[id[0]]['nombre']*val/(3600*1000000);
                capaciteInterface[id[0]]['capaciteS6'] = capaciteInterface[id[0]]['messageS6']*capaciteInterface[id[0]]['nombre']*val/(3600*1000000);

                tab = "capaciteS1C";
                let total = document.querySelector(`#total_${tab}`);
                total.value = SommeTotaleTrafic(capaciteInterface, tab);

                tab = "capaciteS11";
                 total = document.querySelector(`#total_${tab}`);
                total.value = SommeTotaleTrafic(capaciteInterface, tab);

                tab = "capaciteS8";
                 total = document.querySelector(`#total_${tab}`);
                total.value = SommeTotaleTrafic(capaciteInterface, tab);

                tab = "capaciteS6";
                 total = document.querySelector(`#total_${tab}`);
                total.value = SommeTotaleTrafic(capaciteInterface, tab);


        }
    
}

export function valeurPreliminaireFunction() {
    noeudsRequis();
   let changeVals = document.querySelectorAll('.change-val');
    changeVals.forEach(element =>{
        element.addEventListener("input", (e)=>{
            if(e.target.value == "" || parseFloat(e.target.value) <0){
                e.target.value = 0;
            }
            let id = e.target.id.split('_');
            valeurPreliminaire[id[0]][id[1]] = e.target.value;
            valeurPreliminaire[id[0]]['capaciteExploitation'] = parseFloat(valeurPreliminaire[id[0]]["valeur"])*parseFloat(valeurPreliminaire[id[0]]["pourcentage"]);
            let exploitation = document.querySelector(`#${id[0]}_capaciteExploitation`);
            console.log(exploitation);
            exploitation.value =  valeurPreliminaire[id[0]]['capaciteExploitation'];
            noeudsRequis();
        })
    })
    
}


function noeudsRequis(){
    let champ1_c5_f66 = document.querySelector('#champ1_c5_f66');
    let c50 = procedureObjet['nAttach'] ;
    let F66 =  valeurPreliminaire['mmeSimultaneousAttachedUsers']['capaciteExploitation'];
    champ1_c5_f66.value = Math.round(parseFloat(c50)/parseFloat(F66));


    let champ2_c52_f67 = document.querySelector('#champ2_c52_f67');
    let c52= procedureObjet['nIdleToActive'];
    let f67 = valeurPreliminaire['mmeTransactionIdleActive']['capaciteExploitation'];
    champ2_c52_f67.value = Math.round(parseFloat(c52)/3600/parseFloat(f67));

    let champ3_c60_f68 = document.querySelector('#champ3_c60_f68');
    let c60 = procedureObjet['procedure']; 
    let f68 = valeurPreliminaire['mmeTotalTransaction']['capaciteExploitation']; 
    champ3_c60_f68.value = Math.round(parseFloat(c60)/3600/parseFloat(f68));

    let champ4_c54_f69 = document.querySelector('#champ4_c54_f69');
    let c54 = procedureObjet['nBearers'];
    let f69 = valeurPreliminaire['sgwNombreBearer']['capaciteExploitation'] ;
    champ4_c54_f69.value = Math.round(parseFloat(c54)/parseFloat(f69));

    let champ5_f38_f70 = document.querySelector('#champ5_f38_f70');
    let f38 = parseFloat(parametreEntreSmarphoneDataCard['totalSmartPhone']* SommeTotaleTrafic(volumeTraficInternetSmartPhone, "volumeTraficDl")/100000)+ parseFloat(parametreEntreSmarphoneDataCard['totalDataCard']* SommeTotaleTrafic(volumeTraficInternetDataCard, "volumeTraficDl")/100000)*8*1000/3600;
    let f70 = valeurPreliminaire['sgwCapaciteTraitementDonnee']['capaciteExploitation'];
    champ5_f38_f70.value = Math.round(parseFloat(f38)/parseFloat(f70));

    let champ6_f41_f70 = document.querySelector('#champ6_f41_f70');
    let f41 = parseFloat(Math.round(parseFloat(configuration_profile.value)*parametreEntreSmarphoneDataCard['totaleAbonne']) * volumeTraficInternetDataCard['vpn']['volumeTraficUlDL']/1000000)*8*1000/3600;
    champ6_f41_f70.value = Math.round(parseFloat(f41)/parseFloat(f70));

    let  champ6_c54_f71 = document.querySelector("#champ6_c54_f71");
    let f71 = valeurPreliminaire['pgwNombreBearer']['capaciteExploitation'];
    champ6_c54_f71.value = Math.round(parseFloat(c54)/parseFloat(f71))

    let champ8_f38_f72 = document.querySelector("#champ8_f38_f72");
    let f72 = valeurPreliminaire['pgwCapaciteTraitementDonnee']['capaciteExploitation'];
    champ8_f38_f72.value = Math.round(parseFloat(f38)/parseFloat(f72));


    let champ9_f41_D72 = document.querySelector("#champ9_f41_D72");
    let d72 = valeurPreliminaire['pgwNombreBearer']['valeur'];
    champ9_f41_D72.value = Math.round(parseFloat(f41)/parseFloat(d72))


    let champ9_c54_f73 = document.querySelector("#champ9_c54_f73");
    let f73 = valeurPreliminaire['sgwPgwNombreBearer']['capaciteExploitation'];
    champ9_c54_f73.value = Math.round(parseFloat(c54)/parseFloat(f73));


    let champ10_f38_f74 = document.querySelector('#champ10_f38_f74');
    let f74 = valeurPreliminaire['sgwPgwCapaciteTraitementDonnee']['capaciteExploitation'];
    champ10_f38_f74.value = Math.round(parseFloat(f38)/parseFloat(f74));


    let champ11_f41_f74 = document.querySelector('#champ11_f41_f74');
    champ11_f41_f74.value = Math.round(parseFloat(f41)/parseFloat(f74));


    let champ12_a9_f75 = document.querySelector('#champ12_a9_f75');
    let f75 = valeurPreliminaire['hssNombreAbonneeSupporte']['capaciteExploitation'];
    let a9 = parametreEntreSmarphoneDataCard['totaleAbonne'];
    champ12_a9_f75.value = Math.round(parseFloat(a9)/parseFloat(f75));


    let champ13_c60_f76 = document.querySelector('#champ13_c60_f76');
    let f76 = valeurPreliminaire['pcrfTotalTransaction']['capaciteExploitation'];
    champ13_c60_f76.value = Math.round(parseFloat(c60)/3600/parseFloat(f76));
}


