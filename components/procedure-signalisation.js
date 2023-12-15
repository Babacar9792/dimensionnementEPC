export function calculProcedure(){
    return `
    <div class="content-nombre-totale-operation-procedure-signalisation">
    <h4>Calcul du nombre total d'opérations pour chaque procèdure de signalisation</h4>
   <div class="abonnee-utilisateur-actif">
    <div>
        <label for="">Utilisateurs actifs à l'HC</label>
        <input type="text" class="number" id="user-actif-hc" style="color: black;" value="0">
    </div>
    <div>
        <label for="">Abonnés actifs à l'HC</label>
        <input type="text" class="number" disabled id="abonne-actif-hc" style="color: black;" value="0">
    </div>

   </div>
   <div id="content-table-nombre-totale-operation">
    <table class="table" >
        <thead>
          <tr>
              <th></th>
              <th>Procédure/Abonné/HC </th>
            <th>Nombre</th>
            
          </tr>
        </thead>
        <tbody>
            <!-- start smartphone navigation web -->
            <tr>
                <td>
                      <span class="res-head">N <small>(attach)</small> </span>
                      N <small>(attach)</small>  
                </td>
                <td>
                      <span class="res-head">N <small>(attach)</small>  </span>
                      <input type="number" min="1"  class="input inputs" id="n-atach">
                </td>
                
                <td >
                      <span class="res-head">Nombre:</span>
                      <input type="number" class="input inputs"  disabled value="0" style="font-weight: bold;" id="display-result-n-atach" >
                </td>
              
              </tr>
              <!-- N(detach) -->
              <tr>
                <td>
                      <span class="res-head">N <small>(detach)</small> </span>
                      N <small>(detach)</small>  
                </td>
                <td>
                      <span class="res-head">N <small>(detach)</small>  </span>
                      <input type="number" min="1"  class="input inputs" id="n-detach">
                </td>
                
                <td >
                      <span class="res-head">Nombre:</span>
                      <input type="number" class="input inputs" disabled value="0"  style="font-weight: bold;" id="display-result-n-detach">
                </td>
              
              </tr>
              <!-- fin N(detache) -->
              
              <!-- N(idle to active) -->
              <tr>
                <td>
                      <span class="res-head">N <small>(idle to active)</small> </span>
                      N <small>(idle to active)</small>  
                </td>
                <td>
                      <span class="res-head">N <small>(idle to active)</small>  </span>
                      <input type="number" min="1"  class="input inputs" id="n-idle-active">
                </td>
                
                <td >
                      <span class="res-head">Nombre:</span>
                      <input type="number" class="input inputs"  disabled value="0"  style="font-weight: bold;" id="display-result-n-idle-active">
                </td>
              
              </tr>
              
              <!-- end N(idle to active) -->
              <!-- N(PDN) -->
              <tr>
                <td>
                      <span class="res-head">N <small>(PDN)</small> </span>
                      N <small>(PDN)</small>  
                </td>
                <td>
                      <span class="res-head">N <small>(PDN)</small>  </span>
                      <input type="number" min="1"  class="input inputs" id="n-pdn">
                </td>
                
                <td >
                      <span class="res-head">Nombre:</span>
                      <input type="number" class="input inputs"  disabled value="0" tab="smartPhone" style="font-weight: bold;" id="display-result-n-pdn" >
                </td>
              
              </tr>
              <!-- end N(PDN) -->
              <!-- N(bearers activ/desactiv) -->
              <tr>
                <td>
                      <span class="res-head">N <small>(bearers activ/desactiv)</small> </span>
                      N <small>(bearers activ/desactiv)</small>  
                </td>
                <td>
                      <span class="res-head">N <small>(bearers activ/desactiv)</small>  </span>
                      <input type="number" min="1"  class="input inputs" id="n-bearers-activ-desactiv">
                </td>
                
                <td >
                      <span class="res-head">Nombre:</span>
                      <input type="number" class="input inputs"  disabled value="0" style="font-weight: bold;" id="display-result-n-bearers-activ-desactiv" >
                </td>
              
              </tr>

              <!-- end N(bearers activ/desactiv) -->
              <!-- N(TAU_inter_MME) -->
              <tr>
                <td>
                      <span class="res-head">N <small>(TAU_inter_MME)</small> </span>
                      N <small>(TAU_inter_MME)</small>  
                </td>
                <td>
                      <span class="res-head">N <small>(TAU_inter_MME)</small>  </span>
                      <input type="number" min="1"  class="input inputs" id="n-tau-inter_mme">
                </td>
                
                <td >
                      <span class="res-head">Nombre:</span>
                      <input type="number" class="input inputs"  disabled value="0"  style="font-weight: bold;" id="display-result-n-tau-inter_mme" >
                </td>
              
              </tr>

              <!-- end N(TAU_inter_MME) -->
              <!-- N(TAU) -->
              <tr>
                <td>
                      <span class="res-head">N <small>(TAU)</small> </span>
                      N <small>(TAU)</small>  
                </td>
                <td>
                      <span class="res-head">N <small>(TAU)</small>  </span>
                      <input type="number" min="1"  class="input inputs" id="n-tau">
                </td>
                
                <td >
                      <span class="res-head">Nombre:</span>
                      <input type="number" class="input inputs"  disabled value="0"  style="font-weight: bold;" id="display-result-n-tau" >
                </td>
              
              </tr>

              <!-- end N(TAU) -->
              <!-- N(X2_HO) -->
              <tr>
                <td>
                      <span class="res-head">N <small>(X2_HO)</small> </span>
                      N <small>(X2_HO)</small>  
                </td>
                <td>
                      <span class="res-head">N <small>(X2_HO)</small>  </span>
                      <input type="number" min="1"  class="input inputs" id="n-x2-ho">
                </td>
                <td >
                      <span class="res-head">Nombre:</span>
                      <input type="number" class="input inputs"  disabled value="0"  style="font-weight: bold;" id="display-result-n-x2-ho" >
                </td>
              </tr>
              <!-- end -->
              <!-- N(S1_HO) -->
              <tr>
                <td>
                      <span class="res-head">N <small>(S1_HO)</small> </span>
                      N <small>(S1_HO)</small>  
                </td>
                <td>
                      <span class="res-head">N <small>(S1_HO)</small>  </span>
                      <input type="number" min="1"  class="input inputs" id="n-s1-ho">
                </td>
                <td >
                      <span class="res-head">Nombre:</span>
                      <input type="number" class="input inputs"  disabled value="0"  style="font-weight: bold;"  id="display-result-n-s1-ho">
                </td>
              
              </tr>
              <!-- end N(S1_HO) -->
              <!-- N(HO_inter_MME) -->

              <tr>
                <td>
                      <span class="res-head">N <small>(HO_inter_MME)</small> </span>
                      N <small>(HO_inter_MME)</small>  
                </td>
                <td>
                      <span class="res-head">N <small>(HO_inter_MME)</small>  </span>
                      <input type="number" min="1"  class="input inputs" id="n-ho-inter-mme">
                </td>
                
                <td >
                      <span class="res-head">Nombre:</span>
                      <input type="number" class="input inputs"  disabled value="0"  style="font-weight: bold;" id="display-result-n-ho-inter-mme" >
                </td>
              
              </tr>
              <!-- end N(HO_inter_MME) -->
              <!-- N(procèdures) -->
              <tr>
                <td>
                      <span class="res-head">N <small>(procèdures)</small> </span>
                      N <small>(procèdures)</small>  
                </td>
                <td style="opacity: 0;">
                    <span class="res-head">N <small>(procèdures)</small> </span>
                    N <small>(procèdures)</small>  
              </td>
                <td >
                      <span class="res-head">Nombre:</span>
                      <input type="number" class="input inputs"  disabled value="0"  style="font-weight: bold;" id="display-result-procedure">
                </td>
              </tr>
              <!-- end N(procèdures) -->
        </tbody>
    </table>
   </div>
</div>`;
}