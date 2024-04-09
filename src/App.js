import logo from './logo.svg';
import './App.css';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import View from './SortingVisualizer/Performance';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import New from './SortingVisualizer/ui';
import Algo from './SortingVisualizer/algo';
import Link from './SortingVisualizer/links';
import Flow from './SortingVisualizer/flow'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/visualization" element={<SortingVisualizer />} />
          <Route path="/view" element={<View />} />
          <Route path="/" element={<New />} />
          <Route path="/algo" element={<Algo />} />
          <Route path="links" element={<Link />} />
          <Route path="/flow" element={<Flow />} />

        </Routes>
      </Router>


    </div>
  );
}


export default App;