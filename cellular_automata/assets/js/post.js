function initCanvas() {
    $('#canvas').attr("width",$(window).width());
   $('#canvas').attr("height",$(window).height());
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
$(function() {
    zindex = 100;
    var isDragging = false;
    $(".essay")
    .mousedown(function() {
        isDragging = false;
    })
    .mousemove(function() {
        isDragging = true;
     })
    .mouseup(function() {
        var wasDragging = isDragging;
        isDragging = false;
        if (!wasDragging) {
            $(this).css('z-index', zindex);
            zindex+=1;
        }
    });

});

$(".essay").scroll(function(){
point0 = $(`#${this.id}_point00`).position().top;
point1 = $(`#${this.id}_point01`).position().top;
point2 = $(`#${this.id}_point02`).position().top;
point3 = $(`#${this.id}_point03`).position().top;

  if (point0>=-500 && point0<=500) {
    $('#essayImage').css(`background-image`, `url(assets/img/${this.id}/0.png)`);
    $('#essayImage').fadeIn();
  }
  else if (point1>=-500 && point1<=500)  {
    $('#essayImage').css(`background-image`, `url(assets/img/${this.id}/1.png)`);
    $('#essayImage').fadeIn();
  }
  else if (point2>=-500 && point2<=500) {
    $('#essayImage').css(`background-image`, `url(assets/img/${this.id}/2.png)`);
    $('#essayImage').fadeIn();
  }
  else if (point3>=-500 && point3<=500){ 
  $('#essayImage').css(`background-image`, `url(assets/img/${this.id}/3.png)`);  
  $('#essayImage').fadeIn();
  }      
  else{
  $('#essayImage').fadeOut();
  }
});

$(".essay").mouseover(function(){
  $('.essay').removeClass('tempTransition');
});

$("#menu").click(function(){
  $('.essay').addClass('tempTransition');
});

if( $('#title').css('font-size')=='30px') {
    var is_mobile = true;
}
if (is_mobile == true) {
    function showEssay(number) {
      var selectEssay = "#essay" + number;
      $('.textbox').fadeOut();
      $(selectEssay).fadeIn();
      toggleMenu();
  }
}
$(document).ready(function(){
    $(window).scrollTop('#title');
})
$(document).mousemove(function(event){
  $('#menu-icon').css("transform",`translate(${( 1 - ( event.pageX / pageWidth ) ) * 20}%,${( 1 - ( event.pageY / pageHeight ) ) * 20}%`);
});