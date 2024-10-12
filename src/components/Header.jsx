import React from "react";

function Header () {
    return (
        <>
        <header>
            <nav className="bg-orange-400  px-4 lg:px-6 py-5">
                <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
                    <a className="flex items-center">
                    <img src="https://image.tmdb.org/t/p/original/g6z3xEHsJp2sKMRZn3or5ZuL0X3.svg" className="mr-6 h-20 w-100" />
                    </a>
                </div>
            </nav>
        </header>
        </>
        );
    }

export default Header