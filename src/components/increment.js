import './button.css';

const ButtonIncrement = (props) => {

  const { minutes, setMinutes } = props;

  const increaseMinuts = () => {
    if (minutes < 5)
      setMinutes(minutes + 1);
  };

  return <button class="btn-increment" onClick={increaseMinuts}>+</button>
};


export default ButtonIncrement;