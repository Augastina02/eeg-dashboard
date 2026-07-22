import Sidebar from "./components/layout/Sidebar";

import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Dataset from "./pages/Dataset/Dataset";
import ModelSelection from "./pages/ModelSelection/ModelSelection";

function App() {

  return (

    <div className="app">

      <Sidebar />

      <main
        style={{
          flex:1,
          padding:"35px",
          background:"#F5F7FA",
          overflowY:"auto"
        }}
      >

        <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route path="/dataset" element={<Dataset />} />

          <Route path="/model-selection" element={<ModelSelection />} />

        </Routes>

      </main>

    </div>

  );

}

export default App;