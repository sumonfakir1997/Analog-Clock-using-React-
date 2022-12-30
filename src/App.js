
import './App.css';
import Clock from './Clock'
// import ClockApp from './ClockApp';
const App =() => {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      Todo App
      <Clock/>
      {/* <ClockApp/> */}
    </h1>
    </div>
  );
}

export default App;
