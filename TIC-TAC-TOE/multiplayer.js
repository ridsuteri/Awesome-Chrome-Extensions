document.onclick = function (event) {
    if (event.target.nodeName === 'BUTTON') {
        gamestart(event.target.id);
    }
}


var tally=0;
//Pick and Start the Model
function gamestart(id){
	console.log(id);

	tally=tally+1;
	//document.write(tally);
	if(tally%2 == 0){
	document.getElementById(id).innerHTML = "O";
	checkO("O");
	stopbutton("O")
	}else{
	document.getElementById(id).innerHTML = "X";
	checkX("X")
	stopbutton("X")
	}
	if(tally == 9){
	document.getElementById("alertbox").innerHTML = "<h2>DRAW</h2><a href='double.html'><button class='alertbutton'>Play Again</button></a>";
	}
}

/*-----------------------------------------------------------------------------------*/


function checkO(move){
	if(document.getElementById(0).innerHTML == move){
		if(document.getElementById(1).innerHTML == move){
			if(document.getElementById(2).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>PLAYER 2 (O) WINS</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8)
			}
		}
	}
	if(document.getElementById(0).innerHTML == move){
		if(document.getElementById(3).innerHTML == move){
			if(document.getElementById(6).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>PLAYER 2 (O) WINS</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8)
			}
		}
	}
		
	if(document.getElementById(0).innerHTML == move){
		if(document.getElementById(4).innerHTML == move){
			if(document.getElementById(8).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>PLAYER 2 (O) WINS</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8)
			}
		}
	}
	
	if(document.getElementById(1).innerHTML == move){
		if(document.getElementById(4).innerHTML == move){
			if(document.getElementById(7).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>PLAYER 2 (O) WINS</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8)
			}
		}
	}
	
	if(document.getElementById(2).innerHTML == move){
		if(document.getElementById(5).innerHTML == move){
			if(document.getElementById(8).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>PLAYER 2 (O) WINS</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8)
			}
		}
	}
	
	if(document.getElementById(2).innerHTML == move){
		if(document.getElementById(4).innerHTML == move){
			if(document.getElementById(6).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>PLAYER 2 (O) WINS</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8)
			}
		}
	}
	
	if(document.getElementById(3).innerHTML == move){
		if(document.getElementById(4).innerHTML == move){
			if(document.getElementById(5).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>PLAYER 2 (O) WINS</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8)
			}
		}
	}

	if(document.getElementById(6).innerHTML == move){
		if(document.getElementById(7).innerHTML == move){
			if(document.getElementById(8).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>PLAYER 2 (O) WINS</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8)
			}
		}
	}
	
}


/*-------------------------------------------------------------------------------------*/




function checkX(move){
	if(document.getElementById(0).innerHTML == move){
		if(document.getElementById(1).innerHTML == move){
			if(document.getElementById(2).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>PLAYER 1 (X) WINS</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8)
			}
		}
	}
	if(document.getElementById(0).innerHTML == move){
		if(document.getElementById(3).innerHTML == move){
			if(document.getElementById(6).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>PLAYER 1 (X) WINS</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8)
			}
		}
	}
		
	if(document.getElementById(0).innerHTML == move){
		if(document.getElementById(4).innerHTML == move){
			if(document.getElementById(8).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>PLAYER 1 (X) WINS</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8)
			}
		}
	}
	
	if(document.getElementById(1).innerHTML == move){
		if(document.getElementById(4).innerHTML == move){
			if(document.getElementById(7).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>PLAYER 1 (X) WINS</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8)
			}
		}
	}
	
	if(document.getElementById(2).innerHTML == move){
		if(document.getElementById(5).innerHTML == move){
			if(document.getElementById(8).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>PLAYER 1 (X) WINS</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8)
			}
		}
	}
	
	if(document.getElementById(2).innerHTML == move){
		if(document.getElementById(4).innerHTML == move){
			if(document.getElementById(6).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>PLAYER 1 (X) WINS</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8)
			}
		}
	}
	
	if(document.getElementById(3).innerHTML == move){
		if(document.getElementById(4).innerHTML == move){
			if(document.getElementById(5).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>PLAYER 1 (X) WINS</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8)
			}
		}
	}

	if(document.getElementById(6).innerHTML == move){
		if(document.getElementById(7).innerHTML == move){
			if(document.getElementById(8).innerHTML == move){
			document.getElementById("alertbox").innerHTML = "<h2>PLAYER 1 (X) WINS</h2><a href='single.html'><button class='alertbutton'>Play Again</button></a>";
			stopbutton(0,1,2,3,4,5,6,7,8)
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