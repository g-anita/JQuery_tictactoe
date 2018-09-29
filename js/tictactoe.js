var turn = true,
	win = false;

init();

$('button').click(function(){
	init();
});

function init(){
	$('td').empty();
	play();
	turn = true;
	win = false;
	$("#winMsg").text("");
}

function play(){
	$('td').click(function(){
	$(this).off();
	if (turn){
		$(this).html("X");
		turn = false;
	} else {
		$(this).html("O");
		turn = true;
	}
	checkWin();
	wonGame();
	});
};

function checkWin(){
	if (
		($("#sqr1").text() === $("#sqr2").text() && $("#sqr1").text() === $("#sqr3").text() && $("#sqr1").text() !== "" ) ||
		($("#sqr4").text() === $("#sqr5").text() && $("#sqr4").text() === $("#sqr6").text() && $("#sqr4").text() !== "" ) ||
		($("#sqr7").text() === $("#sqr8").text() && $("#sqr7").text() === $("#sqr9").text() && $("#sqr7").text() !== "" ) ||
		($("#sqr1").text() === $("#sqr4").text() && $("#sqr1").text() === $("#sqr7").text() && $("#sqr1").text() !== "" ) ||
		($("#sqr2").text() === $("#sqr5").text() && $("#sqr2").text() === $("#sqr8").text() && $("#sqr2").text() !== "" ) ||
		($("#sqr3").text() === $("#sqr6").text() && $("#sqr3").text() === $("#sqr9").text() && $("#sqr3").text() !== "" ) ||
		($("#sqr1").text() === $("#sqr5").text() && $("#sqr1").text() === $("#sqr9").text() && $("#sqr1").text() !== "" ) ||
		($("#sqr3").text() === $("#sqr5").text() && $("#sqr3").text() === $("#sqr7").text() && $("#sqr3").text() !== "" )	
	){
	win = true
	} 
}; 

function wonGame(){
	if (win){
		$("td").off();
		$("#winMsg").text("Game Over");
	} 
};