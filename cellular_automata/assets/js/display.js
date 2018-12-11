
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
	var x = document.getElementById("essay");
	if (x.style.display === "none") {
		x.style.display = "block";
		x.innerHTML = rawFile.responseText;
	} else {
		x.style.display = "none";
	}
}