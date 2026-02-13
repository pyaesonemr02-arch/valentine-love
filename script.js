const secretHash = btoa("676425"); // encoded

function startExperience() {
    document.getElementById("unlock").style.opacity = "0";
setTimeout(() => {
    document.getElementById("unlock").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
}, 800);

}

function checkPass() {
    const input = document.getElementById("passcode").value;
    if (btoa(input) === secretHash) {
        document.getElementById("unlock").classList.add("hidden");
        document.getElementById("main").classList.remove("hidden");
        startCountdown();
        generateHearts();
    } else {
        document.getElementById("error").innerText = "Wrong Secret 💔";
    }
}

/* Countdown */
function startCountdown() {
    const valentine = new Date("February 14, 2026 00:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const distance = valentine - now;
        const d = Math.floor(distance/(1000*60*60*24));
        const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
        const m = Math.floor((distance%(1000*60*60))/(1000*60));
        document.getElementById("countdown").innerHTML =
            `${d}d ${h}h ${m}m until Valentine 💖`;
    },1000);
}

/* Floating Hearts */
function generateHearts() {
    const canvas = document.getElementById("hearts");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let hearts = [];

    for(let i=0;i<30;i++){
        hearts.push({
            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,
            size:Math.random()*20+10
        });
    }

    function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        hearts.forEach(h=>{
            ctx.fillStyle="pink";
            ctx.beginPath();
            ctx.arc(h.x,h.y,h.size/2,0,Math.PI*2);
            ctx.fill();
            h.y -= 1;
            if(h.y<0) h.y=canvas.height;
        });
        requestAnimationFrame(draw);
    }
    draw();
}




