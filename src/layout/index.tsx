import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import PageLoading from "@/components/Loading/PageLoading";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div id="layout" className="bg-[#61bbc5]">
      <Header />
      <div >
        <Suspense fallback={<PageLoading />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />

    </div>
  );
}
