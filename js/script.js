let isOpen = false;
function toggleMenu() {
    if (document.body.clientWidth >= 765) {
        // WIDE SCREEN
        if (isOpen) {
            // close menu
            isOpen = false;
            document.getElementById("desktop-slide-menu").style.transform = "translateX(-300px)";
            $(".our-company-wide").css("transform", "translateX(-5px)");
            //Delay setting opacity by .5s
            setTimeout(function (){
                document.getElementById("desktop-slide-menu").style.opacity = "0";
              }, 500);
        } else {
            // open menu
            isOpen = true;
            document.getElementById("desktop-slide-menu").style.opacity = "1";
            document.getElementById("desktop-slide-menu").style.transform = "translateX(300px)";
            $(".our-company-wide").css("transform", "translateX(150px)");
        } 
    } else {
        // MOBILE SCREEN
        if (isOpen) {
            // close menu
            isOpen = false;
            document.getElementById("mobile-drop-menu").style.height = "0%";
            document.getElementById("open-menu").style.opacity = "1";
            document.getElementById("close-menu").style.opacity = "0";
            $(".our-company").removeClass('active');
            //Delay setting opacity by .5s
            setTimeout(function (){
                document.getElementById("mobile-drop-menu").style.opacity = "0";
              }, 500);
            
        } else {
            // open menu
            isOpen = true;
            document.getElementById("mobile-drop-menu").style.opacity = "1";
            document.getElementById("mobile-drop-menu").style.height = "600px";
            document.getElementById("open-menu").style.opacity = "0";
            document.getElementById("close-menu").style.opacity = "1";        
        } 
    }
}

$('.our-company').on('click', function (event){ 
    toggleMenu();
});


