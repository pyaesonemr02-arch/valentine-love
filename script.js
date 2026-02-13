function unlock() {
    const codeInput = document.getElementById('code-input').value;
    const correctCode = "RennieLove"; // Replace with your unlock code
    if (codeInput === correctCode) {
        document.getElementById('unlock-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        // Display the certificate and other content
    } else {
        alert("Wrong code! Try again.");
    }
}
