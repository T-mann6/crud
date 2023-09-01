var table = document.querySelector("#pokémon")
var inputs = document.querySelectorAll("input[type = 'text']")
var save_button = document.querySelector("#save")

function save_function(){
    tr = "<tr>"

    inputs.forEach(
        function(node, index){
            tr += "<td>" + node.value + "</td>"
            
        }
    )
    
    tr += "</tr>"
    table.innerHTML +=tr
}

save_button.addEventListener("click", save_function)