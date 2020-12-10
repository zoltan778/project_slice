//To do app
//10 sor 
//minden sorban checkbox
//mellette szöveges mező
//minden sorban egy törlés gomb
//10 elemből álljon
//legyen új feladat hozzáadása gomb

function _load() {
    
    //0. Egy változóban eltároljuk a "root" elemet
    let root = document.querySelector("#root");
    
    //1. Egy változóba beleírjuk többsoros idézőjelekbe egy sor html kódját
    //legyen a delete gombnak egy class neve
    let row = `
        <div>
        <input type="checkbox">
        <input type="text">
        <button class="delete">Delete</button>
        </div>
    `;
    
    //2. Egy for ciklusba InsertAdjHTML(beforeend)-el root elembe 10 darab másolat
    // a sor kódjából
    for (let index = 0; index < 10; index++) {
        root.insertAdjacentHTML("beforeend", row);
    }
    
    //3. Add gomb hozzáadása "root" elemen kívülre "afterend"-el. 
    let addButtonCode = `
        <button id="add">Add new row</button>
    `;
    root.insertAdjacentHTML("afterend", addButtonCode);
    
    //4. Add gomb: Legyen ID-ja Legyen egy "click" esemény hozzáadva ami egy új sor
    //hozáadását végzi
    function addRow() {
        root.insertAdjacentHTML("beforeend", row);
        //Törlés eseménykezelő hozzáadása    
    }
    let addButton = document.querySelector("#add");
    addButton.addEventListener("click", addRow);
    
    //5. tároljuk el az összes törlés gombot query selectorral.
    let deleteButtons = root.querySelectorAll(".delete");
    
    //7. A "click" listener: törölje ki a megfelelő sort
    function deleteRow(e) {
        e.target.parentElement.remove();
    }
    //6. Menjünk végig az eltárolt törlés gombokon és tegyünk mindegyikre
    //  egy "click" event listenert.
    for (let index = 0; index < deleteButtons.length; index++) {
        deleteButtons[index].addEventListener("click", deleteRow);     
    }
    
    
}

window.addEventListener("load", _load);