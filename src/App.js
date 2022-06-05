import "./App.css";
import Header from './components/Header';

import { FaSpaceShuttle } from "react-icons/fa";

function App() {
  return (
    <>
    <header>
        <Header/>
    </header>
    <main>
    <div className="MultiChain-section bg-dark2">
    <h2 className="body-h2" > Want to launch your project on MultiChain? </h2>
    <a className="btn-apply" href="https://docs.google.com/forms/d/e/1FAIpQLSer-PUjhMDG5fmasXYkmvY3EgpTC-yaI4up5by6Hx5g_9wZaw/viewform" ><FaSpaceShuttle/>  Apply to Launch </a>
   </div>

   <div className="footer bg-dark2"> 
      <div className="container">
            <div className="rosadfw d-flex align-items-center justify-content-between">
                <p> Participants/Citizens from the following countries are strictly excluded/not allowed to participate in the IDOs: Bolivia, Cambodia, Iran, Iraq, Libya, Nepal, Zimbabwe, Liberia, Myanmar, North Korea.</p>
                <p>	&copy; Copyright MultiChain 2022. All rights reserved.</p>
            </div>    
        </div>
   </div>
    
   
 
    </main>


   
    </>
  );
}

export default App;
