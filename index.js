let lastNumber = null;
let currentNumber = null;

document.getElementById('generateButton').addEventListener('click', function () {

    lastNumber = currentNumber;
    currentNumber = Math.floor(Math.random() * 100);
    document.getElementById('numberDisplay').innerText = currentNumber;
    document.getElementById('previousButton').disabled = false;
});

document.getElementById('previousButton').addEventListener('click', function () {

    if (lastNumber !== null) {
        document.getElementById('numberDisplay').innerText = lastNumber;
    }
});