localStorage.clear();
var table = document.querySelector("#pokemon");
var inputs = document.querySelectorAll("input[type = 'text']");
var create_button = document.querySelector("#create");
var save_button = document.querySelector('#save');
var pokémon_rows = document.getElementsByClassName("pokemon_row");

let parsedData = [];

if (!localStorage.getItem('tableData')){
    const defaultData = [{
        Pokemon:'Default Pokemon', 
        route_1: 'Default Route 1', 
        route_2: 'Default Route 2',
        route_3: 'Default Route 3',
        route_4: 'Default Route 4',
        route_5: 'Default Route 5',
        route_6: 'Default Route 6',
        route_7: 'Default Route 7',
        route_8: 'Default Route 8',
        route_9: 'Default Route 9',
        route_10: 'Default Route 10',
        route_11: 'Default Route 11',
        route_12: 'Default Route 12',
        route_13: 'Default Route 13',
        route_14: 'Default Route 14',
        route_15: 'Default Route 15',
        route_16: 'Default Route 16',
        route_17: 'Default Route 17',
        route_18: 'Default Route 18',
        route_19: 'Default Route 19',
        route_20: 'Default Route 20',
        route_21: 'Default Route 21',
        route_22: 'Default Route 22',
        route_23: 'Default Route 23',
        route_24: 'Default Route 24',
        route_25: 'Default Route 25',
        viridian_forest: 'Default Viridian Forest',
        mt_moon: 'Default Mt. Moon',
        digletts_cave: 'Default Diglett\'s Cave',
        rock_tunnel: 'Default Rock Tunnel',
        lavender_tower: 'Default Lavender Tower',
        pokémon_mansion: 'Default Pokémon Mansion',
        seafoam_islands: 'Default Seafoam Islands',
        power_plant: 'Default Power Plant',
        victory_road: 'Default Victory Road',
        cerulean_cave: 'Default Cerulean Cave',
        air: 'Default Air',
        evolution: 'Default Evolution',
    }];
    localStorage.setItem('tableData', JSON.stringify(defaultData))
    parsedData = defaultData;
} else {
    try{
        parsedData = JSON.parse(localStorage.getItem('tableData'));
        if (!Array.isArray(parsedData)){
            console.error("Retrieved data is not an array:", parsedData);
            parsedData = [];
        } else {
            // build table with parsed data
            rebuildTable(parsedData);
        }

    } catch (error){
        console.error("Error parsing retrieved data:", error)
    }
}

function create_function(){
    const newRowData = {};
    inputs.forEach(
        function (node, index){
            newRowData['route_ + {index + 1}'] = node.value;
            node.value = ''; 
        }
    )
    parsedData.push(newRowData);
    localStorage.setItem('tableData', JSON.stringify(parsedData));
    rebuildTable(parsedData);
    add_delete_events();
    var pokemon_rows = document.getElementsByClassName("pokemon_row");
    for (var i = 0; i < pokemon_rows.length; i++) {
        pokemon_rows[i].addEventListener("click", set_inputs);
    }
    console.log(newRowData)
}

function add_delete_events(){
    var elements = document.getElementsByClassName("delete_btn");
    for(var i = 0; i < elements.length; i++){
        elements[i].addEventListener("click", removeItem);
    }
}

function removeItem(){
    const rowIndex = this.parentNode.rowIndex;
    table.deleteRow(rowIndex);
    parsedData.splice(rowIndex - 1, 1);
    localStorage.setItem('tableData', JSON.stringify(parsedData))
}

function set_inputs(){
    var tds = this.cells;
    for (var i = 0; i< tds.length - 1; i++){
        tds[i].innerHTML = "<input type='text' value='" + tds[i].textContent + "'>";
    }
    this.cells[tds.length - 1].innerHTML = "<button class='delete_btn'>delete</button>";
    this.removeEventListener("click", set_inputs);
    add_delete_events();
}

function readTable(){
    const table = document.getElementById('pokemon').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');
    const data = [];
    for (let i = 1; i < rows.length; i++){
        const cells = rows[i].getElementsByTagName('td');
        const rowData = {
            Pokemon: cells[0].textContent,
            route_1: cells[1].textContent,
            route_2: cells[2].textContent,
            route_3: cells[3].textContent,
            route_4: cells[4].textContent,
            route_5: cells[5].textContent,
            route_6: cells[6].textContent,
            route_7: cells[7].textContent,
            route_8: cells[8].textContent,
            route_9: cells[9].textContent,
            route_10: cells[10].textContent,
            route_11: cells[11].textContent,
            route_12: cells[12].textContent,
            route_13: cells[13].textContent,
            route_14: cells[14].textContent,
            route_15: cells[15].textContent,
            route_16: cells[16].textContent,
            route_17: cells[17].textContent,
            route_18: cells[18].textContent,
            route_19: cells[19].textContent,
            route_20: cells[20].textContent,
            route_21: cells[21].textContent,
            route_22: cells[22].textContent,
            route_23: cells[23].textContent,
            route_24: cells[24].textContent,
            route_25: cells[25].textContent,
            viridian_forest: cells[26].textContent,
            mt_moon: cells[27].textContent,
            digletts_cave: cells[28].textContent,
            rock_tunnel: cells[29].textContent,
            lavender_tower: cells[30].textContent,
            pokémon_mansion: cells[31].textContent,
            seafoam_islands: cells[32].textContent,
            power_plant: cells[33].textContent,
            victory_road: cells[34].textContent,
            cerulean_cave: cells[35].textContent,
            air: cells[36].textContent,
            evolution: cells[37].textContent
        };
        
        data.push(rowData)
    }
    return data
}


//const data = readTable();




function rebuildTable(data){
    const tableBody = table.querySelector("tbody");
//    tableBody.innerHTML = '';
    data.forEach(
        function(row){
            const newRow = tableBody.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            const cell5 = newRow.insertCell(4);
            const cell6 = newRow.insertCell(5);
            const cell7 = newRow.insertCell(6);
            const cell8 = newRow.insertCell(7);
            const cell9 = newRow.insertCell(8);
            const cell10 = newRow.insertCell(9);
            const cell11 = newRow.insertCell(10);
            const cell12 = newRow.insertCell(11);
            const cell13 = newRow.insertCell(12);
            const cell14 = newRow.insertCell(13);
            const cell15 = newRow.insertCell(14);
            const cell16 = newRow.insertCell(15);
            const cell17 = newRow.insertCell(16);
            const cell18 = newRow.insertCell(17);
            const cell19 = newRow.insertCell(18);
            const cell20 = newRow.insertCell(19);
            const cell21 = newRow.insertCell(20);
            const cell22 = newRow.insertCell(21);
            const cell23 = newRow.insertCell(22);
            const cell24 = newRow.insertCell(23);
            const cell25 = newRow.insertCell(24);
            const cell26 = newRow.insertCell(25);
            const cell27 = newRow.insertCell(26);
            const cell28 = newRow.insertCell(27);
            const cell29 = newRow.insertCell(28);
            const cell30 = newRow.insertCell(29);
            const cell31 = newRow.insertCell(30);
            const cell32 = newRow.insertCell(31);
            const cell33 = newRow.insertCell(32);
            const cell34 = newRow.insertCell(33);
            const cell35 = newRow.insertCell(34);
            const cell36 = newRow.insertCell(35);
            const cell37 = newRow.insertCell(36);
            const cell38 = newRow.insertCell(37);
            cell1.textContent = row.Pokémon;
            cell2.textContent = row.route_1;
            cell3.textContent = row.route_2;
            cell4.textContent = row.route_3;
            cell5.textContent = row.route_4;
            cell6.textContent = row.route_4;
            cell7.textContent = row.route_5;
            cell8.textContent = row.route_6;
            cell9.textContent = row.route_7;
            cell10.textContent = row.route_8;
            cell11.textContent = row.route_9;
            cell12.textContent = row.route_10;
            cell13.textContent = row.route_11;
            cell14.textContent = row.route_12;
            cell15.textContent = row.route_13;
            cell16.textContent = row.route_14;
            cell17.textContent = row.route_15;
            cell18.textContent = row.route_16;
            cell19.textContent = row.route_17;
            cell20.textContent = row.route_18;
            cell21.textContent = row.route_19;
            cell22.textContent = row.route_20;
            cell23.textContent = row.route_21;
            cell24.textContent = row.route_22;
            cell25.textContent = row.route_24;
            cell26.textContent = row.route_25;
            cell27.textContent = row.viridian_forest;
            cell28.textContent = row.mt_moon;
            cell29.textContent = row.digletts_cave;
            cell30.textContent = row.rock_tunnel;
            cell31.textContent = row.lavender_tower;
            cell32.textContent = row.pokémon_mansion;
            cell33.textContent = row.seafoam_islands;
            cell34.textContent = row.power_plant;
            cell35.textContent = row.victory_road;
            cell36.textContent = row.cerulean_cave;
            cell37.textContent = row.air;
            cell38.textContent = row.evolution;
        }
    );
    add_delete_events();
}



function save(){
    localStorage.setItem('tableData', JSON.stringify(parsedData))
    console.log('Saved!')
}

console.log(parsedData)
//rebuildTable(parsedData);

create_button.addEventListener("click", create_function);
save_button.addEventListener('click', save)