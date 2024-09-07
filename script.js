//F = C×(9/5)+32,  

const temp = () => {
    const tempInput = document.getElementById('tempInput').value;
    const faren = parseFloat(tempInput * (9/5) + 32).toFixed(1);
    const result = document.getElementById('result');

    result.innerHTML = `
    <h3>Your Fahrenheit temperature is ${faren}</h3>
    `
}