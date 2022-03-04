document.onclick = function (event) {
    if (event.target.nodeName === 'BUTTON') {
        gamestart(event.target.id);
    }
}

var tally=0;

function gamestart(id){
	console.log(id);
	
	tally=tally+2
	
	if(tally%1==0){
	document.getElementById(id).innerHTML ="X";
	checkX("X");
	stopbutton("X");	
	setTimeout(player2,500);
	checktie();
	}
}


function checktie(){
	if(document.getElementById(0).innerHTML == "X" || document.getElementById(0).innerHTML == "O"){
		if(document.getElementById(1).innerHTML == "X" || document.getElementById(1).innerHTML == "O"){
			if(document.getElementById(2).innerHTML == "X" || document.getElementById(2).innerHTML == "O"){
				if(document.getElementById(3).innerHTML == "X" || document.getElementById(3).innerHTML == "O"){
					if(document.getElementById(4).innerHTML == "X" || document.getElementById(4).innerHTML == "O"){
						if(document.getElementById(5).innerHTML == "X" || document.getElementById(5).innerHTML == "O"){
							if(document.getElementById(6).innerHTML == "X" || document.getElementById(6).innerHTML == "O"){
								if(document.getElementById(7).innerHTML == "X" || document.getElementById(7).innerHTML == "O"){
									if(document.getElementById(8).innerHTML == "X" || document.getElementById(8).innerHTML == "O"){
									document.getElementById("alertbox").innerHTML = "<h2>DRAW</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
									}
								}
							}
						}
					}
				}
			}
		}
	}
}


function player2(){
	
	function randommove(){
	var randomnumber=Math.floor((Math.random()*9)+0);
	//if x or o is set then call the function
	if(document.getElementById(randomnumber).innerHTML == "X" || document.getElementById(randomnumber).innerHTML == "O"){
		player2();
	}else{
		document.getElementById(randomnumber).innerHTML="O";
		checkO("O");
		stopbutton("O");
		}
	}
	//try to win
	if (document.getElementById(0).innerHTML == "O" && document.getElementById(1).innerHTML == "O" && document.getElementById(2).innerHTML == "") {
		document.getElementById(2).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if (document.getElementById(0).innerHTML == "O" && document.getElementById(2).innerHTML == "O" && document.getElementById(1).innerHTML == "") {
		document.getElementById(1).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(1).innerHTML == "O" && document.getElementById(2).innerHTML == "O" && document.getElementById(0).innerHTML == "") {
		document.getElementById(0).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	
	else if(document.getElementById(3).innerHTML == "O" && document.getElementById(4).innerHTML == "O" && document.getElementById(5).innerHTML == "") {
		document.getElementById(5).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(3).innerHTML == "O" && document.getElementById(5).innerHTML == "O" && document.getElementById(4).innerHTML == "") {
		document.getElementById(4).innerHTML = "O";
	}
	else if(document.getElementById(4).innerHTML == "O" && document.getElementById(5).innerHTML == "O" && document.getElementById(3).innerHTML == "") {
		document.getElementById(3).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	
	else if(document.getElementById(6).innerHTML == "O" && document.getElementById(7).innerHTML == "O" && document.getElementById(8).innerHTML == "") {
		document.getElementById(8).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(6).innerHTML == "O" && document.getElementById(8).innerHTML == "O" && document.getElementById(7).innerHTML == "") {
		document.getElementById(7).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(7).innerHTML == "O" && document.getElementById(8).innerHTML == "O" && document.getElementById(6).innerHTML == "") {
		document.getElementById(6).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	
	else if(document.getElementById(0).innerHTML == "O" && document.getElementById(3).innerHTML == "O" && document.getElementById(6).innerHTML == "") {
		document.getElementById(6).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(0).innerHTML == "O" && document.getElementById(6).innerHTML == "O" && document.getElementById(3).innerHTML == "") {
		document.getElementById(3).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(3).innerHTML == "O" && document.getElementById(6).innerHTML == "O" && document.getElementById(0).innerHTML == "") {
		document.getElementById(0).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	
	else if(document.getElementById(1).innerHTML == "O" && document.getElementById(4).innerHTML == "O" && document.getElementById(7).innerHTML == "") {
		document.getElementById(7).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(1).innerHTML == "O" && document.getElementById(7).innerHTML == "|O|" && document.getElementById(4).innerHTML == "") {
		document.getElementById(4).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(4).innerHTML == "O" && document.getElementById(7).innerHTML == "O" && document.getElementById(1).innerHTML == "") {
		document.getElementById(1).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(2).innerHTML == "O" && document.getElementById(5).innerHTML == "O" && document.getElementById(8).innerHTML == "") {
		document.getElementById(8).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(2).innerHTML == "O" && document.getElementById(8).innerHTML == "O" && document.getElementById(5).innerHTML == "") {
		document.getElementById(5).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(5).innerHTML == "O" && document.getElementById(8).innerHTML == "O" && document.getElementById(2).innerHTML == "") {
		document.getElementById(2).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	
	else if(document.getElementById(0).innerHTML == "O" && document.getElementById(4).innerHTML == "O" && document.getElementById(8).innerHTML == "") {
		document.getElementById(8).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(0).innerHTML == "O" && document.getElementById(8).innerHTML == "O" && document.getElementById(4).innerHTML == "") {
		document.getElementById(4).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(4).innerHTML == "O" && document.getElementById(8).innerHTML == "O" && document.getElementById(0).innerHTML == "") {
		document.getElementById(0).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	
	else if(document.getElementById(2).innerHTML == "O" && document.getElementById(4).innerHTML == "O" && document.getElementById(6).innerHTML == "") {
		document.getElementById(6).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(2).innerHTML == "O" && document.getElementById(6).innerHTML == "O" && document.getElementById(4).innerHTML == "") {
		document.getElementById(4).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(4).innerHTML == "O" && document.getElementById(6).innerHTML == "O" && document.getElementById(2).innerHTML == "") {
		document.getElementById(2).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	
	
	//try to stop
	else if (document.getElementById(0).innerHTML == "X" && document.getElementById(1).innerHTML == "X" && document.getElementById(2).innerHTML == "") {
		document.getElementById(2).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if (document.getElementById(0).innerHTML == "X" && document.getElementById(2).innerHTML == "X" && document.getElementById(1).innerHTML == "") {
		document.getElementById(1).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(1).innerHTML == "X" && document.getElementById(2).innerHTML == "X" && document.getElementById(0).innerHTML == "") {
		document.getElementById(0).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	
	else if(document.getElementById(3).innerHTML == "X" && document.getElementById(4).innerHTML == "X" && document.getElementById(5).innerHTML == "") {
		document.getElementById(5).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(3).innerHTML == "X" && document.getElementById(5).innerHTML == "X" && document.getElementById(4).innerHTML == "") {
		document.getElementById(4).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(4).innerHTML == "X" && document.getElementById(5).innerHTML == "X" && document.getElementById(3).innerHTML == "") {
		document.getElementById(3).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	
	else if(document.getElementById(6).innerHTML == "X" && document.getElementById(7).innerHTML == "X" && document.getElementById(8).innerHTML == "") {
		document.getElementById(8).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(6).innerHTML == "X" && document.getElementById(8).innerHTML == "X" && document.getElementById(7).innerHTML == "") {
		document.getElementById(7).innerHTML = "O";
	}
	else if(document.getElementById(7).innerHTML == "X" && document.getElementById(8).innerHTML == "X" && document.getElementById(6).innerHTML == "") {
		document.getElementById(6).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	
	else if(document.getElementById(0).innerHTML == "X" && document.getElementById(3).innerHTML == "X" && document.getElementById(6).innerHTML == "") {
		document.getElementById(6).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(0).innerHTML == "X" && document.getElementById(6).innerHTML == "X" && document.getElementById(3).innerHTML == "") {
		document.getElementById(3).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(3).innerHTML == "X" && document.getElementById(6).innerHTML == "X" && document.getElementById(0).innerHTML == "") {
		document.getElementById(0).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	
	else if(document.getElementById(1).innerHTML == "X" && document.getElementById(4).innerHTML == "X" && document.getElementById(7).innerHTML == "") {
		document.getElementById(7).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(1).innerHTML == "X" && document.getElementById(7).innerHTML == "X" && document.getElementById(4).innerHTML == "") {
		document.getElementById(4).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(4).innerHTML == "X" && document.getElementById(7).innerHTML == "X" && document.getElementById(1).innerHTML == "") {
		document.getElementById(1).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	
	else if(document.getElementById(2).innerHTML == "X" && document.getElementById(5).innerHTML == "X" && document.getElementById(8).innerHTML == "") {
		document.getElementById(8).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(2).innerHTML == "X" && document.getElementById(8).innerHTML == "X" && document.getElementById(5).innerHTML == "") {
		document.getElementById(5).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(5).innerHTML == "X" && document.getElementById(8).innerHTML == "X" && document.getElementById(2).innerHTML == "") {
		document.getElementById(2).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	
	else if(document.getElementById(0).innerHTML == "X" && document.getElementById(4).innerHTML == "X" && document.getElementById(8).innerHTML == "") {
		document.getElementById(8).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(0).innerHTML == "X" && document.getElementById(8).innerHTML == "X" && document.getElementById(4).innerHTML == "") {
		document.getElementById(4).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(4).innerHTML == "X" && document.getElementById(8).innerHTML == "X" && document.getElementById(0).innerHTML == "") {
		document.getElementById(0).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	
	else if(document.getElementById(2).innerHTML == "X" && document.getElementById(4).innerHTML == "X" && document.getElementById(6).innerHTML == "") {
		document.getElementById(6).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(2).innerHTML == "X" && document.getElementById(6).innerHTML == "X" && document.getElementById(4).innerHTML == "") {
		document.getElementById(4).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	else if(document.getElementById(4).innerHTML == "X" && document.getElementById(6).innerHTML == "X" && document.getElementById(2).innerHTML == "") {
		document.getElementById(2).innerHTML = "O";
		checkO("O");
		stopbutton("O");
	}
	
	//otherwise it moves randomly
	else{
	randommove();
	}
	
	

}


/*-----------------------------------------------------------------------------------*/


function checkO(move){
	if(document.getElementById(0).innerHTML == move){
		if(document.getElementById(1).innerHTML == move){
			if(document.getElementById(2).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>THE COMPUTER WON</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8);
			}
		}
	}
	if(document.getElementById(0).innerHTML == move){
		if(document.getElementById(3).innerHTML == move){
			if(document.getElementById(6).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>THE COMPUTER WON</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8);
			}
		}
	}
		
	if(document.getElementById(0).innerHTML == move){
		if(document.getElementById(4).innerHTML == move){
			if(document.getElementById(8).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>THE COMPUTER WON</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8);
			}
		}
	}
	
	if(document.getElementById(1).innerHTML == move){
		if(document.getElementById(4).innerHTML == move){
			if(document.getElementById(7).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>THE COMPUTER WON</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8);
			}
		}
	}
	
	if(document.getElementById(2).innerHTML == move){
		if(document.getElementById(5).innerHTML == move){
			if(document.getElementById(8).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>THE COMPUTER WON</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8);
			}
		}
	}
	
	if(document.getElementById(2).innerHTML == move){
		if(document.getElementById(4).innerHTML == move){
			if(document.getElementById(6).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>THE COMPUTER WON</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8);
			}
		}
	}
	
	if(document.getElementById(3).innerHTML == move){
		if(document.getElementById(4).innerHTML == move){
			if(document.getElementById(5).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>THE COMPUTER WON</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8);
			}
		}
	}

	if(document.getElementById(6).innerHTML == move){
		if(document.getElementById(7).innerHTML == move){
			if(document.getElementById(8).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>THE COMPUTER WON</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8);
			}
		}
	}
	
}


/*-------------------------------------------------------------------------------------*/




function checkX(move){
	if(document.getElementById(0).innerHTML == move){
		if(document.getElementById(1).innerHTML == move){
			if(document.getElementById(2).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>YOU WON</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8);
			gamestart();
			}
		}
	}
	if(document.getElementById(0).innerHTML == move){
		if(document.getElementById(3).innerHTML == move){
			if(document.getElementById(6).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>YOU WON</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8);
			gamestart();
			}
		}
	}
		
	if(document.getElementById(0).innerHTML == move){
		if(document.getElementById(4).innerHTML == move){
			if(document.getElementById(8).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>YOU WON</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8);
			gamestart();
			}
		}
	}
	
	if(document.getElementById(1).innerHTML == move){
		if(document.getElementById(4).innerHTML == move){
			if(document.getElementById(7).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>YOU WON</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8);
			gamestart();
			}
		}
	}
	
	if(document.getElementById(2).innerHTML == move){
		if(document.getElementById(5).innerHTML == move){
			if(document.getElementById(8).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>YOU WON</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8);
			gamestart();
			}
		}
	}
	
	if(document.getElementById(2).innerHTML == move){
		if(document.getElementById(4).innerHTML == move){
			if(document.getElementById(6).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>YOU WON</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8);
			gamestart();
			}
		}
	}
	
	if(document.getElementById(3).innerHTML == move){
		if(document.getElementById(4).innerHTML == move){
			if(document.getElementById(5).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>YOU WON</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8);
			gamestart();
			}
		}
	}

	if(document.getElementById(6).innerHTML == move){
		if(document.getElementById(7).innerHTML == move){
			if(document.getElementById(8).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>YOU WON</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8);
			gamestart();
			}
		}
	}
	
}

/*-------------------------------------------------------------------*/


function stopbutton(disable){
	if(document.getElementById(0).innerHTML == disable){
	document.getElementById('0').disabled = true;
	}
	
	if(document.getElementById(1).innerHTML == disable){
	document.getElementById('1').disabled = true;
	}
	
	if(document.getElementById(2).innerHTML == disable){
	document.getElementById('2').disabled = true;
	}
	
	if(document.getElementById(3).innerHTML == disable){
	document.getElementById('3').disabled = true;
	}
	
	if(document.getElementById(4).innerHTML == disable){
	document.getElementById('4').disabled = true;
	}
	
	if(document.getElementById(5).innerHTML == disable){
	document.getElementById('5').disabled = true;
	}
	
	if(document.getElementById(6).innerHTML == disable){
	document.getElementById('6').disabled = true;
	}
	
	if(document.getElementById(7).innerHTML == disable){
	document.getElementById('7').disabled = true;
	}
	
	if(document.getElementById(8).innerHTML == disable){
	document.getElementById('8').disabled = true;
	}
}