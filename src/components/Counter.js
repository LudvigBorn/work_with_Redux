import { connect } from "react-redux";
import {inc,dec,rnd} from '../actions'
import { useSelector, useDispatch } from "react-redux";

//import { bindActionCreators } from "redux";

const Counter = () => {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <>
      <div class="jumbotron">
        <h1>{counter}</h1>
        <button onClick={() => dispatch(dec())} className="btn btn-btn-primary">
          DEC
        </button>
        <button onClick={() => dispatch(inc())} className="btn btn-btn-primary">
          IMC
        </button>
        <button onClick={() => dispatch(rnd())} className="btn btn-btn-primary">
          RND
        </button>
      </div>
      ;
    </>
  );
}


// const mapDispatchToProps = (dispatch) => {
//   const {inc,dec,rnd} = bindActionCreators(actions,dispatch)
//   return { inc, dec, rnd }
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// };

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);

// const mapStateToProps = (state) => {
//   return {
//     counter: state.value,
//   };
// };
//export default connect(mapStateToProps, actions)(Counter);

export default Counter;