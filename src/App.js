import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//components and pages imported
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
    <Router>
      <Routes> 
        <Route path="/" exact element={<LandingPage/>}></Route>
        <Route path ='/home' element={<Home/>}></Route> 

        {/* <Route path ='/about' element={<About/>}></Route> 
        <Route path ='/help' element={<Help/>}></Route>
        <Route path ='/schema' element={<Schema/>}></Route>
        <Route path ='schema/table1' element={<Table1/>}></Route>
        <Route path ='schema/table2' element={<Table2/>}></Route>
        <Route path ='schema/table3' element={<Table3/>}></Route> */}
        
      </Routes>
      
    </Router>
  </div>
  )
}

export default App