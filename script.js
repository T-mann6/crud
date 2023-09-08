var table = document.querySelector("#pokémon");
var inputs = document.querySelectorAll("input[type = 'text']");
var save_button = document.querySelector("#save");
var pokémon_rows = document.getElementsByClassName("pokémon_row")

function save_function(){
    tr = "<tr class='pokémon_row'>";
    inputs.forEach(
        function(node, index){
            tr += "<td>" + node.value + "</td>" ;       
        }
    )
    tr += "<td class='delete_btn'>delete</td>";
    tr += "</tr>";
    table.innerHTML += tr;
    add_delete_events()


    var pokémon_rows = document.getElementsByClassName("pokémon_row");
    for (var i = 0; i < pokémon_rows.length; i++){
        pokémon_rows[i].addEventListener("click", set_inputs);
    }
}

function add_delete_events(){
    var elements = document.getElementsByClassName("delete_btn");
    for(var i = 0; i < elements.length; i++){
        elements[i].addEventListener("click", removeItem);
    }
}

function removeItem(){
    this.parentNode.remove();
}

function set_inputs(){
    var tds = this.childNodes
    tds.forEach(
        function(node, index){
            node.innerHTML = "<input type='text' value='" + node.innerHTML + "'>"
        }
    )
}

function readTable(){
    const table = document.getElementById('pokémon').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');
    const data = [];

    for (let i = 0; i < rows.length; i++){
        const cells = rows[i].getElementsByTagName('td');
        const rowData = {};
        rowData.Pokémon = cells[0].textContent;
        rowData.route_1 = cells[1].textContent;
        rowData.route_2 = cells[2].textContent;
        rowData.route_3 = cells[3].textContent;
        rowData.route_4 = cells[4].textContent;
        rowData.route_5 = cells[5].textContent;
        rowData.route_6 = cells[6].textContent;
        rowData.route_7 = cells[7].textContent;
        rowData.route_8 = cells[8].textContent;
        rowData.route_9 = cells[9].textContent;
        rowData.route_10 = cells[10].textContent;
        rowData.route_11 = cells[11].textContent;
        rowData.route_12 = cells[12].textContent;
        rowData.route_13 = cells[13].textContent;
        rowData.route_14 = cells[14].textContent;
        rowData.route_15 = cells[15].textContent;
        rowData.route_16 = cells[16].textContent;
        rowData.route_17 = cells[17].textContent;
        rowData.route_18 = cells[18].textContent;
        rowData.route_19 = cells[19].textContent;
        rowData.route_20 = cells[20].textContent;
        rowData.route_21 = cells[21].textContent;
        rowData.route_22 = cells[22].textContent;
        rowData.route_23 = cells[23].textContent;
        rowData.route_24 = cells[24].textContent;
        rowData.route_25 = cells[25].textContent;
        rowData.viridian_forest = cells[26].textContent;
        rowData.mt_moon = cells[27].textContent;
        rowData.digletts_cave = cells[28].textContent;
        rowData.rock_tunnel = cells[29].textContent;
        rowData.lavender_tower = cells[30].textContent;
        rowData.pokémon_mansion = cells[31].textContent;
        rowData.seafoam_islands = cells[32].textContent;
        rowData.power_plant = cells[33].textContent;
        rowData.victory_road = cells[34].textContent;
        rowData.cerulean_cave = cells[35].textContent;
        rowData.air = cells[36].textContent;
        rowData.evolution = cells[37].textContent;
        data.push(rowData);
    }
    return data
}

const tableData = readTable();
localStorage.setItem('tableData', JSON.stringify(tableData));



const retrievedData = localStorage.getItem('tableData');

function rebuildTable(data){
    const table = document.getElementById('pokémon').getElementsByTagName('tbody')[0];
    table.innerHTML = '';

    data.forEach(
        (row)=>{
            const newRow = table.insertRow();
            const cell0 = newRow.insertCell(0);
            const cell1 = newRow.insertCell(1);
            const cell2 = newRow.insertCell(2);
            const cell3 = newRow.insertCell(3);
            const cell4 = newRow.insertCell(4);
            const cell5 = newRow.insertCell(5);
            const cell6 = newRow.insertCell(6);
            const cell7 = newRow.insertCell(7);
            const cell8 = newRow.insertCell(8);
            const cell9 = newRow.insertCell(9);
            const cell10 = newRow.insertCell(10);
            const cell11 = newRow.insertCell(11);
            const cell12 = newRow.insertCell(12);
            const cell13 = newRow.insertCell(13);
            const cell14 = newRow.insertCell(14);
            const cell15 = newRow.insertCell(15);
            const cell16 = newRow.insertCell(16);
            const cell17 = newRow.insertCell(17);
            const cell18 = newRow.insertCell(18);
            const cell19 = newRow.insertCell(19);
            const cell20 = newRow.insertCell(20);
            const cell21 = newRow.insertCell(21);
            const cell22 = newRow.insertCell(22);
            const cell23 = newRow.insertCell(23);
            const cell24 = newRow.insertCell(24);
            const cell25 = newRow.insertCell(25);
            const cell26 = newRow.insertCell(26);
            const cell27 = newRow.insertCell(27);
            const cell28 = newRow.insertCell(28);
            const cell29 = newRow.insertCell(29);
            const cell30 = newRow.insertCell(30);
            const cell31 = newRow.insertCell(31);
            const cell32 = newRow.insertCell(32);
            const cell33 = newRow.insertCell(33);
            const cell34 = newRow.insertCell(34);
            const cell35 = newRow.insertCell(35);
            const cell36 = newRow.insertCell(36);
            const cell37 = newRow.insertCell(37);
            cell0.textContent = row.Pokémon;
            cell1.textContent = row.route_1;
            cell2.textContent = row.route_2;
            cell3.textContent = row.route_3;
            cell4.textContent = row.route_4;
            cell5.textContent = row.route_4;
            cell6.textContent = row.route_5;
            cell7.textContent = row.route_6;
            cell8.textContent = row.route_7;
            cell9.textContent = row.route_8;
            cell10.textContent = row.route_9;
            cell11.textContent = row.route_10;
            cell12.textContent = row.route_11;
            cell13.textContent = row.route_12;
            cell14.textContent = row.route_13;
            cell15.textContent = row.route_14;
            cell16.textContent = row.route_15;
            cell17.textContent = row.route_16;
            cell18.textContent = row.route_17;
            cell19.textContent = row.route_18;
            cell20.textContent = row.route_19;
            cell21.textContent = row.route_20;
            cell22.textContent = row.route_21;
            cell23.textContent = row.route_22;
            cell24.textContent = row.route_24;
            cell25.textContent = row.route_25;
            cell26.textContent = row.viridian_forest;
            cell27.textContent = row.mt_moon;
            cell28.textContent = row.digletts_cave;
            cell29.textContent = row.rock_tunnel;
            cell30.textContent = row.lavender_tower;
            cell31.textContent = row.pokémon_mansion;
            cell32.textContent = row.seafoam_islands;
            cell33.textContent = row.power_plant;
            cell34.textContent = row.victory_road;
            cell35.textContent = row.cerulean_cave;
            cell36.textContent = row.air;
            cell37.textContent = row.evolution;
        }
    )
}

rebuildTable(JSON.parse(retrievedData));

save_button.addEventListener("click", save_function);