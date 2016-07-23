//RPG characters initial stats
var obiWanKenobi = {
	name: "Obi Wan Kenobi",
	image: "",
	hp: 120,
	baseAP: 7,
	ap: "",
	cap: 30
}

var lukeSkywalker = {
	name: "Luke Skywalker",
	image: "",
	hp: 100,
	baseAP: 5,
	ap: "",
	cap: 17
}

var darthSidious = {
	name: "Darth Sidious",
	image: "",
	hp: 130,
	baseAP: 8,
	ap: "",
	cap: 33
}

var darthMaul = {
	name: "Darth Maul",
	image: "",
	hp: 125,
	baseAP: 6,
	ap: "",
	cap: 26
}

//Game variables to store information
var availableCharacters = ["#obiWanKenobi","#lukeSkywalker","#darthSidious","#darthMaul"]
var remainingHP = "";
var playerCharacter = "";
var enemyCharacter = [];
var playerHPRemaining = "";
var enemyHPRemaining = "";
var enemyAP = "";


//Game beginning by selecting a character
$(document).ready(function(){
	$("#availableCharacters").click(function(){
		
	});
});
