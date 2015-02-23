/*游戏交互逻辑*/
var timerun = 0;
var t;//clock
var score = 0;
$(document).keydown(function(event){
	switch(event.keyCode){
	case 74://J
		if(score == 0 && board[3][0] == 1){
			timeRun();
			//run clock
			moveDown();
		}else if(board[3][0] == 1 && score > 0){
			//tap right
			moveDown();
		}else{
			isgameover()
		}
		break;
	case 75:
		if(score == 0 && board[3][1] == 1){
			timeRun();//run clock
			moveDown();
		}else if(board[3][1] == 1 && score > 0){
			//tap right
			moveDown();
		}else{
			isgameover()
		}
		break;
	case 76:
		if(score == 0 && board[3][2] == 1){
			timeRun();//run clock
			moveDown();
		}else if(board[3][2] == 1 && score > 0){
			//tap right
			moveDown();
		}else{
			isgameover()
		}
		break;
	}
})

function moveDown(){
	$("#block_3_0").text("");
	$("#block_3_1").text("");
	$("#block_3_2").text("");
	for(i = 3; i >= 0; i--){
		for(j = 2; j>= 0; j--){
			if(i == 3&&board[i][j] == 1){
				board[i][j] = 0;
				$("#block_"+i+"_"+j).css("background-color","#fff");//delete last line
			}else if(board[i][j] == 1){
				board[i][j] = 0;
				board[i+1][j]=1;
				$("#block_"+i+"_"+j).css("background-color","#fff");
				$("#block_"+(i+1)+"_"+j).css("background-color","#000");//movedown the black block
			}

		}
	score += 1;
	}

	var randRow = parseInt(Math.floor(Math.random()*3));
	$("#block_"+0+"_"+randRow).css("background-color","#000");//produce new black block on the first line
	board[0][randRow] = 1;
}

//clock
function timeRun(){
	timerun += 0.01;
	$("span").text(timerun.toString().substr(0,4));
	t = setTimeout("timeRun()",1);

}

function isgameover(){
	clearTimeout(t);
	$("#grid_container").append("<div id='gameover' class='gameover'><p>本次得分</p><span>"+timerun.toString().substr(0,5)+"秒/"+score+"分</span><a href='javascript:restart()' id='reButton'>Restart</a></div>")
	timerun = 0;
}	

function restart(){
	clearTimeout(t);
	$("#gameover").remove();
	$("#time_box").html("<span>0.000</span>秒");
	$(".block").remove();
	score = 0;
	init();
}