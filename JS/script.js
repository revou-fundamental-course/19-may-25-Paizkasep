// js/script.js

// Tangani input dari Celsius
function handleCelsiusInput() {
    const celsius = parseFloat(document.getElementById("celsius").value);

    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
        document.getElementById("result").value = `(${celsius} × 9/5) + 32 = ${fahrenheit.toFixed(2)}`;
    } else {
        document.getElementById("fahrenheit").value = "";
        document.getElementById("result").value = "";
    }
}

// Tangani input dari Fahrenheit
function handleFahrenheitInput() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById("celsius").value = celsius.toFixed(2);
        document.getElementById("result").value = `(${fahrenheit} - 32) × 5/9 = ${celsius.toFixed(2)}`;
    } else {
        document.getElementById("celsius").value = "";
        document.getElementById("result").value = "";
    }
}

// Reset semua kolom
function resetFields() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("result").value = "";
    document.getElementById("explanation").classList.add("hidden");
}

// Tampilkan/sembunyikan penjelasan
function toggleExplanation() {
    const explanation = document.getElementById("explanation");
    explanation.classList.toggle("hidden");
}
