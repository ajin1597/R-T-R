import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout>
      <div id="LoginPage" className="flex justify-between h-[70vh] w-full">
        <div
          id="LoginBar"
          className="bg-red-200 pt-[20%] w-[60%] text-3xl flex flex-col items-center"
        >
          <span className="my-8">Log In</span>
          <div className="pb-5">
            <span className="pr-[37px]">Id</span>
            <input type="text" />
          </div>
          <div>
            <span className="pr-6">Pw</span>
            <input type="text" />
          </div>
          <div className="text-xl flex justify-end w-[400px] pt-4">
            <button className="border-2 p-2 rounded-2xl hover:bg-blue-200">
              로그인
            </button>
          </div>
        </div>
        <div
          id="SignUpBar"
          className="bg-blue-200 w-[40%] h-[70vh] text-3xl flex flex-col pt-8"
        >
          <div className="w-full flex justify-center">
            <span className="my-10 border-2 p-4 flex justify-center rounded-2xl w-[40%]">
              Sign Up
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="py-7">
              <span className="pr-[37px]">Id</span>
              <input type="text" />
            </div>
            <div className="py-7 ">
              <span className="pr-6">Pw</span>
              <input type="text" />
            </div>
            <div className="py-7 ">
              <span className="pr-3 pb-5">Age</span>
              <input type="text" />
            </div>
            <div className="text-xl flex justify-end w-[400px] pt-4">
              <button className="border-2 p-2 rounded-2xl hover:bg-blue-200">
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
