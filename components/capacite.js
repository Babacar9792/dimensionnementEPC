export function capaciteHtml(){
    return ` 
    <div class="content-capacite-interface">
    <div class="entete-capacite-interface">
        <h1>Calcul des Capacités des Interfaces S1U et S8 (Trafic Utilisateur)</h1>
        <div>
            <label for="">Taille moyen d'un message</label>
            <input type="number" class="input" min="1" placeholder="Taille moyen d'un message" id="taille-moyen">
        </div>
    </div>
    <div class="content-tap-capacite">
        <table class="table" >
            <thead>
              <tr>
                <th>Procedures</th>
                <th>Nombre</th>
                <th>Nombre de messages/procèdure via S1-C</th>
                <th>Capacité S1-C (Gbits/s)</th>
                <th>Nombre de messages via S11</th>
                <th>Capacité S11 (Gbits/s)</th>
                <th>Nombre de messages via S8</th>
                <th>Capcité S8 (Gbits/s)</th>
                <th>Nombre de messages via S6a</th>
                <th>Capcité S6a (Gbits/s)</th>
                
              </tr>
            </thead>
            <tbody>
                <!-- start nAttach -->
                <tr >
                    <td >
                          <span class="res-head">N <small>(attach)</small></span>
                          N <small>(attach)</small>
                    </td>
                    <td >
                          <span class="res-head">Nombre</span>
                          <input type="number" min="1"  class="input default last-tab" value="0" id="nAttach_nombre" tab="all">
                    </td>
                    <td >
                        <span class="res-head">messageProcedure</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nAttach_messageProcedure" tab="capaciteS1C">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS1C</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nAttach_capaciteS1C">
                    </td>
                    <td >
                        <span class="res-head">messageS11</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nAttach_messageS11" tab="capaciteS11" >
                    
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS11</span>
                        <input type="number" min="1"  class="input default" value="0"  disabled id="nAttach_capaciteS11">
                    </td>
                    <td >
                            <span class="res-head">messageS8</span>
                            <input type="number" min="1"  class="input default last-tab" value="0" id="nAttach_messageS8" tab="capaciteS8">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS8</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nAttach_capaciteS8">
                    </td>
                    <td >
                        <span class="res-head">messageS6</span>
                        <input type="number" min="1"  class="input default last-tab" value="0"  id="nAttach_messageS6" tab="capaciteS6" >
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS6</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nAttach_capaciteS6">
                    </td>
                </tr>
                <!-- end nAttach -->
                <!-- start nDetach-->

                <tr >
                    <td >
                          <span class="res-head">N <small>(attach)</small></span>
                          N <small>(detach)</small>
                    </td>
                    <td >
                          <span class="res-head">Nombre</span>
                          <input type="number" min="1"  class="input default last-tab" value="0" id="nDetach_nombre" tab="all">
                    </td>
                    <td >
                        <span class="res-head">messageProcedure</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nDetach_messageProcedure" tab="capaciteS1C">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS1C</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nDetach_capaciteS1C">
                    </td>
                    <td >
                        <span class="res-head">messageS11</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nDetach_messageS11" tab="capaciteS11" >
                    
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS11</span>
                        <input type="number" min="1"  class="input default" value="0"  disabled id="nDetach_capaciteS11">
                    </td>
                    <td >
                            <span class="res-head">messageS8</span>
                            <input type="number" min="1"  class="input default last-tab" value="0" id="nDetach_messageS8" tab="capaciteS8">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS8</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nDetach_capaciteS8">
                    </td>
                    <td >
                        <span class="res-head">messageS6</span>
                        <input type="number" min="1"  class="input default last-tab" value="0"  id="nDetach_messageS6" tab="capaciteS6" >
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS6</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nDetach_capaciteS6">
                    </td>
                </tr>



                <!-- end nDetach -->
                <!-- start nIdleToActive -->
                <tr >
                    <td >
                          <span class="res-head">N <small>(attach)</small></span>
                          N <small>(idle to active)</small>
                    </td>
                    <td >
                          <span class="res-head">Nombre</span>
                          <input type="number" min="1"  class="input default last-tab" value="0" id="nIdleToActive_nombre" tab="all">
                    </td>
                    <td >
                        <span class="res-head">messageProcedure</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nIdleToActive_messageProcedure" tab="capaciteS1C">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS1C</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nIdleToActive_capaciteS1C">
                    </td>
                    <td >
                        <span class="res-head">messageS11</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nIdleToActive_messageS11" tab="capaciteS11" >
                    
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS11</span>
                        <input type="number" min="1"  class="input default" value="0"  disabled id="nIdleToActive_capaciteS11">
                    </td>
                    <td >
                            <span class="res-head">messageS8</span>
                            <input type="number" min="1"  class="input default last-tab" value="0" id="nIdleToActive_messageS8" tab="capaciteS8">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS8</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nIdleToActive_capaciteS8">
                    </td>
                    <td >
                        <span class="res-head">messageS6</span>
                        <input type="number" min="1"  class="input default last-tab" value="0"  id="nIdleToActive_messageS6" tab="capaciteS6" >
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS6</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nIdleToActive_capaciteS6">
                    </td>
                </tr>
                <!-- end nIdleToActive -->
                <!-- start nConnexionPdn -->

                <tr >
                    <td >
                          <span class="res-head">N <small>(attach)</small></span>
                          N <small>(connexion PDN)</small>
                    </td>
                    <td >
                          <span class="res-head">Nombre</span>
                          <input type="number" min="1"  class="input default last-tab" value="0" id="nConnexionPdn_nombre" tab="all">
                    </td>
                    <td >
                        <span class="res-head">messageProcedure</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nConnexionPdn_messageProcedure" tab="capaciteS1C">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS1C</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nConnexionPdn_capaciteS1C">
                    </td>
                    <td >
                        <span class="res-head">messageS11</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nConnexionPdn_messageS11" tab="capaciteS11" >
                    
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS11</span>
                        <input type="number" min="1"  class="input default" value="0"  disabled id="nConnexionPdn_capaciteS11">
                    </td>
                    <td >
                            <span class="res-head">messageS8</span>
                            <input type="number" min="1"  class="input default last-tab" value="0" id="nConnexionPdn_messageS8" tab="capaciteS8">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS8</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nConnexionPdn_capaciteS8">
                    </td>
                    <td >
                        <span class="res-head">messageS6</span>
                        <input type="number" min="1"  class="input default last-tab" value="0"  id="nConnexionPdn_messageS6" tab="capaciteS6" >
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS6</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nConnexionPdn_capaciteS6">
                    </td>
                </tr>
                <!-- end nConnexionPdn -->
                <!-- start N(bearers activ/desactiv) -->
                <tr >
                    <td >
                          <span class="res-head">N <small>(bearers activ/desactiv)</small></span>
                          N <small>(bearers activ/desactiv)</small>
                    </td>
                    <td >
                          <span class="res-head">Nombre</span>
                          <input type="number" min="1"  class="input default last-tab" value="0" id="nBearer_nombre" tab="all">
                    </td>
                    <td >
                        <span class="res-head">messageProcedure</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nBearer_messageProcedure" tab="capaciteS1C">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS1C</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nBearer_capaciteS1C">
                    </td>
                    <td >
                        <span class="res-head">messageS11</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nBearer_messageS11" tab="capaciteS11" >
                    
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS11</span>
                        <input type="number" min="1"  class="input default" value="0"  disabled id="nBearer_capaciteS11">
                    </td>
                    <td >
                            <span class="res-head">messageS8</span>
                            <input type="number" min="1"  class="input default last-tab" value="0" id="nBearer_messageS8" tab="capaciteS8">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS8</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nBearer_capaciteS8">
                    </td>
                    <td >
                        <span class="res-head">messageS6</span>
                        <input type="number" min="1"  class="input default last-tab" value="0"  id="nBearer_messageS6" tab="capaciteS6" >
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS6</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nBearer_capaciteS6">
                    </td>
                </tr>
                <!-- end N(bearers activ/desactiv) -->
                <!-- start N(TAU_inter_MME)  -->
                <tr >
                    <td >
                          <span class="res-head">N <small>N(TAU_inter_MME)</small></span>
                          N <small>N(TAU_inter_MME)</small>
                    </td>
                    <td >
                          <span class="res-head">Nombre</span>
                          <input type="number" min="1"  class="input default last-tab" value="0" id="nTauInterMme_nombre" tab="all">
                    </td>
                    <td >
                        <span class="res-head">messageProcedure</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nTauInterMme_messageProcedure" tab="capaciteS1C">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS1C</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nTauInterMme_capaciteS1C">
                    </td>
                    <td >
                        <span class="res-head">messageS11</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nTauInterMme_messageS11" tab="capaciteS11" >
                    
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS11</span>
                        <input type="number" min="1"  class="input default" value="0"  disabled id="nTauInterMme_capaciteS11">
                    </td>
                    <td >
                            <span class="res-head">messageS8</span>
                            <input type="number" min="1"  class="input default last-tab" value="0" id="nTauInterMme_messageS8" tab="capaciteS8">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS8</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nTauInterMme_capaciteS8">
                    </td>
                    <td >
                        <span class="res-head">messageS6</span>
                        <input type="number" min="1"  class="input default last-tab" value="0"  id="nTauInterMme_messageS6" tab="capaciteS6" >
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS6</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nTauInterMme_capaciteS6">
                    </td>
                </tr>
                <!-- end N(TAU_inter_MME) -->



                <!-- start N(TAU_inter_MME/SGW) -->

                <tr >
                    <td >
                          <span class="res-head">N <small>(TAU_inter_MME/SGW)</small></span>
                          N <small>(TAU_inter_MME/SGW)</small>
                    </td>
                    <td >
                          <span class="res-head">Nombre</span>
                          <input type="number" min="1"  class="input default last-tab" value="0" id="nTauInterMmeSgw_nombre" tab="all">
                    </td>
                    <td >
                        <span class="res-head">messageProcedure</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nTauInterMmeSgw_messageProcedure" tab="capaciteS1C">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS1C</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nTauInterMmeSgw_capaciteS1C">
                    </td>
                    <td >
                        <span class="res-head">messageS11</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nTauInterMmeSgw_messageS11" tab="capaciteS11" >
                    
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS11</span>
                        <input type="number" min="1"  class="input default" value="0"  disabled id="nTauInterMmeSgw_capaciteS11">
                    </td>
                    <td >
                            <span class="res-head">messageS8</span>
                            <input type="number" min="1"  class="input default last-tab" value="0" id="nTauInterMmeSgw_messageS8" tab="capaciteS8">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS8</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nTauInterMmeSgw_capaciteS8">
                    </td>
                    <td >
                        <span class="res-head">messageS6</span>
                        <input type="number" min="1"  class="input default last-tab" value="0"  id="nTauInterMmeSgw_messageS6" tab="capaciteS6" >
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS6</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nTauInterMmeSgw_capaciteS6">
                    </td>
                </tr>
                <!-- end N(TAU_inter_MME/SGW) -->
                <!-- start N(X2_HO) -->

                <tr >
                    <td >
                          <span class="res-head">N <small>(X2_HO)</small></span>
                          N <small>(X2_HO)</small>
                    </td>
                    <td >
                          <span class="res-head">Nombre</span>
                          <input type="number" min="1"  class="input default last-tab" value="0" id="nX2Ho_nombre" tab="all">
                    </td>
                    <td >
                        <span class="res-head">messageProcedure</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nX2Ho_messageProcedure" tab="capaciteS1C">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS1C</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nX2Ho_capaciteS1C">
                    </td>
                    <td >
                        <span class="res-head">messageS11</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nX2Ho_messageS11" tab="capaciteS11" >
                    
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS11</span>
                        <input type="number" min="1"  class="input default" value="0"  disabled id="nX2Ho_capaciteS11">
                    </td>
                    <td >
                            <span class="res-head">messageS8</span>
                            <input type="number" min="1"  class="input default last-tab" value="0" id="nX2Ho_messageS8" tab="capaciteS8">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS8</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nX2Ho_capaciteS8">
                    </td>
                    <td >
                        <span class="res-head">messageS6</span>
                        <input type="number" min="1"  class="input default last-tab" value="0"  id="nX2Ho_messageS6" tab="capaciteS6" >
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS6</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nX2Ho_capaciteS6">
                    </td>
                </tr>
                <!-- end N(X2_HO)  --> 
                <!-- start N(S1_HO)  -->

                <tr >
                    <td >
                          <span class="res-head">N <small>(S1_HO)</small></span>
                          N <small>(S1_HO)</small>
                    </td>
                    <td >
                          <span class="res-head">Nombre</span>
                          <input type="number" min="1"  class="input default last-tab" value="0" id="nS1Ho_nombre" tab="all">
                    </td>
                    <td >
                        <span class="res-head">messageProcedure</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nS1Ho_messageProcedure" tab="capaciteS1C">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS1C</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nS1Ho_capaciteS1C">
                    </td>
                    <td >
                        <span class="res-head">messageS11</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nS1Ho_messageS11" tab="capaciteS11" >
                    
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS11</span>
                        <input type="number" min="1"  class="input default" value="0"  disabled id="nS1Ho_capaciteS11">
                    </td>
                    <td >
                            <span class="res-head">messageS8</span>
                            <input type="number" min="1"  class="input default last-tab" value="0" id="nS1Ho_messageS8" tab="capaciteS8">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS8</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nS1Ho_capaciteS8">
                    </td>
                    <td >
                        <span class="res-head">messageS6</span>
                        <input type="number" min="1"  class="input default last-tab" value="0"  id="nS1Ho_messageS6" tab="capaciteS6" >
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS6</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nS1Ho_capaciteS6">
                    </td>
                </tr>


                <!-- end N(S1_HO) -->

                <!-- start N(HO_inter_MME)  -->
                <tr >
                    <td >
                          <span class="res-head">N <small>(HO_inter_MME)</small></span>
                          N <small>(HO_inter_MME)</small>
                    </td>
                    <td >
                          <span class="res-head">Nombre</span>
                          <input type="number" min="1"  class="input default last-tab" value="0" id="nHoInterMme_nombre" tab="all">
                    </td>
                    <td >
                        <span class="res-head">messageProcedure</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nHoInterMme_messageProcedure" tab="capaciteS1C">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS1C</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nHoInterMme_capaciteS1C">
                    </td>
                    <td >
                        <span class="res-head">messageS11</span>
                        <input type="number" min="1"  class="input default last-tab" value="0" id="nHoInterMme_messageS11" tab="capaciteS11" >
                    
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS11</span>
                        <input type="number" min="1"  class="input default" value="0"  disabled id="nHoInterMme_capaciteS11">
                    </td>
                    <td >
                            <span class="res-head">messageS8</span>
                            <input type="number" min="1"  class="input default last-tab" value="0" id="nHoInterMme_messageS8" tab="capaciteS8">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS8</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nHoInterMme_capaciteS8">
                    </td>
                    <td >
                        <span class="res-head">messageS6</span>
                        <input type="number" min="1"  class="input default last-tab" value="0"  id="nHoInterMme_messageS6" tab="capaciteS6" >
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS6</span>
                        <input type="number" min="1"  class="input default" value="0" disabled id="nHoInterMme_capaciteS6">
                    </td>
                </tr>
                
                <!-- end N(HO_inter_MME) -->
                <!-- start total -->
                <tr >
                    <td >
                          <span class="res-head"> <small>Capacité totale(Gbits/s)</small></span>
                           <small>Capacité totale(Gbits/s)</small>
                    </td>
                    <td style="opacity: 0;">
                          <span class="res-head">Nombre</span>
                          <input type="number" min="1"  class="input " value="0" >
                    </td>
                    <td style="opacity: 0;">
                        <span class="res-head">messageProcedure</span>
                        <input type="number" min="1"  class="input " value="0" >
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS1C</span>
                        <input type="number" min="1"  class="input " value="0" disabled id="total_capaciteS1C">
                    </td>
                    <td style="opacity: 0;" >
                        <span class="res-head">messageS11</span>
                        <input type="number" min="1"  class="input " value="0"  >
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS11</span>
                        <input type="number" min="1"  class="input " value="0"  disabled id="total_capaciteS11">
                    </td>
                    <td style="opacity: 0;" >
                            <span class="res-head">messageS8</span>
                            <input type="number" min="1"  class="input " value="0">
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;">
                        <span class="res-head">capaciteS8</span>
                        <input type="number" min="1"  class="input " value="0" disabled id="total_capaciteS8">
                    </td>
                    <td style="opacity: 0;" >
                        <span class="res-head">messageS6</span>
                        <input type="number" min="1"  class="input " value="0" >
                    </td>
                    <td style="background-color: blue; color: white; font-weight: bold;" >
                        <span class="res-head">capaciteS6</span>
                        <input type="number" min="1"  class="input " value="0" disabled id="total_capaciteS6">
                    </td>
                </tr>

                <!-- end total -->
            </tbody>
        </table>
        

    </div>
    
 </div>`; 
}