import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout>
      <div id="mainPage" className="flex justify-between h-[90vh]">
        <div id="left_box">
          <div
            id="first_choose_bar"
            className="flex border-2 h-[120px] w-[400px] text-3xl font-bold"
          >
            <div className="flex justify-center items-center bg-red-200 hover:bg-blue-200 w-full h-full border-r-2">
              연령대
            </div>
            <div className="flex justify-center items-center bg-red-200 hover:bg-blue-200 w-full h-full">
              평균가
            </div>
          </div>
          <div id="select_box_bar" className="bg-purple-200 h-[70vh] w-[400px]">
            <select name="a" id="a">
              aaa
            </select>
          </div>
        </div>
        <div id="map">====================</div>
      </div>
    </Layout>
  );
};

export default Home;
