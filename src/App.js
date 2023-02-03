import logo from './logo.svg';
import './App.css';
import {connect, useSelector,useDispatch } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';
import SignUp from './components/signUp';
import Login from './components/Login'
import Add from './components/Add'
import { useEffect , useState} from 'react';
//import {getUsers } from './firestore/firestoreReducer';
import { getUsersAction } from './firestore/firestoreAsyncAction'

function App({isUser}) {



  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [data, setData] = useState([])


  useEffect (()=>{
    dispatch(getUsersAction())
  }, [])

  
  return (
    console.log({isUser}),
    <div className="App">
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>

        <SignUp/>
        <Login/>
        <Add/>
      </div>
    </div>
  );
}
const stateToProps = (state) => {
  console.log({state:state
  });
  return {
    isUser: state.firestoreSlice.user,

  };
};
export default connect(stateToProps)(App);
// export default App;
