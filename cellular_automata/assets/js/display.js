function mid_game(canvasID){
        // Load the script
	    var gridHeight = 500;
	    var gridWidth = 500;
	    var theGrid = createArray(gridWidth);
	    var numArray = createArray(gridWidth);
	    var mirrorGrid = createArray(gridWidth);
	    var c = document.getElementById(canvasID);
	    var ctx = c.getContext("2d");
	    fillRandom(); //create the starting state for the grid by filling it with random cells
	    tick(); //call main loop
    
	//functions
	function tick() { //main loop
	    var tickTime = 3000; // pause between iterations
	    console.time("loop");
	    drawGrid();
	    updateGrid();
	    console.timeEnd("loop");
	    setTimeout(function() {requestAnimationFrame(tick)}, tickTime);
	}

	function createArray(rows) { //creates a 2 dimensional array of required height
	    var arr = [];
	    for (var i = 0; i < rows; i++) {
	        arr[i] = [];
	    }
	    return arr;
	}

	function fillRandom() { //fill the grid randomly
	    for (var j = 0; j < gridHeight-1; j++) { //iterate through rows
	        for (var k = 0; k < gridWidth-1; k++) { //iterate through columns
	            theGrid[j][k] = Math.round(Math.random()-0.2);
	        }
	    }
	}

	function drawGrid() { //draw the contents of the grid onto a canvas
    var liveCount = 0;
    var blockSize = 20;
    ctx.fillStyle = "#F1BA93";
	    ctx.clearRect(0, 0, gridHeight*blockSize, gridWidth*blockSize); //this should clear the canvas ahead of each redraw
	    for (var j = 0; j < gridHeight; j++) { //iterate through rows
	        for (var k = 0; k < gridWidth; k++) { //iterate through columns
	            if (theGrid[j][k] === 1) {
	                ctx.fillRect(0.5 + j*blockSize, 0.5 + k*blockSize, blockSize, blockSize);
	                ctx.fill();
                    liveCount++;
                    
	            }
	        }
	    }
	}



	function updateGrid() { //perform one iteration of grid update
       
	    for (var j = 1; j < gridHeight - 1; j++) { //iterate through rows
	        for (var k = 1; k < gridWidth - 1; k++) { //iterate through columns
	            var totalCells = 0;
	            //add up the total values for the surrounding cells
	            totalCells += theGrid[j - 1][k - 1]; //top left
	            totalCells += theGrid[j - 1][k]; //top center
	            totalCells += theGrid[j - 1][k + 1]; //top right

	            totalCells += theGrid[j][k - 1]; //middle left
	            totalCells += theGrid[j][k + 1]; //middle right

	            totalCells += theGrid[j + 1][k - 1]; //bottom left
	            totalCells += theGrid[j + 1][k]; //bottom center
	            totalCells += theGrid[j + 1][k + 1]; //bottom right

	            //apply the rules to each cell
	            switch (totalCells) {
	                case 2:
	                    mirrorGrid[j][k] = theGrid[j][k];
                       
	                    break;
	                case 3:
	                    mirrorGrid[j][k] = 1; //live
                        
	                    break;
	                default:
	                    mirrorGrid[j][k] = 0; //
	            }
	        }
	    }

	    //mirror edges to create wraparound effect

	    for (var l = 1; l < gridHeight - 1; l++) { //iterate through rows
	        //top and bottom
	        mirrorGrid[l][0] = mirrorGrid[l][gridHeight - 3];
	        mirrorGrid[l][gridHeight - 2] = mirrorGrid[l][1];
	        //left and right
	        mirrorGrid[0][l] = mirrorGrid[gridHeight - 3][l];
	        mirrorGrid[gridHeight - 2][l] = mirrorGrid[1][l];

	    }


	    //swap grids
	    var temp = theGrid;
	    theGrid = mirrorGrid;
	    mirrorGrid = temp;

    
		}
    }


function getImages(folder){
	var img;
	for(var i=1; i<10; i++){
		img.src = `assets/img/${folder}/${i}.jpg`;
		console.log(img);
		if (img === 'undefined') break;
		else console.log(i)
	}
}

function readTextFile(file)
{	
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                rawFile.responseText;
				var wrap = document.getElementById("essayWrapper");
			    wrap.innerHTML = rawFile.responseText;           
            }
        }
    }
    rawFile.send(null);
}


function showEssay(number) {
	readTextFile(`assets/essays/${number}.html`);
	getImages(number);	
	var x = document.getElementById("essay");
	if (x.style.display === "none") {
		x.style.display = "block";
		mid_game("canvas2");
		mid_game("canvas3");
		mid_game("canvas4");	
		mid_game("canvas5");
		mid_game("canvas6");							
	} else {
		x.style.display = "none";
	}
}