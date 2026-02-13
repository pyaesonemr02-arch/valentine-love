window.onload = function(){
    const canvas = document.getElementById("certificateCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width=350;
    canvas.height=500;

    ctx.fillStyle="#fff";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#000";
    ctx.font="20px serif";
    ctx.fillText("Official Love Certificate",50,100);
    ctx.fillText("Awarded to: Rennie 💖",50,180);
    ctx.fillText("From: Pyae Sone Aung",50,240);
    ctx.fillText("Date: Valentine 2026",50,300);
};

function printCertificate(){
    const dataURL = document.getElementById("certificateCanvas").toDataURL();
    const win = window.open();
    win.document.write('<img src="'+dataURL+'" onload="window.print();window.close()">');
}
