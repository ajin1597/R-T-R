import type { NextPage } from "next";
import Layout from "../components/Layout";
import Map from "../components/Map";

const Home: NextPage = () => {
  return (
    <Layout>
      <div id="mainPage" className="flex justify-between">
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
        <div className="h-full w-full">
          <Map latitude={36.7931172} longitude={127.1266442}></Map>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
