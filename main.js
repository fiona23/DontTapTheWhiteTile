/**/

//
var board = new Array();

$(function(){
	//initial game
	init();


})

function init () {
	
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 3; j++){
			board[i] = new Array(j)
			// white block layout
			var grid = $("#grid"+"_"+i+"_"+j);
			grid.css("top",getPosTop(i,j));
			grid.css("left",getPosLeft(i,j));
			// black block layout
			$("#grid_container").append($("<div class='block' id='block_"+i+"_"+j+"'></div>"));
			var block = $("#block_"+i+"_"+j);
			block.css("top",getPosTop(i,j));
			block.css("left",getPosLeft(i,j));
			board[i][j] = 0;
		}
	}
	

	//produce black block random
	for(var i = 0; i < 4; i++){
		var randRow = parseInt(Math.floor(Math.random()*3));
		if (i > 0 && board[i-1][randRow] == 1)//降低连续出现黑块在一行的概率
		{randRow = parseInt(Math.floor(Math.random()*3));}
		var block = $("#block_"+i+"_"+randRow);
		block.css("background-color","#000");
		board[i][randRow] = 1;

	}
		$("#block_3_0").text("按J开始");
		$("#block_3_1").text("按K开始");
		$("#block_3_2").text("按L开始");
}

function getPosTop (i,j) {
	return i*100;
}

function getPosLeft (i,j) {
	return j*100;
}