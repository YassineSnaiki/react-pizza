import { Outlet } from "react-router-dom";
import Header from "./Header";
import Cart from "../features/Cart";

function AppLayout() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="mx-auto w-[768px] overflow-scroll">
        <Outlet />
      </main>
      <Cart />
    </div>
  );
}

export default AppLayout;
