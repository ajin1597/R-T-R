import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useReducer } from "react";

export default function Layout(props: any) {
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <div className="h-[100vh] w-[1300px] p-6 bg-gray-300">
        <div id="title_Layout" className="  flex justify-between text-2xl ">
          <div id="title_left_bar">a</div>
          <nav
            id="title_right_bar"
            className="flex justify-between w-[450px] border-l-4 pl-5 "
          >
            <Link href={"/"} id="first_page">
              <div className="hover:bg-blue-300">
                <div id="first_page_icon" className="flex justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
                <span>Home</span>
              </div>
            </Link>
            <Link href={"/search"} id="second_page">
              <div className="hover:bg-blue-300">
                <div id="second_page_icon" className="flex justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <span>Search</span>
              </div>
            </Link>
            <Link href={"/mypage"} id="third_page">
              <div className="hover:bg-blue-300">
                <div id="third_page_icon" className="flex justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span>MY Page</span>
              </div>
            </Link>
            <Link href={"/logIn"} id="fourth_page">
              <div className="hover:bg-blue-300">
                <div id="fourth_page_icon" className="flex justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                </div>
                <span>LOG IN</span>
              </div>
            </Link>
          </nav>
        </div>
        <div className="h-[93vh] w-[1250px] p-6">{props.children}</div>
      </div>
    </div>
  );
}
