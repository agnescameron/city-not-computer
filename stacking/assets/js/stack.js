(function() {
    document.onmousemove = handleMouseMove;


    function showEssay1() {
        var x = document.getElementById("essay1");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    function moveSvg(svg) {
        console.log(`moving frame${svg}`);
        var frame = document.getElementById(`frame${svg}`)
        frame.style.top = "80px";
    }


    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        if(event.pageY > 200 && event.pageY < 500){

            if(event.pageX > 250 && event.pageX < 300){
                moveSvg(1);
            }

            else if(event.pageX > 300 && event.pageX < 350){
                console.log("page2")           
            }

            else if(event.pageX > 350 && event.pageX < 400){
                console.log("page3")
            }

            else if(event.pageX > 400 && event.pageX < 450){
                console.log("page4")           
            }

            else if(event.pageX > 450 && event.pageX < 500){
                console.log("page5")
            }

            else if(event.pageX > 500 && event.pageX < 550){
                console.log("page6")           
            }
        }                
    }
})();