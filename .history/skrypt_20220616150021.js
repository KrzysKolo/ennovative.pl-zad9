console.log("zadanie 10")
const tabColor = ["orange", "blue", "yellow", "pink", "red", "brown"];
const newTabColor = [];
const newTabColorLength = [] //istotna tablica do zadania 10
const TabWithObject = [] //tablica do zadania 10, która prezentuje obiekt składający się z danych o nazwie koloru i jego długości

newTabColor.push(tabColor.filter(item => item.length > 4));
console.log(newTabColor);

newTabColor[0].forEach(item => {
  let dane = {
    name: item,
    wordLength: item.length
  }
  TabWithObject.push(dane);
  newTabColorLength.push(item.length);
});

console.log(TabWithObject);
console.log(newTabColorLength);