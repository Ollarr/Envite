import './App.css';
import Home from './pages/Home';
import Create from './pages/Create'
import Events from './pages/Events'
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
         <Route path="create" element={ <Create/> } />
        <Route path="events" element={ <Events/> } />
    </Routes>
      {/* <Home />
      <Create />
      <Events />  */}
    </div>

  );
}

export default App;
