
/** Les colonnes qui affichent le résultat totale ne seront pas représentées. Les données seront calculées dynamiquement   */

// export let data = 
    

        /** tableau 1 : Parametres d'entrées - % de smartphones et de "Data Card" */
export let parametreEntreSmarphoneDataCard = {
    percentageDataCard : 1,
    percentageSmartPhone : 1,
    totaleAbonne : 1
}
            /** tableau 2 : Volume de trafic Internet généré par un  smartphone LTE en UL/DL et DL */
export let   volumeTraficInternetSmartPhone = {
    navigationWeb : {
        nombreDeSession : 1,
        tailleSession : 2,
        pourcentageDl : 85,  //
        volumeTraficUlDL : 2,
        volumeTraficDl : 1.7
    },
    email : {
        nombreDeSession : 4,
        tailleSession : 0.5,
        pourcentageDl : 80,
        volumeTraficUlDL : 2,
        volumeTraficDl : 1.6
    },
    streamingVideo : {
        nombreDeSession : 1,
        tailleSession : 10,
        pourcentageDl : 95,
        volumeTraficUlDL : 10,
        volumeTraficDl : 9.5
    },
    vpn : {
        nombreDeSession : 0.25,
        tailleSession : 1,
        pourcentageDl : 60,
        volumeTraficUlDL : 0.25,
        volumeTraficDl : 0.15
    },
    gaming : {
        nombreDeSession : 1,
        tailleSession : 0.04,
        pourcentageDl : 60,
        volumeTraficUlDL : 0.04,
        volumeTraficDl : 0.024
    },
    // volumeTotalTraficInternet : {
    //     volumeTraficUlDL : 1,
    //     volumeTraficDl : 1
    // }
}
        /** Tableau 3 : Volume de trafic Internet & VPN généré par une "Data Card"  en UL/DL et DL      */
export let  volumeTraficInternetDataCard =  {
    navigationWeb : {
        nombreDeSession : 1,
        tailleSession : 2,
        pourcentageDl : 85,
        volumeTraficUlDL : 2,
        volumeTraficDl : 1.7
    },
    email : {
        nombreDeSession : 2,
        tailleSession : 2,
        pourcentageDl : 80,
        volumeTraficUlDL : 4,
        volumeTraficDl : 3.2
    },
    streamingVideo : {
        nombreDeSession : 1,
        tailleSession : 10,
        pourcentageDl : 95,
        volumeTraficUlDL : 10,
        volumeTraficDl : 9.5
    },
    vpn : {
        nombreDeSession : 0.05,
        tailleSession : 2,
        pourcentageDl : 60,
        volumeTraficUlDL : 1,
        volumeTraficDl : 0.6
    },
    gaming : {
        nombreDeSession : 1,
        tailleSession : 0.04,
        pourcentageDl : 60,
        volumeTraficUlDL : 0.04,
        volumeTraficDl : 0.024
    },
    // volumeTotalTraficInternet : {
    //     volumeTraficUlDL : 0,
    //     volumeTraficDl : 0
    // },
    // volumeTotalTraficVpn : {
    //     volumeTraficUlDL : 0,
    //     volumeTraficDl : 0
    // }
}


            /** tableau : Calcul du nombre total d'opérations pour chaque procèdure de signalisation */

export let NombreTotaleOperationPourChaqueProcédure = {
        nAttache : 0,
        nDetache : 0,
        nIdleToActive : 0,
        nPdn : 0,
        nBearers : 0,
        nTauInterMme : 0,
        nTau  :0,
        nX2Ho : 0,
        nS1Ho : 0, 
        nHoInterMme : 0,
        nProcédure : 0
    };