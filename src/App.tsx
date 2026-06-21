import { BrowserRouter, Route, Routes } from "react-router";
import Menu from "./page/Menu";
import Cafe from "./page/Cafe";
import Discount from "./page/Discount";
import Layout from "./components/base/Layout";
import { MENU, CAFE, DISCOUNT } from "@/constants/url";
import MenuQuizProvider from "@/Provider/MenuQuizProvider";
import CafeQuizProvider from "@/Provider/CafeQuizProvider";
import DiscountQuizProvider from "@/Provider/DiscountQuizProvider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MENU} element={<Layout />}>
          <Route
            index
            element={
              <MenuQuizProvider>
                <Menu />
              </MenuQuizProvider>
            }
          />
          <Route
            path={CAFE}
            element={
              <CafeQuizProvider>
                <Cafe />
              </CafeQuizProvider>
            }
          />
          <Route
            path={DISCOUNT}
            element={
              <DiscountQuizProvider>
                <Discount />
              </DiscountQuizProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
