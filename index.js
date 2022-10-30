const anzahlPersonen = 3;
const anzahlKm = 180;
const preisProLiter = 1.9;
const verbrauchDurchschnitt = 9;

function berechnung() {
  const result =
    ((verbrauchDurchschnitt / 100) * anzahlKm * preisProLiter) / anzahlPersonen;
  return result;
}

console.log(berechnung());
