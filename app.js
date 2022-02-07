const radiologia =[ {
    hora: "11:00",
    Especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut:"9878782-1",
    prevision: "FONASA",
}, 
{ 
    hora: "11:30",
    Especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut:"15345241-3",
    prevision: "ISAPRE",

},
{
    hora: "15:00",
    Especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut:"16445345-9",
    prevision: "ISAPRE",
}, 
{
    hora: "15:30",
    Especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut:"17666419-0",
    prevision: "FONASA",
},
{
    hora: "16:00",
    Especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut:"14989389-K",
    prevision: "FONASA",
},
];

const traumatologia =[ {
    hora: "8:00",
    Especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut:"15554774-5",
    prevision: "FONASA",
}, 
{ 
    hora: "10:00",
    Especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut:"15444147-9",
    prevision: "ISAPRE",

},
{
    hora: "10:30",
    Especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut:"17879423-9",
    prevision: "ISAPRE",
}, 
{
    hora: "11:00",
    Especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut:"1547423-6",
    prevision: "ISAPRE",
},
{
    hora: "11:30",
    Especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut:"16554741-K",
    prevision: "FONASA",
},
{
    hora: "12:00",
    Especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut:"9747535-8",
    prevision: "ISAPRE",
},
{
    hora: "12:30",
    Especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut:"11254785-5",
    prevision: "ISAPRE",
},
];

const dental =[ {
    hora: "8:30",
    Especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut:"11123425-6",
    prevision: "ISAPRE",
}, 
{ 
    hora: "11:00",
    Especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut:"9878789-2",
    prevision: "ISAPRE",

},
{
    hora: "11:30",
    Especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut:"7998789-5",
    prevision: "FONASA",
}, 
{
    hora: "13:00",
    Especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut:"18887662-K",
    prevision: "FONASA",
},
{
    hora: "13:30",
    Especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut:"17665461-4",
    prevision: "FONASA",
},
{
    hora: "14:00",
    Especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut:"14441281-0",
    prevision: "ISAPRE",
},
];
const btnradiologia = document.getElementById("btnradiologia")
const btndental = document.getElementById("btndental")
const btntraumatologia = document.getElementById("btntraumatologia")
const btnlimpiar = document.getElementById("btnlimpiar")

const atenciones = document.getElementById("atenciones")
const resultado = document.getElementById("resultado")


btnlimpiar.addEventListener("click", function() {
    atenciones.innerHTML =""
    resultado.innerHTML =""
    btntraumatologia.style.backgroundColor="rgb(239, 239, 239)"
    btndental.style.backgroundColor="rgb(239, 239, 239)"
    btnradiologia.style.backgroundColor="rgb(239, 239, 239)"

})

btnradiologia.addEventListener("click", function() {
    atenciones.innerHTML =""
    resultado.innerHTML =""
    btntraumatologia.style.backgroundColor="rgb(239, 239, 239)"
    btndental.style.backgroundColor="rgb(239, 239, 239)"
    btnradiologia.style.backgroundColor="green"

    let ultimo = radiologia.length-1
   

    atenciones.innerHTML = `<h2>Primer paciente ${radiologia[0].paciente} - ${radiologia[0].prevision}</h2>
    <h2>Ultimo paciente ${radiologia[ultimo].paciente} - ${radiologia[ultimo].prevision}</h2>`

    radiologia.forEach((item)=>{
    resultado.innerHTML +=`
          <tr>
            <th scope="row">${item.hora}</th>
            <td>${item.Especialista}</td>
            <td>${item.paciente}</td>
            <td>${item.rut}</td>
            <td>${item.prevision}</td>
          </tr>`;
          })
})

btndental.addEventListener("click", function() {
    atenciones.innerHTML =""
    resultado.innerHTML =""
    btntraumatologia.style.backgroundColor="rgb(239, 239, 239)"
    btndental.style.backgroundColor="green"
    btnradiologia.style.backgroundColor="rgb(239, 239, 239)"

    let ultimo = dental.length-1
   

    atenciones.innerHTML = `<h2>Primer paciente ${dental[0].paciente} - ${dental[0].prevision}</h2>
    <h2>Ultimo paciente ${dental[ultimo].paciente} - ${dental[ultimo].prevision}</h2>`

    dental.forEach((item)=>{
    resultado.innerHTML +=`
          <tr>
            <th scope="row">${item.hora}</th>
            <td>${item.Especialista}</td>
            <td>${item.paciente}</td>
            <td>${item.rut}</td>
            <td>${item.prevision}</td>
          </tr>`;
          })
})
btntraumatologia.addEventListener("click", function() {
    atenciones.innerHTML =""
    resultado.innerHTML =""
    btntraumatologia.style.backgroundColor="green"
    btndental.style.backgroundColor="rgb(239, 239, 239)"
    btnradiologia.style.backgroundColor="rgb(239, 239, 239)"

    let ultimo = traumatologia.length-1
   

    atenciones.innerHTML = `<h2>Primer paciente ${traumatologia[0].paciente} - ${traumatologia[0].prevision}</h2>
    <h2>Ultimo paciente ${traumatologia[ultimo].paciente} - ${traumatologia[ultimo].prevision}</h2>`


    traumatologia.forEach((item)=>{
    resultado.innerHTML +=`
          <tr>
            <th scope="row">${item.hora}</th>
            <td>${item.Especialista}</td>
            <td>${item.paciente}</td>
            <td>${item.rut}</td>
            <td>${item.prevision}</td>
          </tr>`;
          })
})





console.log(radiologia[0]);
console.log(radiologia);
console.log(traumatologia[0]);
console.log(dental[0]);
console.log(radiologia.length);
console.log(traumatologia.length);
console.log(dental.length);
