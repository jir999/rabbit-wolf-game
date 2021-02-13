import { useState } from 'react';
import StartBtn from './components/StartBtn';
import Board from './components/Board';
import SelectSizeBtns from './components/SelectSizeBtns';

// const stone = `${process.env.PUBLIC_URL}/images/stone.png`;
// const rabbit = `${process.env.PUBLIC_URL}/images/rabbit.png`;
// const home = `${process.env.PUBLIC_URL}/images/home.png`;
// const wolf = `${process.env.PUBLIC_URL}/images/wolf.png`;

const mock = [
  ["null ", "null ", "W ", "null ", "null "],
  ["null ", "null ", "R ", "null ", "null "],
  ["null ", "null ", "S ", "null ", "null "],
  ["null ", "null ", "H ", "null ", "null "],
  ["null ", "null ", "W ", "null ", "null "]
];

const App = () => {
  const [arr, setArr] = useState(mock);
  const [selectedSize, setSelectedSize] = useState('5x5');
  console.log('selectedSize', selectedSize);

  const handleStartClick = () => {
    console.log('start');
  }

  const handleSelectSizeClick = (size) => {
    setSelectedSize(size);
  }

  return (
    <div>
      <StartBtn onClick={handleStartClick} />
      <SelectSizeBtns onClick={handleSelectSizeClick} />
      <Board data={arr} />
    </div>
  );
}

export default App;
