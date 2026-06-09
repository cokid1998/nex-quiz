import { BrowserRouter, Route, Routes } from "react-router";
import Root from "./page/Root";
import Menu from "./page/Menu";
import Cafe from "./page/Cafe";
import Discount from "./page/Discount";
import Layout from "./components/base/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Root />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/discount" element={<Discount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
