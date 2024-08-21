"use client";

import React from "react";
import Dashboard from "@/components/Dashboard";
import SignIn from "@/components/SignIn";
import { useSession } from "next-auth/react";
import SignUp from "@/components/SignUp";

const Page = () => {
	const { data: session } = useSession();

	return session ? <Dashboard /> : <SignIn />;
};

export default Page;
