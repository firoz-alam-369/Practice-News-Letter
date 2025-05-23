import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/MainLayout/LeftAside";
import RightAside from "../components/MainLayout/RightAside";
import Loading from "../Pages/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section className="w-11/12 mx-auto my-3">
        <LatestNews></LatestNews>
      </section>
      <nav className="w-11/12 mx-auto my-3">
        <Navbar></Navbar>
      </nav>

      <main className="w-11/12 mx-auto my-3  grid grid-cols-12 gap-5">
        <aside className="left_nav col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          {state == "loading" ? <Loading /> : <Outlet></Outlet>}
        </section>
        <aside className="right_nav col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
