import { volumeTraficInternetDataCard, volumeTraficInternetSmartPhone } from "./data.js";


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
                SommeTotaleTrafic(objetTableau,tabNew, "volumeTraficUlDL");
                SommeTotaleTrafic(objetTableau,tabNew, "volumeTraficDl");
}


function SommeTotaleTrafic(objetTableau,tab, critere) {
    let inputForSommeInternet = document.querySelector(`#${tab+'_'+critere+'_internet'}`)
    let somme = 0;
    for (let cle in objetTableau) {
        if (objetTableau.hasOwnProperty(cle)) {
            somme += parseFloat(objetTableau[cle][critere])
        }
    }
    inputForSommeInternet.value = somme;
    
}


