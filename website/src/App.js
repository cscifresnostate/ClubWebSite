import './App.css';
import Navbar from './Util/Navbar';
import Landing from './Pages/Landing/Landing'; 
import Proj1 from './Pages/2022/Proj1/Proj1';
import Proj2 from './Pages/2022/Proj2/Proj2';
import About from './Pages/About/About'
import { Route, Routes } from "react-router-dom"; 
import { About_path, Home_path, Proj1_path, Proj2_path } from './Util/constants';
import {Button} from 'react-bootstrap';


const App = () => {
  return (
    <div >
        <Navbar />
        <Routes>
          <Route path={Home_path} element={<Landing />} />
          <Route path={Proj1_path} element={<Proj1/>}/>
          <Route path={Proj2_path} element={<Proj2 />} />
          <Route path={About_path} element={<About/>} />
          <Route path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here, try another page!</p>
              </main>
            }
          />
        </Routes>
        <Button>  </Button>
    </div>
  );
}

export default App;
