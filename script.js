var table = document.querySelector("#pokémon")
var pokémon_input = document.querySelector("#poke")
var route_1_input = document.querySelector("#r1")
var route_2_input = document.querySelector("#r2")
var route_3_input = document.querySelector("#r3")
var route_4_input = document.querySelector("#r4")
var route_5_input = document.querySelector("#r5")
var route_6_input = document.querySelector("#r6")
var route_7_input = document.querySelector("#r7")
var route_8_input = document.querySelector("#r8")
var route_9_input = document.querySelector("#r9")
var route_10_input = document.querySelector("#r10")
var route_11_input = document.querySelector("#r11")
var route_12_input = document.querySelector("#r12")
var route_13_input = document.querySelector("#r13")
var route_14_input = document.querySelector("#r14")
var route_15_input = document.querySelector("#r15")
var route_16_input = document.querySelector("#r16")
var route_17_input = document.querySelector("#r17")
var route_18_input = document.querySelector("#r18")
var route_19_input = document.querySelector("#r19")
var route_20_input = document.querySelector("#r20")
var route_21_input = document.querySelector("#r21")
var route_22_input = document.querySelector("#r22")
var route_23_input = document.querySelector("#r23")
var route_24_input = document.querySelector("#r24")
var route_25_input = document.querySelector("#r25")
var viridian_forest_input = document.querySelector("#vf")
var mtmoon_input = document.querySelector("#mm")
var digletts_cave_input = document.querySelector("#dc")
var rock_tunnel_input = document.querySelector("#rt")
var lavender_tower_input = document.querySelector("#lt")
var pokémon_mansion_input = document.querySelector("#pm")
var seafoam_islands_input = document.querySelector("#si")
var power_plant_input = document.querySelector("#pp")
var victory_road_input = document.querySelector("#vr")
var cerulean_cave_input = document.querySelector("#cc")
var air_input = document.querySelector("#air")
var evolution_input = document.querySelector("#evo")
var save_button = document.querySelector("#save")



function save_function(){
    table.innerHTML += "<tr><td>"+ 
    route_1_input.value +"</td><td>"+ 
    route_2_input.value +"</td><td>"+ 
    route_3_input.value +"</td><td>"+ 
    route_4_input.value +"</td><td>"+ 
    route_5_input.value +"</td><td>"+ 
    route_6_input.value +"</td><td>"+
    route_7_input.value +"</td><td>"+ 
    route_8_input.value +"</td><td>"+ 
    route_9_input.value +"</td><td>"+ 
    route_10_input.value +"</td><td>"+ 
    route_11_input.value +"</td><td>"+ 
    route_12_input.value +"</td><td>"+ 
    route_13_input.value +"</td><td>"+ 
    route_14_input.value +"</td><td>"+ 
    route_15_input.value +"</td><td>"+ 
    route_16_input.value +"</td><td>"+ 
    route_17_input.value +"</td><td>"+ 
    route_18_input.value +"</td><td>"+ 
    route_19_input.value +"</td><td>"+ 
    route_20_input.value +"</td><td>"+ 
    route_21_input.value +"</td><td>"+ 
    route_22_input.value +"</td><td>"+ 
    route_23_input.value +"</td><td>"+ 
    route_24_input.value +"</td><td>"+ 
    route_25_input.value +"</td><td>"+ 
    viridian_forest_input.value +"</td><td>"+ 
    mtmoon_input.value +"</td><td>"+ 
    digletts_cave_input.value +"</td><td>"+ 
    rock_tunnel_input.value +"</td><td>"+ 
    lavender_tower_input.value +"</td><td>"+ 
    pokémon_mansion_input.value +"</td><td>"+ 
    seafoam_islands_input.value +"</td><td>"+ 
    power_plant_input.value +"</td><td>"+ 
    victory_road_input.value +"</td><td>"+ 
    cerulean_cave_input.value +"</td><td>"+ 
    air_input.value +"</td><td>"+ 
    evolution_input.value +"</td></tr>"

}






save_button.addEventListener("click", save_function)