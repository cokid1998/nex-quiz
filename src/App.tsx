import { BrowserRouter, Route, Routes } from "react-router";
import Root from "./page/Root";
import Menu from "./page/Menu";
import Cafe from "./page/Cafe";
import Discount from "./page/Discount";
import Layout from "./components/base/Layout";
import { HOME, MENU, CAFE, DISCOUNT } from "@/constants/url";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<Root />} />
          <Route path={MENU} element={<Menu />} />
          <Route path={CAFE} element={<Cafe />} />
          <Route path={DISCOUNT} element={<Discount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
