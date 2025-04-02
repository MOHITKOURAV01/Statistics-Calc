function getNumbers() {
    const input = document.getElementById("numbers").value;
    return input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
}

function calculateMean() {
    const numbers = getNumbers();
    if (numbers.length === 0) {
        alert("Please enter valid numbers.");
        return;
    }
    const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    document.getElementById("mean").textContent = mean.toFixed(2);
}

function calculateMedian() {
    const numbers = getNumbers();
    if (numbers.length === 0) {
        alert("Please enter valid numbers.");
        return;
    }
    numbers.sort((a, b) => a - b);
    const middle = Math.floor(numbers.length / 2);
    let median;
    if (numbers.length % 2 === 0) {
        median = (numbers[middle - 1] + numbers[middle]) / 2;
    } else {
        median = numbers[middle];
    }
    document.getElementById("median").textContent = median.toFixed(2);
}

function calculateMode() {
    const numbers = getNumbers();
    if (numbers.length === 0) {
        alert("Please enter valid numbers.");
        return;
    }
    const frequency = {};
    let maxFrequency = 0;
    let mode = [];
    
    numbers.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFrequency) {
            maxFrequency = frequency[num];
        }
    });
    
    for (let num in frequency) {
        if (frequency[num] === maxFrequency) {
            mode.push(num);
        }
    }
    
    document.getElementById("mode").textContent = mode.join(', ');
}
