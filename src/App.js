import './App.css';
import '@jetbrains/ring-ui/dist/style.css';
import Login from './components/Login';
import MyHeader from './components/MyHeader';
import Footer from "./components/footer"
import Sidebar from './components/dashboard/Sidebar';
import CreateTicket from './components/dashboard/tickets/CreateTicket';
import { useMemo, useState } from 'react';


function App() {
  const [count, setCounter] = useState(0);
  const [count2, setCounter2] = useState(0);
  const dummy = () => {
    console.log("dummy");
    return count;
  }
  return (
    <div className='App' >
      {dummy()}
      <button onClick={() => setCounter(count + 1)}>Increase Count</button>

      {count2}
      <button onClick={() => setCounter2(count2 + 1)}>Increase Count 2</button>
      {/* <MyHeader/> */}
      <Sidebar>
        <MyHeader />
        <CreateTicket />
      </Sidebar>
      {/* <Login />
      <Footer /> */}

    </div>
  );
}
export default App;
