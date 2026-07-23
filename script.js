const grades=["A+","A","A-","B+","B","B-","C+","C","C-","D+","D","E"];

document.querySelectorAll("select").forEach(select=>{

grades.forEach(g=>{

let option=document.createElement("option");
option.text=g;
option.value=g;

select.appendChild(option);

});

});

const credits={
maths:3,
fluid:2,
english:2,
program:3,
electrical:3,
workshop:2,
drawing:3
};

const points={
"A+":4.0,
"A":4.0,
"A-":3.7,
"B+":3.3,
"B":3.0,
"B-":2.7,
"C+":2.3,
"C":2.0,
"C-":1.7,
"D+":1.3,
"D":1.0,
"E":0
};

function calculate(){

let totalPoints=0;
let totalCredits=0;

for(let subject in credits){

let grade=document.getElementById(subject).value;

totalPoints+=credits[subject]*points[grade];

totalCredits+=credits[subject];

}

let gpa=(totalPoints/totalCredits).toFixed(2);

let standing="";

if(gpa>=3.70)
standing="🏆 First Class";

else if(gpa>=3.30)
standing="🥈 Second Upper";

else if(gpa>=3.00)
standing="🥉 Second Lower";

else if(gpa>=2.00)
standing="✅ Pass";

else
standing="❌ Repeat";

document.getElementById("result").innerHTML=`

<h2>${document.getElementById("name").value}</h2>

<h3>${document.getElementById("reg").value}</h3>

<div id="gpa">${gpa}</div>

<div class="status">${standing}</div>

`;

return gpa;

}

function saveRecord(){

let gpa=calculate();

let student={

name:document.getElementById("name").value,

reg:document.getElementById("reg").value,

gpa:gpa,

date:new Date().toLocaleDateString()

};

let records=JSON.parse(localStorage.getItem("students"))||[];

records.push(student);

localStorage.setItem("students",JSON.stringify(records));

alert("Record Saved Successfully.");

}