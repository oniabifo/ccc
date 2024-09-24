import React from 'react'

export default function Header({ className = '' }) {
    return (
        <div
            className={`ud-header absolute left-0 top-0 z-40 flex w-full items-center ${className}`}
        >
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <a href="/" className="navbar-logo block w-full py-5 font-black text-2xl"
                            id="navbarLogo">
                            LOGO
                            {/* <img
                  src="assets/images/logo/logo-white.svg"
                  alt="logo"
                  className="header-logo w-full"
                /> */}
                        </a>
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <button
                                id="navbarToggler"
                                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                            >
                                <span
                                    className="relative my-[6px] block h-[2px] w-[30px] bg-white"
                                ></span>
                                <span
                                    className="relative my-[6px] block h-[2px] w-[30px] bg-white"
                                ></span>
                                <span
                                    className="relative my-[6px] block h-[2px] w-[30px] bg-white"
                                ></span>
                            </button>
                            <nav
                                id="navbarCollapse"
                                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6"
                            >
                                <ul className="block lg:flex 2xl:ml-20">
                                    <li className="group relative">
                                        <a
                                            href="/"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-red-500 dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="/#about"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="/#consulting-services"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                                        >
                                            Consulting Services
                                        </a>
                                    </li>
                                    {/* <li className="group relative">
                      <a
                        href="#team"
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                      >
                        Team
                      </a>
                    </li> */}
                                    <li className="group relative">
                                        <a
                                            href="/#contact"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                                        >
                                            Contact
                                        </a>
                                    </li>

                                    <li className="group relative">
                                        <a
                                            href="/what-we-do"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                                        >
                                            What we do
                                        </a>
                                    </li>
                                    {/* <li className="group relative">
                      <a
                        href="#"
                        className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                      >
                        Blog
                      </a>
                    </li> */}
                                </ul>
                            </nav>
                        </div>
                        <div className="flex items-center justify-end pr-16 lg:pr-0">
                            {/* <div className="hidden sm:flex">
                  <a
                    href="#"
                    className="signUpBtn rounded-md bg-primary bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                  >
                    Request a demo
                  </a>
                </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
