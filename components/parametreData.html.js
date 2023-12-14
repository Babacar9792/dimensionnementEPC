export function parametreData(){
    return `
    <div class="container-entre">
    <h1>Parametres d'entrées - % de smartphones et de "Data Card"</h1>
    <div class="space-calcule">
        <div class="input-data">
            <label for="total-abonne-input">Nombre total d'abonnés</label>
            <input type="number" min="1" id="total-abonne-input">
        </div>
        <div class="input-data">
            <label for="data-card-input">Percentage "Data card" (en %)</label>
            <input type="number" min="1" id="data-card-input" placeholder="indiquer le pourcentage">
        </div>
        <div class="input-data">
            <label for="smartphone-input">smartphones (%)</label>
            <input type="number" min="1" id="smartphone-input">
        </div>
        <div class="resultats">
            <div>
                <label for="total-data-card">Nombre de "Data card"</label>
                <input type="text"  id="total-data-card" disabled value="0" title="champ bloqué, le nombre de data card sera affiché selon les valeurs remplies au dessus">
            </div>
            <div>
                <label for="total-smartphone">Nombre de Smartphones</label>
                <input type="text" id="total-smartphone" value="0" disabled title="champ bloqué, le nombre de smartphones sera affiché selon les valeurs remplies au dessus">
            </div>

            <!-- <label for="total">Nombre total d'abonnés</label>
            <input type="number" min="1" id="total"  > -->
        </div>
    </div>

</div>`;
}