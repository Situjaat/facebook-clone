import './App.css';

import Navbar from './components/layout/navbar/Navbar';
import Sidebar from './components/layout/sidebar/Sidebar';
import Main from './components/layout/main/Main';




function App (){
  return(
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Main/>
    </div>
  )
}



export default App;
