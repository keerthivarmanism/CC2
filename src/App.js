import logo from './logo.svg';
import './App.css';
import Edit from './components/edit';
import Appbar from './components/appbar';
import TextFields from './components/textfield';
import Home from './components/display';
import Display from './components/display';
import { Route,  Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<TextFields/>}> </Route>
        <Route path ="/display" element={<Display/>}> </Route>
        <Route path="/display/edit/:id" element={<Edit/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
