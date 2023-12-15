export function dimensionnement(){
    return `
    <div class="container-dimensionnement-plan-user">
             <h4>Dimensionnement du plan usager (données des utilisateurs Smarphones + Data Card)</h4>
             <div class="content-table">
                <!-- first tableau : Dimensionnement du plan usager -->
                <div style="display: block;">
                    <h5>Pour l'interface S1U</h5>
                    <div style="width: 100%;  height: 80%;">
                        <table class="table" >
                            <thead>
                              <tr>
                                <th></th>
                                <th></th>
                                
                              </tr>
                            </thead>
                            <tbody>
                                <!-- start smartphone navigation web -->
                                <tr >
                                    <td >
                                          <span class="res-head">Overhead par paquet (octets)</span>
                                          Overhead par paquet (octets)
                                    </td>
                                    <td >
                                          <span class="res-head">Overhead par paquet (octets)</span>
                                          <input type="number" min="1"  class="input" value="0" id="overhead-paquet">
                                          
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                          <span class="res-head">Taille paquet</span>
                                          Taille paquet
                                    </td>
                                    <td >
                                          <span class="res-head">Taille paquet</span>
                                          <input type="number" min="1" class="input" value="0" id="taille-paquet"> 
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                          <span class="res-head">Overhead</span>
                                          Overhead
                                    </td>
                                    <td >
                                          <span class="res-head">Overhead</span>
                                          <input type="number" min="1" class="input" disabled value="0" id="overhead">
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                          <span class="res-head">Debit pour les services Internet</span>
                                          Debit pour les services Internet
                                    </td>
                                    <td >
                                          <span class="res-head">Debit pour les services Internet</span>
                                          <input type="number" min="1" class="input" disabled value="0" id="debit-service-internet">
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                          <span class="res-head">Debit pour le service VPN</span>
                                          Debit pour le service VPN
                                    </td>
                                    <td >
                                          <span class="res-head">Debit pour le service VPN</span>
                                          <input type="number" min="1" class="input" disabled value="0" id="debit-service-vpn">
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                          <span class="res-head">Débit total</span>
                                          Débit total
                                    </td>
                                    <td >
                                          <span class="res-head">Débit total</span>
                                          <input type="number" min="1" class="input" disabled value="0" id="debit-total">
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <!-- end first tableau -->
                <!-- second tableau : Pour l'interface S5 -->

                <div style="display: block;">
                    <h5>Pour l'interface S5</h5>
                    <div style="width: 100%;  height: 80%;">
                        <table class="table" >
                            <thead>
                              <tr>
                                <th></th>
                                <th></th>
                                
                              </tr>
                            </thead>
                            <tbody>
                                <!-- start smartphone navigation web -->
                                <tr >
                                    <td >
                                          <span class="res-head">Overhead par paquet (octets)</span>
                                          Overhead par paquet (octets)
                                    </td>
                                    <td >
                                          <span class="res-head">Overhead par paquet (octets)</span>
                                          <input type="number" min="1"  class="input" value="0" id="overhead-paquet1">
                                          
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                          <span class="res-head">Taille paquet</span>
                                          Taille paquet
                                    </td>
                                    <td >
                                          <span class="res-head">Taille paquet</span>
                                          <input type="number" min="1" class="input" value="0" id="taille-paquet1"> 
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                          <span class="res-head">Overhead</span>
                                          Overhead
                                    </td>
                                    <td >
                                          <span class="res-head">Overhead</span>
                                          <input type="number" min="1" class="input" disabled value="0" id="overhead1">
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                          <span class="res-head">Debit pour les services Internet</span>
                                          Debit pour les services Internet
                                    </td>
                                    <td >
                                          <span class="res-head">Debit pour les services Internet</span>
                                          <input type="number" min="1" class="input" disabled value="0" id="debit-service-internet1">
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                          <span class="res-head">Debit pour le service VPN</span>
                                          Debit pour le service VPN
                                    </td>
                                    <td >
                                          <span class="res-head">Debit pour le service VPN</span>
                                          <input type="number" min="1" class="input" disabled value="0" id="debit-service-vpn1">
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                          <span class="res-head">Débit total</span>
                                          Débit total
                                    </td>
                                    <td >
                                          <span class="res-head">Débit total</span>
                                          <input type="number" min="1" class="input" disabled value="0" id="debit-total1">
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <!-- end second tableau -->
                <!-- third tableau : Pour l'interface SGi -->
                <div style="display: block;">
                    <h5>Pour l'interface SGi</h5>
                    <div style="width: 100%;  height: 80%;">
                        <table class="table" >
                            <thead>
                              <tr>
                                <th></th>
                                <th></th>
                                
                              </tr>
                            </thead>
                            <tbody>
                                <!-- start smartphone navigation web -->
                                <tr >
                                    <td >
                                          <span class="res-head">Overhead par paquet (octets)</span>
                                          Overhead par paquet (octets)
                                    </td>
                                    <td >
                                          <span class="res-head">Overhead par paquet (octets)</span>
                                          <input type="number" min="1"  class="input" value="0" id="overhead-paquet2">
                                          
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                          <span class="res-head">Taille paquet</span>
                                          Taille paquet
                                    </td>
                                    <td >
                                          <span class="res-head">Taille paquet</span>
                                          <input type="number" min="1" class="input" value="0" id="taille-paquet2"> 
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                          <span class="res-head">Overhead</span>
                                          Overhead
                                    </td>
                                    <td >
                                          <span class="res-head">Overhead</span>
                                          <input type="number" min="1" class="input" disabled value="0" id="overhead2">
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                          <span class="res-head">Debit pour les services Internet</span>
                                          Debit pour les services Internet
                                    </td>
                                    <td >
                                          <span class="res-head">Debit pour les services Internet</span>
                                          <input type="number" min="1" class="input" disabled value="0" id="debit-service-internet2">
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                          <span class="res-head">Debit pour le service VPN</span>
                                          Debit pour le service VPN
                                    </td>
                                    <td >
                                          <span class="res-head">Debit pour le service VPN</span>
                                          <input type="number" min="1" class="input" disabled value="0" id="debit-service-vpn2">
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                          <span class="res-head">Débit total</span>
                                          Débit total
                                    </td>
                                    <td >
                                          <span class="res-head">Débit total</span>
                                          <input type="number" min="1" class="input" disabled value="0" id="debit-total2">
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
       

            </div>
            
        </div>`;

}