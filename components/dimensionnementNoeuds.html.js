export function dimensionnementnoeuds(){
    return `
    <div class="container-dimensionnement-noeuds">
    <h2>Dimensionnement des nœuds LTE</h2>
    <div>
        <h4 style="text-align: center;">Valeurs préliminaires</h4>
            <table class="table" >
                <thead>
                  <tr>
                    <th>Composants</th>
                    <th>Metriques</th>
                    <th>Unité</th>
                    <th>Valeur</th>
                    <th>Pourcentage</th>
                    <th>Capacité d'exploitation</th>
                    
                  </tr>
                </thead>
                <tbody>
                    <!-- start mme -->
                    <tr >
                        <td style="opacity: 0;" >
                              <span class="res-head">Mme</span>
                              Mme
                        </td>
                        <td >
                              <span class="res-head">Mme</span>
                              <!-- <input type="number" min="1"  class="input" disabled value="0" > -->
                              <span >Simultaneous Attached Users(SAU)</span>
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <!-- <input type="number" min="1"  class="input" disabled value="0" > -->
                            <span >abonnés</span>
                        </td>
                        <td >
                            <span class="res-head">Valeur</span>
                            <input type="number" min="1"  class="input change-val"  value="0" id="mmeSimultaneousAttachedUsers_valeur" >
                            <!-- <span >All</span> -->
                        </td>
                        <td >
                            <span class="res-head">Pourcentage</span>
                            <input type="number" min="1"  class="input change-val" value="0" id="mmeSimultaneousAttachedUsers_pourcentage" >
                            <!-- <span >All</span> -->
                        </td>
                        <td >
                            <span class="res-head">capaciteExploitation</span>
                            <input type="number" min="1"  class="input" disabled value="0"  id="mmeSimultaneousAttachedUsers_capaciteExploitation">
                            <!-- <span >All</span> -->
                        </td>
                    </tr>
                    <tr >
                        <td >
                              <span class="res-head">Mme</span>
                              Mme
                        </td>
                        <td >
                              <span class="res-head">Mme</span>
                              <!-- <input type="number" min="1"  class="input" disabled value="0" > -->
                              <span >Transitions idle/active par seconde</span>
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <!-- <input type="number" min="1"  class="input" disabled value="0" > -->
                            <span >transitions/seconde</span>
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <input type="number" min="1"  class="input change-val"  value="0" id="mmeTransactionIdleActive_valeur" >
                            <!-- <span >All</span> -->
                        </td>
                        <td >
                            <span class="res-head">Pourcentage</span>
                            <input type="number" min="1"  class="input change-val"  value="0"  id="mmeTransactionIdleActive_pourcentage">
                            <!-- <span >All</span> -->
                        </td>
                        <td >
                            <span class="res-head">capaciteExploitation</span>
                            <input type="number" min="1"  class="input" disabled value="0"  id="mmeTransactionIdleActive_capaciteExploitation" >
                            <!-- <span >All</span> -->
                        </td>
                    </tr>
                    <tr >
                        <td style="opacity: 0;" >
                              <span class="res-head">Access internet</span>
                              Access internet
                        </td>
                        <td >
                              <span class="res-head">Access internet</span>
                              <!-- <input type="number" min="1"  class="input" disabled value="0" > -->
                              <span >Nbre total transactions par seconde</span>
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <!-- <input type="number" min="1"  class="input" disabled value="0" > -->
                            <span >transitions/seconde</span>
                        </td>
                        <td >
                            <span class="res-head">Valeur</span>
                            <input type="number" min="1"  class="input change-val"  value="0" id="mmeTotalTransaction_valeur" >
                            <!-- <span >All</span> -->
                        </td>
                        <td >
                            <span class="res-head">Pourcentage</span>
                            <input type="number" min="1"  class="input change-val"  value="0" id="mmeTotalTransaction_pourcentage">
                            <!-- <span >All</span> -->
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <input type="number" min="1"  class="input" disabled value="0" id="mmeTotalTransaction_capaciteExploitation">
                            <!-- <span >All</span> -->
                        </td>
                    </tr>
                    <!-- end mme -->
                    <!-- start sgw -->

                    <tr >
                        <td style="opacity: 0;" >
                              <span class="res-head">sgw</span>
                              sgw
                        </td>
                        <td >
                              <span class="res-head">sgw</span>
                              <span >Nombre de bearers </span>
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <span >bearers</span>
                        </td>
                        <td >
                            <span class="res-head">Valeur</span>
                            <input type="number" min="1"  class="input change-val"  value="0" id="sgwNombreBearer_valeur" >
                        </td>
                        <td >
                            <span class="res-head">Pourcentage</span>
                            <input type="number" min="1"  class="input change-val" value="0" id="sgwNombreBearer_pourcentage" >
                        </td>
                        <td >
                            <span class="res-head">capaciteExploitation</span>
                            <input type="number" min="1"  class="input" disabled value="0"  id="sgwNombreBearer_capaciteExploitation"  >
                        </td>
                    </tr>
                    <tr >
                        <td >
                              <span class="res-head">SGW</span>
                              SGW
                        </td>
                        <td >
                              <span class="res-head">Mme</span>
                              <span >Capacité traitement de données</span>
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <span >Gbits</span>
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <input type="number" min="1"  class="input change-val"  value="0" id="sgwCapaciteTraitementDonnee_valeur" >
                        </td>
                        <td >
                            <span class="res-head">Pourcentage</span>
                            <input type="number" min="1"  class="input change-val"  value="0"  id="sgwCapaciteTraitementDonnee_pourcentage">
                        </td>
                        <td >
                            <span class="res-head">capaciteExploitation</span>
                            <input type="number" min="1"  class="input" disabled value="0"  id="sgwCapaciteTraitementDonnee_capaciteExploitation" >
                        </td>
                    </tr>
                    
                    <!-- end sgw -->
                    <!-- start pgw -->
                    <tr >
                        <td style="opacity: 0;" >
                              <span class="res-head">sgw</span>
                              PGW
                        </td>
                        <td >
                              <span class="res-head">sgw</span>
                              <span >Nombre de bearers </span>
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <span >bearers</span>
                        </td>
                        <td >
                            <span class="res-head">Valeur</span>
                            <input type="number" min="1"  class="input change-val"  value="0" id="pgwNombreBearer_valeur" >
                        </td>
                        <td >
                            <span class="res-head">Pourcentage</span>
                            <input type="number" min="1"  class="input change-val" value="0" id="pgwNombreBearer_pourcentage" >
                        </td>
                        <td >
                            <span class="res-head">capaciteExploitation</span>
                            <input type="number" min="1"  class="input" disabled value="0"  id="pgwNombreBearer_capaciteExploitation"  >
                        </td>
                    </tr>
                    <tr >
                        <td >
                              <span class="res-head">SGW</span>
                              PGW
                        </td>
                        <td >
                              <span class="res-head">Mme</span>
                              <span >Capacité traitement de données</span>
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <span >Gbits</span>
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <input type="number" min="1"  class="input change-val"  value="0" id="pgwCapaciteTraitementDonnee_valeur" >
                        </td>
                        <td >
                            <span class="res-head">Pourcentage</span>
                            <input type="number" min="1"  class="input change-val"  value="0"  id="pgwCapaciteTraitementDonnee_pourcentage">
                        </td>
                        <td >
                            <span class="res-head">capaciteExploitation</span>
                            <input type="number" min="1"  class="input" disabled value="0"  id="pgwCapaciteTraitementDonnee_capaciteExploitation" >
                        </td>
                    </tr>


                    <!-- end pgw -->
                    <!-- start SGW/PGW Combiné -->

                    <tr >
                        <td style="opacity: 0;" >
                              <span class="res-head">SGW/PGW Combiné</span>
                              SGW/PGW Combiné
                        </td>
                        <td >
                              <span class="res-head">SGW/PGW Combiné</span>
                              <span >Nombre de bearers </span>
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <span >bearers</span>
                        </td>
                        <td >
                            <span class="res-head">Valeur</span>
                            <input type="number" min="1"  class="input change-val"  value="0" id="sgwPgwNombreBearer_valeur" >
                        </td>
                        <td >
                            <span class="res-head">Pourcentage</span>
                            <input type="number" min="1"  class="input change-val" value="0" id="sgwPgwNombreBearer_pourcentage" >
                        </td>
                        <td >
                            <span class="res-head">capaciteExploitation</span>
                            <input type="number" min="1"  class="input" disabled value="0"  id="sgwPgwNombreBearer_capaciteExploitation"  >
                        </td>
                    </tr>
                    <tr >
                        <td >
                              <span class="res-head">SGW/PGW Combiné</span>
                              SGW/PGW Combiné
                        </td>
                        <td >
                              <span class="res-head">Mme</span>
                              <span >Capacité traitement de données</span>
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <span >Gbits</span>
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <input type="number" min="1"  class="input change-val"  value="0" id="sgwPgwCapaciteTraitementDonnee_valeur" >
                        </td>
                        <td >
                            <span class="res-head">Pourcentage</span>
                            <input type="number" min="1"  class="input change-val"  value="0"  id="sgwPgwCapaciteTraitementDonnee_pourcentage">
                        </td>
                        <td >
                            <span class="res-head">capaciteExploitation</span>
                            <input type="number" min="1"  class="input" disabled value="0"  id="sgwPgwCapaciteTraitementDonnee_capaciteExploitation" >
                        </td>
                    </tr>
                    <!-- end SGW/PGW Combiné -->
                    <!-- start  -->
                    <tr >
                        <td >
                              <span class="res-head">HSS</span>
                              HSS
                        </td>
                        <td >
                              <span class="res-head">HSS</span>
                              <span >Capacité traitement de données</span>
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <span >Gbits</span>
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <input type="number" min="1"  class="input change-val"  value="0" id="hssNombreAbonneeSupporte_valeur" >
                        </td>
                        <td >
                            <span class="res-head">Pourcentage</span>
                            <input type="number" min="1"  class="input change-val"  value="0"  id="hssNombreAbonneeSupporte_pourcentage">
                        </td>
                        <td >
                            <span class="res-head">capaciteExploitation</span>
                            <input type="number" min="1"  class="input" disabled value="0"  id="hssNombreAbonneeSupporte_capaciteExploitation" >
                        </td>
                    </tr>


                    <!-- end HSS -->
                    <!-- start   -->
                    <tr >
                        <td >
                              <span class="res-head">PCRF</span>
                              PCRF
                        </td>
                        <td >
                              <span class="res-head">PCRF</span>
                              <span >Capacité traitement de données</span>
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <span >Gbits</span>
                        </td>
                        <td >
                            <span class="res-head">Access internet</span>
                            <input type="number" min="1"  class="input change-val"  value="0" id="pcrfTotalTransaction_valeur" >
                        </td>
                        <td >
                            <span class="res-head">Pourcentage</span>
                            <input type="number" min="1"  class="input change-val"  value="0"  id="pcrfTotalTransaction_pourcentage">
                        </td>
                        <td >
                            <span class="res-head">capaciteExploitation</span>
                            <input type="number" min="1"  class="input" disabled value="0"  id="pcrfTotalTransaction_capaciteExploitation" >
                        </td>
                    </tr>


                    <!-- end PCRF -->
                   
                  
                  
                  
                </tbody>
            </table>
    </div>
    <div>
        <h4 >Nombre de nœuds requis</h4>
            <table class="table" >
                <thead>
                  <tr>
                    <th>Types de nœud EPC</th>
                    <th>Nombre requis</th>
                    
                  </tr>
                </thead>
                <tbody>
                    <!-- start smartphone navigation web -->
                    
                    <tr>
                        <td >
                              <span class="res-head">N(MME-SAU)</span>
                              N(MME-SAU)
                        </td>
                        <td >
                              <span class="res-head">N(MME-SAU)</span>
                              <input type="number" min="1" class="input" disabled id="champ1_c5_f66"  >
                        </td>
                    </tr>
                    <tr>
                        <td >
                              <span class="res-head">N(MME-IDLE/ACTIVE)</span>
                              N(MME-IDLE/ACTIVE)
                        </td>
                        <td >
                              <span class="res-head">N(MME-IDLE/ACTIVE)</span>
                              <input type="number" min="1" class="input" disabled id="champ2_c52_f67"  >
                        </td>
                    </tr>
                    <!-- N(MME-Trans/Second) -->
                    <tr>
                        <td >
                              <span class="res-head">N(MME-Trans/Second)</span>
                              N(MME-Trans/Second)
                        </td>
                        <td >
                              <span class="res-head">N(MME-Trans/Second)</span>
                              <input type="number" min="1" class="input" disabled id="champ3_c60_f68"  >
                        </td>
                    </tr>

                    <tr>
                        <td >
                              <span class="res-head">N(SGW-bearers)</span>
                              N(SGW-bearers)
                        </td>
                        <td >
                              <span class="res-head">N(SGW-bearers)</span>
                              <input type="number" min="1" class="input" disabled id="champ4_c54_f69"  >
                        </td>
                    </tr>

                    <!-- N(SGW-BH-DL-Internet) -->

                    <tr>
                        <td >
                              <span class="res-head">N(SGW-BH-DL-Internet)</span>
                              N(SGW-BH-DL-Internet)
                        </td>
                        <td >
                              <span class="res-head">N(SGW-BH-DL-Internet)</span>
                              <input type="number" min="1" class="input" disabled id="champ5_f38_f70"  >
                        </td>
                    </tr>
                    <!-- N(SGW-BH-DL-VPN) -->
                    <tr>
                        <td >
                              <span class="res-head">N(SGW-BH-DL-VPN)</span>
                              N(SGW-BH-DL-VPN)
                        </td>
                        <td >
                              <span class="res-head">N(SGW-BH-DL-VPN)</span>
                              <input type="number" min="1" class="input" disabled id="champ6_f41_f70"  >
                        </td>
                    </tr>

                    <!-- N(PGW-bearers) -->
                    <tr>
                        <td >
                              <span class="res-head">N(PGW-bearers)</span>
                              N(PGW-bearers)
                        </td>
                        <td >
                              <span class="res-head">N(PGW-bearers)</span>
                              <input type="number" min="1" class="input" disabled id="champ6_c54_f71"  >
                        </td>
                    </tr>

                    <!-- N(PGW-BH-DL-Internet) -->
                    <tr>
                        <td >
                              <span class="res-head">N(PGW-BH-DL-Internet)</span>
                              N(PGW-BH-DL-Internet)
                        </td>
                        <td >
                              <span class="res-head">N(PGW-BH-DL-Internet)</span>
                              <input type="number" min="1" class="input" disabled id="champ8_f38_f72"  >
                        </td>
                    </tr>

                    <!-- N(PGW-BH-DL-VPN) -->

                    <tr>
                        <td >
                              <span class="res-head">N(PGW-BH-DL-VPN)</span>
                              N(PGW-BH-DL-VPN)
                        </td>
                        <td >
                              <span class="res-head">N(PGW-BH-DL-VPN)</span>
                              <input type="number" min="1" class="input" disabled id="champ9_f41_D72"  >
                        </td>
                    </tr>

                    <!-- N(SGW/PGW-bearers) -->
                    <tr>
                        <td >
                              <span class="res-head">N(SGW/PGW-bearers)</span>
                              N(SGW/PGW-bearers)
                        </td>
                        <td >
                              <span class="res-head">N(SGW/PGW-bearers)</span>
                              <input type="number" min="1" class="input" disabled id="champ9_c54_f73"  >
                        </td>
                    </tr>
                    <!-- N(SGW/PGW-BH-DL-Internet) -->
                    <tr>
                        <td>
                              <span class="res-head">N(SGW/PGW-BH-DL-Internet)</span>
                              N(SGW/PGW-BH-DL-Internet)
                        </td>
                        <td>
                              <span class="res-head">N(SGW/PGW-BH-DL-Internet)</span>
                              <input type="number" min="1" class="input" disabled id="champ10_f38_f74"  >
                        </td>
                    </tr>
                    <!-- N(SGW-BH-DL-VPN) -->
                    <tr>
                        <td>
                              <span class="res-head">N(SGW-BH-DL-VPN)</span>
                              N(SGW-BH-DL-VPN)
                        </td>
                        <td>
                              <span class="res-head">N(SGW-BH-DL-VPN)</span>
                              <input type="number" min="1" class="input" disabled id="champ11_f41_f74"  >
                        </td>
                    </tr>

                    <!-- N(HSS) -->
                    <tr>
                        <td>
                              <span class="res-head">N(HSS)</span>
                              N(HSS)
                        </td>
                        <td>
                              <span class="res-head">N(HSS)</span>
                              <input type="number" min="1" class="input" disabled id="champ12_a9_f75"  >
                        </td>
                    </tr>

                    <!-- N(PCRF) -->

                    <tr>
                        <td>
                              <span class="res-head">N(PCRF)</span>
                              N(PCRF)
                        </td>
                        <td>
                              <span class="res-head">N(PCRF)</span>
                              <input type="number" min="1" class="input" disabled id="champ13_c60_f76"  >
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
</div>`;
}