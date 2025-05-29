// Fungsi untuk menangani input dari Celsius ke Fahrenheit
function handleCelsiusInput() {
  const celsius = parseFloat(document.getElementById("celsius").value);
  if (isNaN(celsius)) {
    resetOutput();
    return;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;
  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  document.getElementById("result").value = `(${celsius} × 9/5) + 32 = ${fahrenheit.toFixed(2)} °F`;
}

// Fungsi untuk menangani input dari Fahrenheit ke Celsius
function handleFahrenheitInput() {
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  if (isNaN(fahrenheit)) {
    resetOutput();
    return;
  }

  const celsius = (fahrenheit - 32) * 5 / 9;
  document.getElementById("celsius").value = celsius.toFixed(2);
  document.getElementById("result").value = `(${fahrenheit} - 32) × 5/9 = ${celsius.toFixed(2)} °C`;
}

// Fungsi untuk mereset semua field
function resetFields() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("result").value = "";
  document.getElementById("explanation").classList.add("hidden");
}

// Fungsi untuk menyembunyikan hasil kalkulasi
function resetOutput() {
  document.getElementById("fahrenheit").value = "";
  document.getElementById("celsius").value = "";
  document.getElementById("result").value = "";
}

// Fungsi untuk menampilkan/sembunyikan penjelasan
function toggleExplanation() {
  const explanation = document.getElementById("explanation");
  explanation.classList.toggle("hidden");
}
