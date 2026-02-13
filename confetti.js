function launchConfetti() {
    for (let i = 0; i < 200; i++) {
        let div = document.createElement("div");
        div.className = "confetti";
        div.style.left = Math.random() * 100 + "vw";
        div.style.backgroundColor =
            `hsl(${Math.random() * 360}, 100%, 50%)`;
        div.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        document.body.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 5000);
    }
}

