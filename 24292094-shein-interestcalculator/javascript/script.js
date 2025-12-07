
// Yannaung Shein
// 24292094





const container = document.getElementById("container");
const table= document.createElement("table");

const rows= [
    ["Principal:" ,"<input type='number' id='p' >"],
    ["Rate:","<input type='number' id='r'>"],
    ["Time:","<input type='number' id='t'>"],
    ["Simple Interest:","<input type='number' id='interest' >"],
    ["Principal plus Interest:","<input type='number' id='plus' >,"],
    ["<button onclick='calinterest()'> Calculate </button>"]
]

for (var i = 0; i < rows.length; i++) {
    const row = document.createElement("tr");
    for (var j = 0; j < rows[i].length; j++) {
        const colum = document.createElement("td");
         colum.innerHTML = rows[i][j];
        row.appendChild(colum);
     }
    table.appendChild(row);
}
container.appendChild(table);
        
        function calinterest() {
            let principal = Number(document.getElementById("p").value);

            let rate= Number(document.getElementById("r").value);
            let time= Number(document.getElementById("t").value)

            
            let simple= Number((principal*rate*time)/100);

            let total = Number(principal+simple);


            document.getElementById("interest").value = simple;
            document.getElementById("plus").value = total.toFixed(2);
            
        }
        
