
/** Les colonnes qui affichent le résultat totale ne seront pas représentées. Les données seront calculées dynamiquement   */

// export let data = 
    

        /** tableau 1 : Parametres d'entrées - % de smartphones et de "Data Card" */
export let parametreEntreSmarphoneDataCard = {
    totalDataCard : 20,
    totalSmartPhone : 80,
    totaleAbonne : 100
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

    export let configuration_profileData = {
        configuration_profile : 30 
    }

export let procedureObjet = {
    nAttach : 0,
    nDetache : 0,
    nIdleToActive : 0,
    nPdn : 0,
    nBearers : 0,
    nTauInterMme : 0,
    nTau : 0,
    nX2Ho :0,
    nS1Ho : 0,
    nHoInterMme : 0,
    procedure : 0,
    abonneActivate : 0,
};

export let dimensionnementUser = {
    interfaceS1U : {
        overheadPaquet : 1,
        taillePaquet :1,
        overhead : 1,
        debitServiceVpn :1,
        debitServiceInternet :1,
        debitTotal : 1
    },
    interfaceS5  : {
        overheadPaquet : 1,
        taillePaquet : 1,
        overhead : 1,
        debitServiceVpn : 1,
        debitTotal : 1 

    },
    interfaceSGi : {
        overheadPaquet : 1,
        taillePaquet : 1,
        overhead : 1,
        debitServiceVpn : 1,
        debitTotal : 1

    }
}



export let capaciteInterface = {
    nAttach : {
        nombre : 0,
        messageProcedure : 0,
        capaciteS1C : 0,
        messageS11 : 0,
        capaciteS11 : 0,
        messageS8 : 0,
        capaciteS8 : 0,
        messageS6 : 0,
        capaciteS6 : 0
    },
    nDetach : {
        nombre : 0,
        messageProcedure : 0,
        capaciteS1C : 0,
        messageS11 : 0,
        capaciteS11 : 0,
        messageS8 : 0,
        capaciteS8 : 0,
        messageS6 : 0,
        capaciteS6 : 0
    },
    nIdleToActive : {
        nombre : 0,
        messageProcedure : 0,
        capaciteS1C : 0,
        messageS11 : 0,
        capaciteS11 : 0,
        messageS8 : 0,
        capaciteS8 : 0,
        messageS6 : 0,
        capaciteS6 : 0
    },
    nConnexionPdn : {
        nombre : 0,
        messageProcedure : 0,
        capaciteS1C : 0,
        messageS11 : 0,
        capaciteS11 : 0,
        messageS8 : 0,
        capaciteS8 : 0,
        messageS6 : 0,
        capaciteS6 : 0
    },
    nBearer : {
        nombre : 0,
        messageProcedure : 0,
        capaciteS1C : 0,
        messageS11 : 0,
        capaciteS11 : 0,
        messageS8 : 0,
        capaciteS8 : 0,
        messageS6 : 0,
        capaciteS6 : 0
    },
    nTauInterMme : {
        nombre : 0,
        messageProcedure : 0,
        capaciteS1C : 0,
        messageS11 : 0,
        capaciteS11 : 0,
        messageS8 : 0,
        capaciteS8 : 0,
        messageS6 : 0,
        capaciteS6 : 0
    },
    nTauInterMmeSgw : {
        nombre : 0,
        messageProcedure : 0,
        capaciteS1C : 0,
        messageS11 : 0,
        capaciteS11 : 0,
        messageS8 : 0,
        capaciteS8 : 0,
        messageS6 : 0,
        capaciteS6 : 0
    },
    nX2Ho : {
        nombre : 0,
        messageProcedure : 0,
        capaciteS1C : 0,
        messageS11 : 0,
        capaciteS11 : 0,
        messageS8 : 0,
        capaciteS8 : 0,
        messageS6 : 0,
        capaciteS6 : 0
    }, nS1Ho : {
        nombre : 0,
        messageProcedure : 0,
        capaciteS1C : 0,
        messageS11 : 0,
        capaciteS11 : 0,
        messageS8 : 0,
        capaciteS8 : 0,
        messageS6 : 0,
        capaciteS6 : 0
    },
    nHoInterMme : {
        nombre : 0,
        messageProcedure : 0,
        capaciteS1C : 0,
        messageS11 : 0,
        capaciteS11 : 0,
        messageS8 : 0,
        capaciteS8 : 0,
        messageS6 : 0,
        capaciteS6 : 0
    },
    tailleMoyen : 1024
}

export let valeurPreliminaire = {
    mmeSimultaneousAttachedUsers : {
        valeur : 0,
        pourcentage: 0,
        capaciteExploitation : 0
    },
    mmeTransactionIdleActive :{
        valeur : 0,
        pourcentage: 0,
        capaciteExploitation : 0
    },
    mmeTotalTransaction : {
        valeur : 0,
        pourcentage: 0,
        capaciteExploitation : 0
    },
    //
    sgwNombreBearer : {
        valeur : 0,
        pourcentage: 0,
        capaciteExploitation : 0
    },
    sgwCapaciteTraitementDonnee :{
        valeur : 0,
        pourcentage: 0,
        capaciteExploitation : 0
    },
    pgwNombreBearer : {
        valeur : 0,
        pourcentage: 0,
        capaciteExploitation : 0
    },
    pgwCapaciteTraitementDonnee :{
        valeur : 0,
        pourcentage: 0,
        capaciteExploitation : 0
    },

    //
    sgwPgwNombreBearer : {
        valeur : 0,
        pourcentage: 0,
        capaciteExploitation : 0
    },
    sgwPgwCapaciteTraitementDonnee :{
        valeur : 0,
        pourcentage: 0,
        capaciteExploitation : 0
    },

    hssNombreAbonneeSupporte : {
        valeur : 0,
        pourcentage: 0,
        capaciteExploitation : 0
    },
    pcrfTotalTransaction : {
        valeur : 0,
        pourcentage: 0,
        capaciteExploitation : 0
    }
    



}

