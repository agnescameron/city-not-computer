
function toggleMenu(){
	var menu = document.getElementById('menu');
	if (menu.style.display === "none") {
		$('#menu').fadeIn();
        $('#menu-icon').addClass('active');						
	} else {
		$('#menu').fadeOut();
        $('#menu-icon').removeClass('active');
	}
    $('.essay').removeClass('tempTransition');
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
            }
        }
    }
    rawFile.send(null);
}



$(document).ready(function() {
    new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 250);
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
    }).then(function (result, reject) {$(this).scrollTop(0);});
    pageWidth = $(window).width();
    pageHeight =  $(window).height();
});
function showEssay(number) {
    tempZindex = 10;
    tempTop = 10;
    tempLeft = 85;
    $('.essay').each(function(essay){
        $(this).addClass('tempTransition');
        $(this).css({'z-index': tempZindex, "left": tempLeft + "%", "top": tempTop + "%"});
        tempZindex += 1;
        tempTop += 3;
        tempLeft += 1;
    })
    var selectEssay = "#essay" + number;
    $(selectEssay).css({'z-index': zindex, "left": "10%", "top": "10%"});
    $(selectEssay).scrollTop(document);
    zindex +=1;
}