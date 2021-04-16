// import '../App.css';
import './button.css';

const ButtonDecrement = (props) => {

    const {minutes,setMinutes} = props;

    const decreaseMinuts = () =>{
        if(minutes > 0 ) setMinutes(minutes -1);
      };
    
    return <button class="btn-decrement" onClick={decreaseMinuts}>-</button>
};

export default ButtonDecrement;

