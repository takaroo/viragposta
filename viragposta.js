$(document).ready(function () {
    $("#miben").hide();
    $("#megis").hide();

    $("#3").click(function () {
        var myprompt = prompt("Ön hány kávét ivott ma?");
        if (myprompt < 3 && myprompt >= 0) {
            alert("Amatőr!")
        } else if (myprompt >= 3) {
            alert("Pfff!")
        } else {
            alert("Na ne szórakozzunk!")
        }
    });

    $("#bannertitle").click(function () {
        $("#banner").css("background-color", "lightcyan");
    });

    $("h3").click(function () {
        $(this).hide();
        $("#miben").show("fast", function () {
            alert("Elérhetőség: 06 1 000 000 0 Budapest, X utca 3.");
        });
    });
    $("h1").mousedown(function () {
        $(this).css("border", "2px solid lightcyan");
    });
    $("h1").mouseup(function () {
        $(this).css("border", "none");
    });

    $("#top").mouseenter(function () {
        $("#top").css("text-align", "center");
    });
    $("#top").mouseleave(function () {
        $("#top").css("text-align", "left");
    });
    $("#left").hover(function () {
        $(this).css("background-color", "lightsalmon");
    });
    $("#left").dblclick(function () {
        $("#right").toggle();
    });
    $("#megse").click(function () {
        $(".img").fadeTo("slow", 0.2);
    });
    
    $(".img:even").click(function () {
        $(".img:odd").slideToggle();
    });

    var img = $(".img");
    $("#megse").click(function () {
        $("#megse2").hide();
        $("#megis").show();
        $("#allj").hide();
    });
    $("#megse2").click(function () {
        img.animate({width: '50%', opcity: '0.5'}, 1000);
        $("#megse").hide();
    });

    $("#megis").click(function () {
        window.location.reload(true);
    });

    $("#allj").click(function () {
        $(".img").stop();
    });

    function oramegjelenito() {
        var date = new Date();
        var hrs = date.getHours();
        var mins = date.getMinutes();
        var sec = date.getSeconds();
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (hrs < 10) {
            hrs = '0' + hrs;
        }
        if (mins < 10) {
            mins = '0' + mins;
        }

        var ora = hrs + ':' + mins + ':' + sec;
        document.getElementById("clock").innerHTML = ora;
        var clr = '#' + hrs + mins + sec;
        document.getElementById("clock").style.backgroundColor = clr;
        setTimeout(function () {
            oramegjelenito();
        }, 1000);
    }
    oramegjelenito();

    var termek = {
        'tipus':'Egyéb',
        'nev': 'kaspó',
        'termek_azonosito': 'x',
        'raktaron': 7,
        'egyeb':{
            'muanyag': 'elfogyott, 1000 ft',
            'keramia': 'raktáron, 2300 ft'
        }
    };

 $("#kaspogomb").click(function () {
        termek.db=prompt("Mennyit szeretne vásárolni ebből?: "+termek.nev);
        if(termek.raktaron>=termek.db){
            alert(termek.db+" kaspót rendelt");
            alert("Rendelését sikeresen rögzítettük: "+termek.db+" kaspó");
            maradek=termek.raktaron-termek.db;
            document.getElementById("kaspo").innerHTML = maradek+" maradt készleten";
        }else if(termek.raktaron<=termek.db){
            alert(termek.db+" kaspót rendelt");
            alert(termek.db+"-t sajnos nem tudunk küldeni, a készletünk mérete: "+termek.raktaron+" db.");
            document.getElementById("kaspo").innerHTML = "Kérjük, ismételje meg a rendelést!";
        }else{
            document.getElementById("kaspo").innerHTML ="Csak számot írhat be, a/z "+termek.db+" nem oké!!!";
        }
 });
 $("#kaspogomb2").click(function () {
     document.getElementById("kaspo2").innerHTML = "Típus: <br>"+termek.tipus+"<br>Termék neve: <br>"+termek.nev+"<br>Azonosító: <br>"+termek.termek_azonosito+"<br> Készlet:<br>"+termek.raktaron+"<br> műanyag:<br>"+termek.egyeb.muanyag+"<br> kerámia:<br>"+termek.egyeb.keramia;
 });



});
   