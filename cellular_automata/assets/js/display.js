
function toggleMenu(){
	var menu = document.getElementById('menu');
	if (menu.style.display === "none") {
		menu.style.display = "block";
        $('#menu-icon').addClass('active');						
	} else {
		menu.style.display = "none";
        $('#menu-icon').removeClass('active');
	}
}


function readTextFile(file)
{	
    rawFile = new XMLHttpRequest();
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

$(document).ready (function() {
    $('.essay').each( function(index){
        readTextFile(`assets/essays/${index}.html`);
        essayNum = "essay" + index;
        var x = document.getElementById(essayNum);
        x.innerHTML = rawFile.responseText;
        dragElement(document.getElementById(essayNum));
        autoCanvas = '#' + essayNum + ' .autoCanvas';
        $(autoCanvas).each( function(){
            id = (this).id;
            renderCanvas(id);

        });
    });
});
function showEssay(number) {
    var selectEssay = "#essay" + number;
    $(selectEssay).removeClass('hidden');
    $(selectEssay).css('z-index', zindex);
    zindex +=1;
}