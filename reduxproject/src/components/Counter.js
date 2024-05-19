import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatchFn = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const handleIncrement = () => {
    dispatchFn(counterActions.increment());
  };

  const handleIncrease = (amount) => {
    dispatchFn(counterActions.increase(amount));
  };

  const handleDecrement = () => {
    dispatchFn(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatchFn(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      {showCounter && (
        <>
          <h1>Redux Counter</h1>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={() => handleIncrease(5)}>Increase +5</button>
            <button onClick={handleDecrement}>Decrement</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   handleIncrement() {
//     this.props.increment();
//   }
//   handleDecrement() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.handleIncrement.bind(this)}>Increment</button>
//           <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () =>
//       dispatch({
//         type: "increment",
//       }),
//     decrement: () =>
//       dispatch({
//         type: "decrement",
//       }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
