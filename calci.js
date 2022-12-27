let inputName;
let numerology;
var letterMap = {
  1: ["A", "I", "J", "Q", "Y"],
  2: ["B", "K", "R"],
  3: ["C", "G", "L", "S"],
  4: ["D", "M", "T"],
  5: ["E", "H", "N", "X"],
  6: ["U", "V", "W"],
  7: ["O", "Z"],
  8: ["F", "P"],
  9: [" "],
};

const findSum = (tNum) => {
  var value = tNum;
  var sum = 0;
  while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
  }
  return sum;
};

const calculateNumerology = () => {
  let valueTotal = 0;
  for (let i of inputName) {
    for (var key in letterMap) {
      if (letterMap[key].includes(i)) {
        valueTotal += Number(key);
      }
    }
  }
  numerology = findSum(valueTotal);
};

console.log(inputName + " - " + numerology);

let lb = {
  1: "புதன் / Budha (Mercury)",
  2: "சந்திரன் / Chandra (Moon)",
  3: "குரு / Guru (Jupiter)",
  4: "கேது / Ketu (south node)",
  5: "இராகு / Rahu (north node)",
  6: "சுக்கிரன் / Shukra (Venus)",
  7: "சூரியன் / Surya Deva (sun)",
  8: "சனி / Shani (Saturn)",
  9: "செவ்வாய் / Mangala (Mars)",
};

console.log(lb[numerology]);
