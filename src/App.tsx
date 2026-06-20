import { BrowserRouter, Route, Routes } from "react-router";
import Menu from "./page/Menu";
import Cafe from "./page/Cafe";
import Discount from "./page/Discount";
import Layout from "./components/base/Layout";
import { MENU, CAFE, DISCOUNT } from "@/constants/url";
import MenuProvider from "@/Provider/MenuRecipeProvider";
import CafeRecipeProvider from "@/Provider/CafeRecipeProvider";
import DiscountProvider from "@/Provider/DiscountProvider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MENU} element={<Layout />}>
          <Route
            index
            element={
              <MenuProvider>
                <Menu />
              </MenuProvider>
            }
          />
          <Route
            path={CAFE}
            element={
              <CafeRecipeProvider>
                <Cafe />
              </CafeRecipeProvider>
            }
          />
          <Route
            path={DISCOUNT}
            element={
              <DiscountProvider>
                <Discount />
              </DiscountProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
