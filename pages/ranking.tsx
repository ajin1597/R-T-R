import type { NextPage } from "next";
import { useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout>
      <div id="Ranking">
        <div id="top">
          <div
            id="second_choose_bar"
            className=" bg-purple-200 h-[12vh] pt-[100px] "
          >
            <div id="all_SelectBox" className="flex flex-col"></div>
          </div>
        </div>
        <div
          id="bottom"
          className="flex justify-around h-[72vh] w-full bg-blue-200"
        >
          <div className="text-2xl p-2">20대가많음</div>
          <div className="text-2xl p-2">30대가많음</div>
          <div className="text-2xl p-2">40대가많음</div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
