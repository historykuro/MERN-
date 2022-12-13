import React from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  React.useEffect(() => {
    const token = user?.token;

    // JWT
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate.push("/");
  };

  // console.log(user);

  //   //   {/* <h4 className="flex justify-center items-center text-white h-20 py-[5px] mb-5 bg-slate-900">
  //   //     Blog
  //   //   </h4> */}

  //   //   <nav class="bg-white border-gray-200 bg-[#1f2937]">
  //   //     <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
  //   //       <a href="#" class="flex items-center">
  //   //         <img
  //   //           src="https://flowbite.com/docs/images/logo.svg"
  //   //           class="h-6 mr-3 sm:h-9"
  //   //           alt="Flowbite Logo"
  //   //         />
  //   //         <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
  //   //           Blog
  //   //         </span>
  //   //       </a>
  //   //       <div class="flex items-center">
  //   //         {/* <Login /> */}
  //   //         <button
  //   //           href="#"
  //   //           //   onClick={handleLogin}
  //   //           class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
  //   //           Login
  //   //         </button>
  //   //       </div>
  //   //     </div>
  //   //   </nav>
  //   // </div>

  //   <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-slate-900">
  //     <div class="container flex flex-wrap items-center justify-between mx-auto">
  //       <a href="#" class="flex items-center">
  //         <img
  //           src="https://flowbite.com/docs/images/logo.svg"
  //           class="h-6 mr-3 sm:h-9"
  //           alt="Flowbite Logo"
  //         />
  //         <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
  //           Blog
  //         </span>
  //       </a>
  //       <div class="flex items-center md:order-2">
  //         <button
  //           type="button"
  //           class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
  //           id="user-menu-button"
  //           aria-expanded="false"
  //           data-dropdown-toggle="user-dropdown"
  //           data-dropdown-placement="bottom">
  //           <span class="sr-only">Open user menu</span>
  //           <img
  //             class="w-8 h-8 rounded-full"
  //             src="/docs/images/people/profile-picture-3.jpg"
  //             alt="user photo"
  //           />
  //         </button>
  //         <div
  //           class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
  //           id="user-dropdown">
  //           <div class="px-4 py-3">
  //             <span class="block text-sm text-gray-900 dark:text-white">
  //               Bonnie Green
  //             </span>
  //             <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
  //               name@flowbite.com
  //             </span>
  //           </div>
  //           <ul class="py-1" aria-labelledby="user-menu-button">
  //             <li>
  //               <a
  //                 href="#"
  //                 class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
  //                 Dashboard
  //               </a>
  //             </li>
  //             <li>
  //               <a
  //                 href="#"
  //                 class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
  //                 Settings
  //               </a>
  //             </li>
  //             <li>
  //               <a
  //                 href="#"
  //                 class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
  //                 Earnings
  //               </a>
  //             </li>
  //             <li>
  //               <a
  //                 href="#"
  //                 class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
  //                 Sign out
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //         <button
  //           data-collapse-toggle="mobile-menu-2"
  //           type="button"
  //           class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  //           aria-controls="mobile-menu-2"
  //           aria-expanded="false">
  //           <span class="sr-only">Open main menu</span>
  //           <svg
  //             class="w-6 h-6"
  //             aria-hidden="true"
  //             fill="currentColor"
  //             viewBox="0 0 20 20"
  //             xmlns="http://www.w3.org/2000/svg">
  //             <path
  //               fill-rule="evenodd"
  //               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
  //               clip-rule="evenodd"></path>
  //           </svg>
  //         </button>
  //       </div>
  //       <div
  //         class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
  //         id="mobile-menu-2">
  //         <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
  //           <li>
  //             <a
  //               href="#"
  //               class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
  //               aria-current="page">
  //               Home
  //             </a>
  //           </li>
  //           <li>
  //             <a
  //               href="#"
  //               class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
  //               About
  //             </a>
  //           </li>
  //           <li>
  //             <a
  //               href="#"
  //               class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
  //               Services
  //             </a>
  //           </li>
  //           <li>
  //             <a
  //               href="#"
  //               class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
  //               Pricing
  //             </a>
  //           </li>
  //           <li>
  //             <a
  //               href="#"
  //               class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
  //               Contact
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    Dashboard
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Team
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Projects
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Calendar
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Reports
                  </a>
                </div>
              </div>
            </div>
            {user ? (
              <div className="flex items-center">
                <h1 className="mr-3 text-red-300">{user.result.username}</h1>
                <div className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  <Link to="/SignIn" onClick={logout}>
                    Logout
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex">
                <div className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  <Link to="/SignIn">Login</Link>
                </div>
                <div className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  <Link to="/Register">Register</Link>
                </div>
              </div>
            )}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Header;
