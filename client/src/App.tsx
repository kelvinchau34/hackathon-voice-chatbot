import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Transfer from "./pages/Transfer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/transfer" element={<Transfer />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
