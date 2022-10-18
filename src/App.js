import "./App.css";
import AppEmoji from "./components/App";
import emojipedia from "./components/emojipedia";

// Map,Filter,Reduce

var numbers = [3, 56, 2, 48, 5];
console.log(numbers);

function double(x) {
  return x * 2;
}

const newNumbers = numbers.map(double);
const newNumbersFilter = numbers.filter((num) => {
  return num > 10;
});

const newNumbersReduce = numbers.reduce((accumulator, currentNumber) => {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = " + currentNumber);
  return accumulator + currentNumber;
});
console.log(newNumbersFilter);
console.log(newNumbers);
console.log(newNumbersReduce);

const findNumber = numbers.find((num) => {
  return num > 10;
});
console.log(findNumber);

const findNumberIndex = numbers.findIndex((num) => {
  return num < 10;
});

console.log(findNumberIndex);

const emojipedia100 = emojipedia.map((emojiEntry) => {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(emojipedia100);

function App() {
  return (

    <div className="App">
      <AppEmoji />
    </div>
  );
}

export default App;
