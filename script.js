function unlock() {
    const codeInput = document.getElementById('code-input').value;
    const correctCode = "RennieLove"; // Replace with your unlock code
    if (codeInput === correctCode) {
        document.getElementById('unlock-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        // Display the certificate and other content
    } else {
        alert("Wrong code! Try again.");
    }const countdownDate = new Date("February 14, 2026 00:00:00").getTime();
const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Happy Valentine's Day!";
        // Trigger confetti effect here
    }
}, 1000);
function launchConfetti() {
    confetti.start();
    setTimeout(() => confetti.stop(), 3000);
}

}

