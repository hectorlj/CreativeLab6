$(document).ready(function(){

var pokemon_name = [150, 10, 25, 9, 123, 95, 38, 39, 89, 67];
var numbers = [0,1,2,3,4,5,6,7,8,9,10];
var pokemon_name_two = [pokemon_name[Math.floor(Math.random()*10)], pokemon_name[Math.floor(Math.random()*10)]];
var pokemon = [];
var pokemon_left_hp = 0;
var pokemon_right_hp = 0;
var url = "http://pokeapi.co/api/v2/pokemon/" + pokemon_name_two[0]+ "/";
var url_pic = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +pokemon_name_two[0]+".png";
$.getJSON(url, function(data){
		document.getElementById("left-pokemon").innerHTML = data.forms[0].name;
		document.getElementById("left-health").innerHTML = data.stats[4].base_stat
		pokemon_left_hp = data.stats[4].base_stat;
		document.getElementById("left-pic").src = url_pic;
		document.getElementById("first-left-attack").innerHTML = data.moves[0].move.name;
		document.getElementById("second-left-attack").innerHTML = data.moves[1].move.name;
});

var url_2 = "http://pokeapi.co/api/v2/pokemon/" + pokemon_name_two[1]+ "/";
url_pic_2 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +pokemon_name_two[1]+".png";
$.getJSON(url_2, function(data){
		document.getElementById("right-pokemon").innerHTML = data.forms[0].name;
		document.getElementById("right-health").innerHTML = data.stats[4].base_stat;
		pokemon_right_hp = data.stats[4].base_stat;
		document.getElementById("right-pic").src = url_pic_2;
		document.getElementById("first-right-attack").innerHTML = data.moves[0].move.name;
		document.getElementById("second-right-attack").innerHTML = data.moves[1].move.name;
});



})

var turn = 0;

function attack1_left(){
	if(turn > 1){
		turn = 0;
		return;
	}
	turn++;
	var damage = Math.floor(Math.random()*13)+8;
	var pokemon_right_hp = parseInt(document.getElementById("right-health").innerHTML,10);
	console.log(document.getElementById("right-health").innerHTML);
	console.log(pokemon_right_hp);
	pokemon_right_hp = pokemon_right_hp - damage;
	if(pokemon_right_hp < 1)
	{
		document.getElementById("right-health").innerHTML = 0;
		var buttondiv = document.getElementById("next_battle");
		var winnerh = document.getElementById("winner_left");
		winnerh.style.display = 'block';	
		winnerh = document.getElementById("loser_right");
		winnerh.style.display = 'block';	
		buttondiv.style.display = 'block';
		return;
	}
	document.getElementById("right-health").innerHTML = pokemon_right_hp;
	console.log(damage);
	attack1_right();
}
function attack2_left(){
	if(turn > 1){
		turn = 0;
		return;
	}
	turn++;
	var damage = Math.floor(Math.random()*13)+5;
	var pokemon_right_hp = parseInt(document.getElementById("right-health").innerHTML,10);
	console.log(document.getElementById("right-health").innerHTML);
	console.log(pokemon_right_hp);
	pokemon_right_hp = pokemon_right_hp - damage;
	if(pokemon_right_hp < 1)
	{
		document.getElementById("right-health").innerHTML = 0;
		var buttondiv = document.getElementById("next_battle");
		var winnerh = document.getElementById("winner_left");
		winnerh.style.display = 'block';	
		winnerh = document.getElementById("loser_right");
		winnerh.style.display = 'block';
		buttondiv.style.display = 'block';
		return;
	}
	document.getElementById("right-health").innerHTML = pokemon_right_hp;
	console.log(damage);
	attack2_right();
}
function attack1_right(){
	if(turn > 1){
		turn = 0;
		return;
	}
	turn++;
	var damage = Math.floor(Math.random()*13)+8;
	var pokemon_left_hp = parseInt(document.getElementById("left-health").innerHTML,10);
	console.log(document.getElementById("left-health").innerHTML);
	console.log(pokemon_left_hp);
	pokemon_left_hp = pokemon_left_hp - damage;
	if(pokemon_left_hp < 1)
	{
		document.getElementById("left-health").innerHTML = 0;
		var buttondiv = document.getElementById("next_battle");
		var winnerh = document.getElementById("winner_right");
		winnerh.style.display = 'block';
		winnerh = document.getElementById("loser_left");
		winnerh.style.display = 'block';
		buttondiv.style.display = 'block';
		return;
	}
	document.getElementById("left-health").innerHTML = pokemon_left_hp;
	console.log(damage);
	attack1_left();
}
function attack2_right(){
	if(turn > 1){
		turn = 0;
		return;
	}
	turn++;
	var damage = Math.floor(Math.random()*13)+5;
	var pokemon_left_hp = parseInt(document.getElementById("left-health").innerHTML,10);
	console.log(document.getElementById("left-health").innerHTML);
	console.log(pokemon_left_hp);
	pokemon_left_hp = pokemon_left_hp - damage;
	if(pokemon_left_hp < 1)
	{
		document.getElementById("left-health").innerHTML = 0;
		var buttondiv = document.getElementById("next_battle");
		var winnerh = document.getElementById("winner_right");
		winnerh.style.display = 'block';
		winnerh = document.getElementById("loser_left");
		winnerh.style.display = 'block';
		buttondiv.style.display = 'block';
		return;
	}
	document.getElementById("left-health").innerHTML = pokemon_left_hp;
	console.log(damage);
	attack2_left();
}
function next_battle(){
	window.location.reload();
}