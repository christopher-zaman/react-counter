import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
// Add PropTypes for MyButton
MyButton.propTypes = {
  count: PropTypes.number.isRequired, // count must be a number
  onClick: PropTypes.func.isRequired, // onClick must be a function
};