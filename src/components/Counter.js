import { connect } from "react-redux";
import * as actions from '../actions'
//import { bindActionCreators } from "redux";
const Counter = ({counter,inc,dec,rnd}) => {
  return (
    <>
      <div class="jumbotron">
        <h1>{counter}</h1>
        <button onClick={dec} className="btn btn-btn-primary">
          DEC
        </button>
        <button onClick={inc} className="btn btn-btn-primary">
          IMC
        </button>
        <button onClick={rnd} className="btn btn-btn-primary">
          RND
        </button>
      </div>
      ;
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: state.value,

  }
}

// const mapDispatchToProps = (dispatch) => {
//   const {inc,dec,rnd} = bindActionCreators(actions,dispatch)
//   return { inc, dec, rnd }
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// };

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);

export default connect(mapStateToProps, actions)(Counter);