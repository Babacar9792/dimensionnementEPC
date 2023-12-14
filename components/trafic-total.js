export function traficTotal() {
    return `
    <div class="container-trafic-total">
             <div>
                <div id="table1">
                    <h4>Trafic total pour VPN et Internet à l'HC - DL/UL</h4>
                    <table class="table" >
                        <thead>
                          <tr>
                            <th>Designation</th>
                            <th>Trafic total a l'HC pour Internet</th>
                          </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td>
                                      <span class="res-head">Volume trafic total pour tous les smartphones (Gb)</span>
                                      Volume trafic total pour tous les smartphones (Gb)
                                </td>
                                <td>
                                      <span class="res-head">Volume trafic total pour tous les smartphones (Gb)</span>
                                      <input type="number" disabled class="input inputs" id="volume_trafic_totale_smartphone">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                      <span class="res-head">Volume trafic total pour les cartes de données (Gb)</span>
                                      Volume trafic total pour les cartes de données (Gb)
                                </td>
                                <td>
                                      <span class="res-head">Volume trafic total pour les cartes de données (Gb)</span>
                                      <input type="number" disabled class="input inputs" id="volume_trafic_totale_carte">
                                </td>
                            </tr>
                            <!--  -->
                            <tr>
                                <td>
                                      <span class="res-head">Volume de trafic total (Gb)</span>
                                      Volume de trafic total (Gb)
                                </td>
                                <td>
                                      <span class="res-head">Volume de trafic total (Gb)</span>
                                      <input type="number" disabled class="input inputs" id="volume_trafic_totale">
                                </td>
                            </tr>
                            <!--  -->
                            <tr>
                                <td style="color: green; font-weight: bold;">
                                      <span class="res-head">Debit Internet a l'HC - UL/DL  (Gbits/s)</span>
                                      Debit Internet a l'HC - UL/DL  (Gbits/s)
                                </td>
                                <td>
                                      <span class="res-head">Debit Internet a l'HC - UL/DL  (Gbits/s)</span>
                                      <input type="number" disabled class="input inputs" id="debit_internet_ul_dl">
                                </td>
                            </tr>
                            <!-- Data Card (Cartes de donnés) utilisant VPN -->
                            <tr>
                                <td >
                                      <span class="res-head">Data Card (Cartes de donnés) utilisant VPN</span>
                                      Data Card (Cartes de donnés) utilisant VPN
                                </td>
                                <td>
                                      <span class="res-head">Data Card (Cartes de donnés) utilisant VPN</span>
                                      <input type="number" disabled class="input inputs" id="data_card_utilisant_vpn">
                                </td>
                            </tr>
                            <!-- Trafic total pour VPN (Gb) -->
                            <tr>
                                <td >
                                      <span class="res-head">Trafic total pour VPN (Gb)</span>
                                      Trafic total pour VPN (Gb)
                                </td>
                                <td>
                                      <span class="res-head">Trafic total pour VPN (Gb)</span>
                                      <input type="number" disabled class="input inputs" id="trafic_total_vpn">
                                </td>
                            </tr>
                            <!-- Débit total VPN (data card) (Gbits/s) -->
                            <tr>
                                <td style="color: green; font-weight: bold;">
                                      <span class="res-head">Débit total VPN (data card) (Gbits/s)</span>
                                      Débit total VPN (data card) (Gbits/s)
                                </td>
                                <td >
                                      <span class="res-head">Débit total VPN (data card) (Gbits/s)</span>
                                      <input type="number" disabled class="input inputs" id="debit_total_vpn">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    

                </div>
             </div>

             <!-- second tableau -->
             <div>


                <h4>Trafic total pour VPN et Internet à l'HC - DL</h4>
                    <table class="table" >
                        <thead>
                          <tr>
                            <th>Désignation</th>
                            <th>Trafic total a l'HC pour Internet</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                            <!-- start smartphone navigation web -->
                            <tr>
                                <td>
                                      <span class="res-head">Volume trafic total pour tous les smartphones (Gb)</span>
                                      Volume trafic total pour tous les smartphones (Gb)
                                </td>
                                <td>
                                      <span class="res-head">Volume trafic total pour tous les smartphones (Gb)</span>
                                      <input type="number" disabled class="input inputs" id="volume_trafic_totale_smartphone2">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                      <span class="res-head">Volume trafic total pour les cartes de données (Gb)</span>
                                      Volume trafic total pour les cartes de données (Gb)
                                </td>
                                <td>
                                      <span class="res-head">Volume trafic total pour les cartes de données (Gb)</span>
                                      <input type="number" disabled class="input inputs" id="volume_trafic_totale_carte2">
                                </td>
                            </tr>
                            <!--  -->
                            <tr>
                                <td>
                                      <span class="res-head">Volume de trafic total (Gb)</span>
                                      Volume de trafic total (Gb)
                                </td>
                                <td>
                                      <span class="res-head">Volume de trafic total (Gb)</span>
                                      <input type="number" disabled class="input inputs" id="volume_trafic_totale2">
                                </td>
                            </tr>
                            <!--  -->
                            <tr>
                                <td style="color: green; font-weight: bold;">
                                      <span class="res-head">Debit Internet a l'HC - UL/DL  (Gbits/s)</span>
                                      Debit Internet a l'HC - UL/DL  (Gbits/s)
                                </td>
                                <td>
                                      <span class="res-head">Debit Internet a l'HC - UL/DL  (Gbits/s)</span>
                                      <input type="number" disabled class="input inputs" id="debit_internet_ul_dl2">
                                </td>
                            </tr>
                            <!-- Data Card (Cartes de donnés) utilisant VPN -->
                            <tr>
                                <td >
                                      <span class="res-head">Data Card (Cartes de donnés) utilisant VPN</span>
                                      Data Card (Cartes de donnés) utilisant VPN
                                </td>
                                <td>
                                      <span class="res-head">Data Card (Cartes de donnés) utilisant VPN</span>
                                      <input type="number" disabled class="input inputs" id="data_card_utilisant_vpn2">
                                </td>
                            </tr>
                            <!-- Trafic total pour VPN (Gb) -->
                            <tr>
                                <td >
                                      <span class="res-head">Trafic total pour VPN (Gb)</span>
                                      Trafic total pour VPN (Gb)
                                </td>
                                <td>
                                      <span class="res-head">Trafic total pour VPN (Gb)</span>
                                      <input type="number" disabled class="input inputs" id="trafic_total_vpn2">
                                </td>
                            </tr>
                            <!-- Débit total VPN (data card) (Gbits/s) -->
                            <tr>
                                <td style="color: green; font-weight: bold;">
                                      <span class="res-head">Débit total VPN (data card) (Gbits/s)</span>
                                      Débit total VPN (data card) (Gbits/s)
                                </td>
                                <td >
                                      <span class="res-head">Débit total VPN (data card) (Gbits/s)</span>
                                      <input type="number" disabled class="input inputs" id="debit_total_vpn2">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>   

        </div>`;
    
}