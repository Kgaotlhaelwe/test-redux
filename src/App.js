import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';
import SignUp from './components/signUp';
import Login from './components/Login'
import Add from './components/Add'
import { useEffect , useState} from 'react';
import { getUsers } from './firestore/firestoreReducer';

function App() {



  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [data, setData] = useState([])


  useEffect (()=>{
    const data = dispatch(getUsers());
    console.log(dispatch(getUsers()));
  }, [])
  return (
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

export default App;
