console.log("zadanie 10")
const tabColor = ["orange", "blue", "yellow", "pink", "red", "brown"];
const newTabColor = [];
const newTabColorLength = []

newTabColor.push(tabColor.filter(item => item.length > 4));
console.log(newTabColor)

const TabWithObject = []
newTabColor[0].forEach(item => {
  let dane = {
    name: item,
    wordLength: item.length
  }
  TabWithObject.push(dane)
  newTabColorLength.push(item.length);
})

console.log(TabWithObject)
console.log(newTabColorLength)