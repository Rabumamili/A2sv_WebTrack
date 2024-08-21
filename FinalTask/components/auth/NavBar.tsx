import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import userImg from "@/public/assets/user.png";

const NavBar = async () => {
  const session = await getServerSession(options);

  return (
    <div className="fixed w-full text-center">
      <nav
        className="flex justify-between items-center p-4 md:px-10 border-solid border-2 shadow-lg"
        style={{
          height: "80px",
          backgroundImage:
            "linear-gradient(to bottom right, hsla(203, 92%, 35.5%, 0.25), hsl(270, 60%, 15%), hsla(27.6, 87.1%, 35.7%, 0.25))",
          backgroundColor: "hsl(270, 60%, 15%)",
        }}
      >
        <div className="text-xl px-20">
          <Link className="font-bold text-white hover:text-yellow-400 transition-all duration-300" href="/">
            Job List
          </Link>
        </div>
        <div className="flex gap-8 items-center">
          {session ? (
            <>
              <Link
                href="/bookmarks"
                className="text-white font-bold hover:text-yellow-400 transition-all duration-300"
              >
                Bookmarks
              </Link>
              <div className="flex gap-3 items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Image
                  src={
                    session.user && session.user.data && session.user.data.profilePicUrl
                      ? session.user.data.profilePicUrl
                      : userImg
                  }
                  alt="profile pic"
                  width={"40"}
                  height={"40"}
                  className="rounded-full border-4 border-white shadow-md"
                />
                <div className="text-white font-bold text-lg">
                  {session.user && session.user.data ? session.user.data.name : "Guest"}
                </div>
              </div>

              <Link
                href="/api/auth/signout?callbackUrl=/"
                className="bg-white text-red-600 font-bold hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:text-white transition-all duration-500 px-5 py-2 rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/api/auth/signin?callbackUrl=/dashboard"
                className="bg-white text-green-600 font-bold hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 hover:text-white transition-all duration-500 px-5 py-2 rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-white text-blue-600 font-bold hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all duration-500 px-5 py-2 rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
