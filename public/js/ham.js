function getDX() {
    fetch("https://www.hamqth.com/dxc_csv.php?limit=1").then((res) => {
        res.text().then((result) => {
 
            const info = result.split("^");
            const time = info[4].split(" ")[0];
            
            document.getElementById("call").innerHTML = info[0];
            document.getElementById("freq").innerHTML = info[1] + " Khz";
            document.getElementById("dest").innerHTML = info[2];
            document.getElementById("time").innerHTML = [time.slice(0, 2),":", time.slice(2),"Z",].join("");
            document.getElementById("qrzcall").href = ["https://www.qrz.com/db/", info[0]].join('');
            document.getElementById("qrzdest").href = ["https://www.qrz.com/db/", info[2]].join('');
            
        });
      
    });

}

function getImg(){
    document.getElementById("solar").src = "https://www.hamqsl.com/solar101vhfpic.php?image=random&bgcolor=orange&back=transparent"// + performance.now();
}

getImg();
getDX();

setInterval(function(){ getDX() }, 15000);
setInterval(function(){ getImg() },60000);

var butt = document.createElement("button")
butt.onclick = function() {location.href='/'}
butt.innerHTML = "Back to Index";
document.body.appendChild(butt);