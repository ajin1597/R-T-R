import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout>
      <div id="mainPage" className="flex justify-between h-[100vh]">
        <div id="left_box">
          <div
            id="first_choose_bar"
            className="flex justify-around border-2 p-2 bg-red-200"
          >
            <div>연령대 비율</div>
            <div>평균가</div>
          </div>
        </div>
        <div id="map">====================</div>
      </div>
    </Layout>
  );
};

export default Home;
