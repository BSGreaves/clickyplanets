var button = document.getElementById("planetButton");
var outputDiv = document.getElementById("outputDiv");
var planetBoxes = document.getElementsByClassName("planetBox");

var planets = [{
    name: "Mercury",
    url: "https://www.nasa.gov/sites/default/files/mercury_1.jpg"
}, {
    name: "Venus",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg"
}, {
    name: "Earth",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
}, {
    name: "Mars",
    url: "http://mars.jpl.nasa.gov/images/mars-globe-valles-marineris-enhanced.jpg"
}, {
    name: "Jupiter",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg"
}, {
    name: "Saturn",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Saturn_Storm.jpg"
}, {
    name: "Uranus",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg"
}, {
    name: "Neptune",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg"
}];

document.body.addEventListener("click", function(event){
	console.log("event");
	if (event.target.className === "planetBox") {
	console.log("Clicked a planet");
	}
});

button.addEventListener("click", function(e) {
	outputDiv.innerHTML = ""
    for (let i = 0; i < planets.length; i++) {
    	let currOutput = "";
    	currOutput += `<div class="planetBox", id="planetBox-${i}">`;
        currOutput += `<div class="planetName hidden"> ${planets[i].name} </div>`;
        currOutput += `<img class="planetImg" src="${planets[i].url}">`;
        currOutput += `</div>`;
        outputDiv.innerHTML += currOutput;
    }
    console.log(e);
});

// document.body.addEventListener("click", function(event){
// 	if (event.target.ClassName === "planetBox") {
// 		console.log("Clicked a planet");
// 	}
// });

// function addEventListeners() {
// 		var planetBoxes = document.getElementsByClassName("planetBox");
// 		for (i = 0; i < planetBoxes.length; i++) {
// 		planetBoxes[i].addEventListener("mouseenter", function(){
// 			document.
// 		})
// 		planetBoxes[i].addEventListener("mouseleave", function(){

// 		})
// 	};
// }