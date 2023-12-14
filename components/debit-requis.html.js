export function debitRequis() {
    return `
    <h1>Calcul des débits recquis en DL/UL pour les Smartphones et les "Data Card" (Cartes Données)</h1>
        <div class="container-entre">
            <div class="nav-tableau-2">
                <a type="button" href="#table1" id="btn-to-table1">
                    Volume de trafic Internet généré par un  smartphone LTE en UL/DL et DL
                </a>
                <a type="button" href="#table2" id="btn-to-table2">
                    Volume de trafic Internet & VPN généré par une "Data Card"  en UL/DL et DL     
                </a>
            </div>
            <div class="content-tab1">

               

                <!-- Premier tableau -->
                <div id="table1">
                    <h4>Volume de trafic Internet généré par un  smartphone LTE en UL/DL et DL</h4>
                    <table class="table" >
                        <thead>
                          <tr>
                            <th>Types de services</th>
                            <th>Nombre de sessions à l'HC</th>
                            <th>Taille session à l'HC</th>
                            <th>Pourcentage DL</th>
                            <th>Volume trafic à l'HC en UL/DL(Mb)</th>
                            <th>Volume trafic à l'HC en DL(Mb)</th>
                          </tr>
                        </thead>
                        <tbody>
                            <!-- start smartphone navigation web -->
                            <tr>
                                <td>
                                      <span class="res-head">Navigation web</span>
                                      Navigation Web
                                </td>
                                <td>
                                      <span class="res-head">navigationWeb</span>
                                      <input type="number" min="1" tab="smartPhone" ligne="navigationWeb" colonne="nombreDeSession" class="input inputs">
                                </td>
                                <td>
                                      <span class="res-head">navigationWeb:</span>
                                      <input type="number" min="1" class="input inputs" tab="smartPhone" ligne="navigationWeb" colonne="tailleSession">
                                </td>
                                <td>
                                      <span class="res-head">navigationWeb:</span>
                                      <input type="number" min="1" class="input inputs" tab="smartPhone" ligne="navigationWeb" colonne="pourcentageDl">
                                </td>
                                <td >
                                      <span class="res-head">navigationWeb:</span>
                                      <input type="number" class="input inputs" tab="smartPhone"  id="smartPhone_navigationWeb_volumeTraficUlDL" ligne="navigationWeb" colonne="volumeTraficUlDL" disabled tab="smartPhone" style="font-weight: bold;" >
                                </td>
                                <td>
                                      <span class="res-head">navigationWeb:</span>
                                      <input type="number" class="input inputs" tab="smartPhone"  id="smartPhone_navigationWeb_volumeTraficDl" ligne="navigationWeb" colonne="volumeTraficUlDL" disabled tab="smartPhone" style="font-weight: bold;" >
                                </td>
                              </tr>
                            <!-- end smartphone navigation web -->
                            <!-- start smartphone email -->
                            <tr>
                                <td>
                                      <span class="res-head">Email</span>
                                      Email
                                </td>
                                <td>
                                      <span class="res-head">email</span>
                                      <input type="number" min="1" tab="smartPhone" ligne="email" colonne="nombreDeSession" class="input inputs">
                                </td>
                                <td>
                                      <span class="res-head">email:</span>
                                      <input type="number" min="1" class="input inputs" tab="smartPhone" ligne="email" colonne="tailleSession">
                                </td>
                                <td>
                                      <span class="res-head">email:</span>
                                      <input type="number" min="1" class="input inputs" tab="smartPhone" ligne="email" colonne="pourcentageDl">
                                </td>
                                <td >
                                      <span class="res-head">email:</span>
                                      <input type="number" class="input inputs"  id="smartPhone_email_volumeTraficUlDL" ligne="email" colonne="volumeTraficUlDL" disabled tab="smartPhone" style="font-weight: bold;" >
                                </td>
                                <td>
                                      <span class="res-head">email:</span>
                                      <input type="number" class="input inputs"  id="smartPhone_email_volumeTraficDl" ligne="email" colonne="volumeTraficUlDL" disabled tab="smartPhone" style="font-weight: bold;" >
                                </td>
                              </tr>
                            <!-- end smartphone email -->
                            <!-- start smartphone streaming video -->

                            <tr>
                                <td>
                                      <span class="res-head">Streaming Video</span>
                                      Streaming Video
                                </td>
                                <td>
                                      <span class="res-head">streamingVideo</span>
                                      <input type="number" min="1" tab="smartPhone" ligne="streamingVideo" colonne="nombreDeSession" class="input inputs">
                                </td>
                                <td>
                                      <span class="res-head">streamingVideo:</span>
                                      <input type="number" min="1" class="input inputs" tab="smartPhone" ligne="streamingVideo" colonne="tailleSession">
                                </td>
                                <td>
                                      <span class="res-head">streamingVideo:</span>
                                      <input type="number" min="1" class="input inputs" tab="smartPhone" ligne="streamingVideo" colonne="pourcentageDl">
                                </td>
                                <td >
                                      <span class="res-head">streamingVideo:</span>
                                      <input type="number" class="input inputs"  id="smartPhone_streamingVideo_volumeTraficUlDL" ligne="streamingVideo" colonne="volumeTraficUlDL" disabled tab="smartPhone" style="font-weight: bold;" >
                                </td>
                                <td>
                                      <span class="res-head">streamingVideo:</span>
                                      <input type="number" class="input inputs"  id="smartPhone_streamingVideo_volumeTraficDl" ligne="streamingVideo" colonne="volumeTraficUlDL" disabled tab="smartPhone" style="font-weight: bold;" >
                                </td>
                              </tr>
                            <!-- end smartphone streaming video -->
                            <!-- start smartphone vpn -->
                            <tr>
                                <td>
                                      <span class="res-head">VPN</span>
                                      VPN
                                </td>
                                <td>
                                      <span class="res-head">vpn</span>
                                      <input type="number" min="1" tab="smartPhone" ligne="vpn" colonne="nombreDeSession" class="input inputs">
                                </td>
                                <td>
                                      <span class="res-head">vpn:</span>
                                      <input type="number" min="1" class="input inputs" tab="smartPhone" ligne="vpn" colonne="tailleSession">
                                </td>
                                <td>
                                      <span class="res-head">vpn:</span>
                                      <input type="number" min="1" class="input inputs" tab="smartPhone" ligne="vpn" colonne="pourcentageDl">
                                </td>
                                <td >
                                      <span class="res-head">vpn:</span>
                                      <input type="number" class="input inputs"  id="smartPhone_vpn_volumeTraficUlDL" ligne="vpn" colonne="volumeTraficUlDL" disabled tab="smartPhone" style="font-weight: bold;" >
                                </td>
                                <td>
                                      <span class="res-head">vpn:</span>
                                      <input type="number" class="input inputs"  id="smartPhone_vpn_volumeTraficDl" ligne="vpn" colonne="volumeTraficUlDL" disabled tab="smartPhone" style="font-weight: bold;" >
                                </td>
                              </tr>
                            <!-- end smartphone vpn -->
                            <!-- start smartphone gaming -->
                            <tr>
                                <td>
                                      <span class="res-head">Gaming</span>
                                      Gaming
                                </td>
                                <td>
                                      <span class="res-head">gaming</span>
                                      <input type="number" min="1" tab="smartPhone" ligne="gaming" colonne="nombreDeSession" class="input inputs">
                                </td>
                                <td>
                                      <span class="res-head">gaming:</span>
                                      <input type="number" min="1" class="input inputs" tab="smartPhone" ligne="gaming" colonne="tailleSession">
                                </td>
                                <td>
                                      <span class="res-head">gaming:</span>
                                      <input type="number" min="1" class="input inputs" tab="smartPhone" ligne="gaming" colonne="pourcentageDl">
                                </td>
                                <td >
                                      <span class="res-head">gaming:</span>
                                      <input type="number" class="input inputs"  id="smartPhone_gaming_volumeTraficUlDL" ligne="gaming" colonne="volumeTraficUlDL" disabled tab="smartPhone" style="font-weight: bold;" >
                                </td>
                                <td>
                                      <span class="res-head">gaming:</span>
                                      <input type="number" class="input inputs"  id="smartPhone_gaming_volumeTraficDl" ligne="gaming" colonne="volumeTraficUlDL" disabled tab="smartPhone" style="font-weight: bold;" >
                                </td>
                              </tr>
                            <!-- end smartphone gaming -->
                          
                          
                          
                        </tbody>
                    </table>
                    <div class="sommeVolume">
                      <div>
                          <label for="">Volume total du trafic Internet</label>
                          <input type="number" id="smartPhone_volumeTraficUlDL_internet" disabled value="14.04">
                          <input type="number" id="smartPhone_volumeTraficDl_internet" disabled value="12.824">
                      </div>
                    </div>

                </div>

                  <!-- Second tableau -->

                  <div id="table2">
                    <h4> Volume de trafic Internet & VPN généré par une "Data Card"  en UL/DL et DL</h4>
                    <table class="table" >
                        <thead>
                          <tr>
                            <th>Types de services</th>
                            <th>Nombre de sessions à l'HC</th>
                            <th>Taille session à l'HC</th>
                            <th>Pourcentage DL</th>
                            <th>Volume trafic à l'HC en UL/DL(Mb)</th>
                            <th>Volume trafic à l'HC en DL(Mb)</th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                      <span class="res-head">Id:</span>
                                      Navigation Web</td>
                                <td>
                                      <span class="res-head">Firstname:</span>
                                      <input type="number" min="1" tab="dataCard" ligne="navigationWeb" colonne="nombreDeSession" class="input inputs">
                                </td>
                                <td>
                                      <span class="res-head">Lastname:</span>
                                      <input type="number" min="1" class="input inputs" tab="dataCard" ligne="navigationWeb" colonne="tailleSession">
                                </td>
                                <td>
                                      <span class="res-head">Email:</span>
                                      <input type="number" min="1" class="input inputs" tab="dataCard" ligne="navigationWeb" colonne="pourcentageDl">
                                </td>
                                <td >
                                      <span class="res-head">Email:</span>
                                      <input type="number" class="input inputs"  id="dataCard_navigationWeb_volumeTraficUlDL" ligne="navigationWeb" colonne="volumeTraficUlDL" disabled tab="dataCard" style="font-weight: bold;" >
                                </td>
                                <td>
                                      <span class="res-head">Email:</span>
                                      <input type="number" class="input inputs"  id="dataCard_navigationWeb_volumeTraficDl" ligne="navigationWeb" colonne="volumeTraficUlDL" disabled tab="dataCard" style="font-weight: bold;" >
                                </td>
                              </tr>
                              <!-- end ligne navigatorWeb -->

                              <!-- start ligne Email -->
                              <tr>
                                <td>
                                      <span class="res-head">Id:</span>
                                      Email</td>
                                <td>
                                      <span class="res-head">Firstname:</span>
                                      <input type="number" min="1" tab="dataCard" ligne="email" colonne="nombreDeSession" class="input inputs">
                                </td>
                                <td>
                                      <span class="res-head">Lastname:</span>
                                      <input type="number" min="1" class="input inputs" tab="dataCard" ligne="email" colonne="tailleSession">
                                </td>
                                <td>
                                      <span class="res-head">Email:</span>
                                      <input type="number" min="1" class="input inputs" tab="dataCard" ligne="email" colonne="pourcentageDl">
                                </td>
                                <td >
                                      <span class="res-head">Email:</span>
                                      <input type="number" class="input inputs"  id="dataCard_email_volumeTraficUlDL" ligne="email" colonne="volumeTraficUlDL" disabled tab="dataCard" style="font-weight: bold;" >
                                </td>
                                <td>
                                      <span class="res-head">Email:</span>
                                      <input type="number" class="input inputs"  id="dataCard_email_volumeTraficDl" ligne="email" colonne="volumeTraficUlDL" disabled tab="dataCard" style="font-weight: bold;" >
                                </td>
                              </tr>
                              <!-- end ligne email -->
                              <!-- start ligne Streaming video -->
                              <tr>
                                <td>
                                      <span class="res-head">Id:</span>
                                      Streaming video
                                </td>
                                <td>
                                      <span class="res-head">email:</span>
                                      <input type="number" min="1" tab="dataCard" ligne="streamingVideo" colonne="nombreDeSession" class="input inputs">
                                </td>
                                <td>
                                      <span class="res-head">streamingVideo:</span>
                                      <input type="number" min="1" class="input inputs" tab="dataCard" ligne="streamingVideo" colonne="tailleSession">
                                </td>
                                <td>
                                      <span class="res-head">streamingVideo:</span>
                                      <input type="number" min="1" class="input inputs" tab="dataCard" ligne="streamingVideo" colonne="pourcentageDl">
                                </td>
                                <td >
                                      <span class="res-head">streamingVideo:</span>
                                      <input type="number" class="input inputs"  id="dataCard_streamingVideo_volumeTraficUlDL" ligne="streamingVideo" colonne="volumeTraficUlDL" disabled tab="dataCard" style="font-weight: bold;" >
                                </td>
                                <td>
                                      <span class="res-head">streamingVideo:</span>
                                      <input type="number" class="input inputs"  id="dataCard_streamingVideo_volumeTraficDl" ligne="streamingVideo" colonne="volumeTraficUlDL" disabled tab="dataCard" style="font-weight: bold;" >
                                </td>
                              </tr>
                              <!-- end ligne streaming video -->
                              <!-- start ligne vpn -->

                              <tr>
                                <td>
                                      <span class="res-head">Id:</span>
                                      VPN
                                </td>
                                <td>
                                      <span class="res-head">email:</span>
                                      <input type="number" min="1" tab="dataCard" ligne="vpn" colonne="nombreDeSession" class="input inputs">
                                </td>
                                <td>
                                      <span class="res-head">vpn:</span>
                                      <input type="number" min="1" class="input inputs" tab="dataCard" ligne="vpn" colonne="tailleSession">
                                </td>
                                <td>
                                      <span class="res-head">vpn:</span>
                                      <input type="number" min="1" class="input inputs" tab="dataCard" ligne="vpn" colonne="pourcentageDl">
                                </td>
                                <td >
                                      <span class="res-head">vpn:</span>
                                      <input type="number" class="input inputs"  id="dataCard_vpn_volumeTraficUlDL" ligne="vpn" colonne="volumeTraficUlDL" disabled tab="dataCard" style="font-weight: bold;" >
                                </td>
                                <td>
                                      <span class="res-head">vpn:</span>
                                      <input type="number" class="input inputs"  id="dataCard_vpn_volumeTraficDl" ligne="vpn" colonne="volumeTraficUlDL" disabled tab="dataCard" style="font-weight: bold;" >
                                </td>
                              </tr>

                              <!-- end ligne vpn -->
                              <!-- start ligne gaming -->
                              <tr>
                                <td>
                                      <span class="res-head">Id:</span>
                                      Gaming
                                </td>
                                <td>
                                      <span class="res-head">email:</span>
                                      <input type="number" min="1" tab="dataCard" ligne="gaming" colonne="nombreDeSession" class="input inputs">
                                </td>
                                <td>
                                      <span class="res-head">gaming:</span>
                                      <input type="number" min="1" class="input inputs" tab="dataCard" ligne="gaming" colonne="tailleSession">
                                </td>
                                <td>
                                      <span class="res-head">gaming:</span>
                                      <input type="number" min="1" class="input inputs" tab="dataCard" ligne="gaming" colonne="pourcentageDl">
                                </td>
                                <td >
                                      <span class="res-head">gaming:</span>
                                      <input type="number" class="input inputs"  id="dataCard_gaming_volumeTraficUlDL" ligne="gaming" colonne="volumeTraficUlDL" disabled tab="dataCard" style="font-weight: bold;" >
                                </td>
                                <td>
                                      <span class="res-head">gaming:</span>
                                      <input type="number" class="input inputs"  id="dataCard_gaming_volumeTraficDl" ligne="gaming" colonne="volumeTraficUlDL" disabled tab="dataCard" style="font-weight: bold;" >
                                </td>
                              </tr>

                              <!-- end ligne gaming -->

                             
                          
                          
                        </tbody>
                      </table>
                      <div class="sommeVolume">
                        <div>
                            <label for="">Volume total du trafic Internet</label>
                        <input type="text" disabled id="dataCard_volumeTraficUlDL_internet" value="16.04">
                        <input type="text" disabled id="dataCard_volumeTraficDl_internet" value="14.424">
                        </div>
                        <div>
                            <label for="">Volume total du trafic VPN</label>
                        <input type="number" disabled id="dataCard_volumeTraficUlDL_vpn" value="1">
                        <input type="number" disabled id= "dataCard_volumeTraficDl_vpn" value="0.6">
                        </div>
                      </div>
                  </div>

            </div>
        </div>`;
    
}