import { dimensionnementUser, parametreEntreSmarphoneDataCard, procedureObjet, volumeTraficInternetDataCard, volumeTraficInternetSmartPhone } from "./data.js";
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
    debit_internet_ul_dl2.value = parseFloat(volume_trafic_totale2.value)*8*1000/3600;

    const data_card_utilisant_vpn2 = document.querySelector('#data_card_utilisant_vpn2');
    data_card_utilisant_vpn2.value = Math.round(parseFloat(configuration_profile.value)*parametreEntreSmarphoneDataCard['totaleAbonne']);

    const trafic_total_vpn2 = document.querySelector('#trafic_total_vpn2');
    trafic_total_vpn2.value = data_card_utilisant_vpn2.value * volumeTraficInternetDataCard['vpn']['volumeTraficUlDL']/1000000;

    const debit_total_vpn2 = document.querySelector('#debit_total_vpn2');
    debit_total_vpn2.value = parseFloat(trafic_total_vpn2.value)*8*1000/3600;

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


