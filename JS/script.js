function convertTemperature() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsius)) {
        alert("Masukkan suhu dalam angka yang valid.");
        return;
    }
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('result').value = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function resetFields() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('result').value = '';
}

function reverseConversion() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (isNaN(fahrenheit)) {
        alert("Masukkan suhu Fahrenheit dalam angka yang valid.");
        return;
    }
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('celsius').value = celsius.toFixed(2);
    document.getElementById('result').value = `${fahrenheit}°F - 32 × (5/9) = ${celsius.toFixed(2)}°C`;
}

function showReverseExplanation() {
    document.getElementById('explanation').innerHTML = `
        <h2>Cara Konversi Dari Fahrenheit (°F) ke Celsius (°C)</h2>
        <p>Suhu <em>S</em> dalam derajat Celsius (°C) sama dengan suhu <em>S</em> dalam derajat Fahrenheit (°F) kurang <strong>32</strong>, lalu kali <strong>5/9</strong>.</p>
        <p><strong>S(°C) = (S(°F) - 32) × 5/9</strong></p>
    `;
}
