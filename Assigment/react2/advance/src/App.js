

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Conditional Rendering/Login';
import VotingEligibility from './Conditional Rendering/VotingEligibility';
import Clickbutton from './Handling Events/Clickbutton';
import Counter from './Handling Events/Counter';
import Home from './React Router/Home';
import About from './React Router/About';
import Homee from './React Router/router2/Homee';
import Aboutes from './React Router/router2/Aboutes';
import Contects from './React Router/router2/Contects';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     {/* <Clickbutton/> */}
     {/* <Counter/> */}
     {/* <Login/> */}
     {/* <VotingEligibility/> */}

    </div>


    <Routes>
      <Route path="/Homee" element={<Homee/>} />
      <Route path="/Aboute" element={<Aboutes/>} />
      <Route path="/Contects" element={<Contects/>} />


    </Routes>
    </BrowserRouter>
  );
}

export default App;
