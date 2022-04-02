import Calendar from './components/Calendar'
import './App.css';

function App() {
  const now = new Date();

  return (
    <Calendar date={now} />
  );
}

export default App;
