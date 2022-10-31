// Funktion zur Sprikostenberechnung

function berechnung() {
  // Variablen aus dem Formular
  const inputAP = document.querySelector('[data-js="inputAP"]');
  const inputKM = document.querySelector('[data-js="inputKM"]');
  const inputPreis = document.querySelector('[data-js="inputPreis"]');
  const inputVerbrauch = document.querySelector('[data-js="inputVerbrauch"]');

  const anzahlPersonen = Number(inputAP.value);
  const anzahlKm = Number(inputKM.value);
  const preisProLiter = Number(inputPreis.value);
  const verbrauchDurchschnitt = Number(inputVerbrauch.value);

  const result =
    ((verbrauchDurchschnitt / 100) * anzahlKm * preisProLiter) / anzahlPersonen;
  return result;
}

// Variable aus dem button und variable für den Output
let button = document.querySelector(".berechnen_btn");
const output = document.querySelector('[js-data="output"]');

// Button Click funktion ausführung der funktion und ausgabe in der Konsole
button.addEventListener("click", () => {
  output.textContent = berechnung().toFixed(2);
  output.style.color = "white";
  console.log(berechnung());
});
