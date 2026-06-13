import { BrowserRouter, Route, Routes } from "react-router";
import Menu from "./page/Menu";
import Cafe from "./page/Cafe";
import Discount from "./page/Discount";
import Layout from "./components/base/Layout";
import { MENU, CAFE, DISCOUNT } from "@/constants/url";
import MunuRecipeProvider from "@/Provider/MunuRecipeProvider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MENU} element={<Layout />}>
          <Route
            index
            element={
              <MunuRecipeProvider>
                <Menu />
              </MunuRecipeProvider>
            }
          />
          <Route path={CAFE} element={<Cafe />} />
          <Route path={DISCOUNT} element={<Discount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
