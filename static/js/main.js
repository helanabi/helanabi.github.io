function animateTitle() {
    const titleSpan = document.getElementById("cmd");
    const title = "Computer Programmer";
    const delay = 80; // ms
    
    Array.from(title).forEach((letter, i) => {
	setTimeout(() => {
	    titleSpan.textContent += letter;
	}, 500 + i * delay)
    });
}

window.onload = () => animateTitle();
