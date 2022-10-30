// Variablen aus dem Formular

const anzahlPersonen = document.getElementsByClassName(".inputfield").value;
const anzahlKm = 180;
const preisProLiter = 1.9;
const verbrauchDurchschnitt = 9;

console.log(anzahlPersonen);

// Funktion zur Sprikostenberechnung

function berechnung() {
  const result =
    ((verbrauchDurchschnitt / 100) * anzahlKm * preisProLiter) / anzahlPersonen;
  return result;
}

// Variable aus dem button und variable für den Output
let button = document.querySelector(".berechnen_btn");
const output = document.querySelector('[js-data="output"]');

// Button Click funktion ausführung der funktion und ausgabe in der Konsole
button.addEventListener("click", () => {
  console.log(berechnung());
});
