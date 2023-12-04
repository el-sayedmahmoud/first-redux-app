import { useSelector , useDispatch} from "react-redux";
import { increment ,decrement,login,logout } from "./store/actions";

function App() {
  const count = useSelector(state => state.counter.count)
  const isLogged = useSelector(state => state.logged.logged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header>
        <div>{count}</div>
        {isLogged ?(<button onClick={()=>dispatch(logout())}>logout</button>
          ) : (
          <button onClick={()=>dispatch(login())}>login</button>)}
          
          
        
      </header>
      <div className="counter">
      <button onClick={()=>dispatch( increment())}> + </button>
      <button onClick={()=>dispatch( increment(2))}> +2 </button>
      <button onClick={()=>dispatch( decrement())}> - </button>
      </div>
    </div>
  );
}

export default App;
