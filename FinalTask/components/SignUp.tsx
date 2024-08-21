"use client";

import React, { useState } from "react";
import Image from "next/image";
import GoogleLogo from "@/public/assets/google.png";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import VerifyEmail from "./VerifyEmail";

interface FormValues {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	role: string;
}

const SignUp = () => {
	const [isSignUp, setIsSignUp] = useState<boolean>(true);
	const [data, setData] = useState<FormValues | null>(null);
	const [errorMessage, setErrorMessage] = useState<string>("");

	const { register, handleSubmit, formState, watch } = useForm<FormValues>();
	const { errors, isSubmitting } = formState;

	const onSubmit = async (formData: FormValues) => {
		console.log("Data:", formData);

		setData(formData);

		try {
			const res = await fetch("/api/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await res.json();

			if (res.ok) {
				setIsSignUp(false);
			} else {
				console.log("Signup failed", data.message);
				setErrorMessage(data.message);
			}
		} catch (error) {
			console.log("Error during signup", error);
		}
	};

	return (
		<>
			{isSignUp ? (
				<div>
					<div className="text-center pt-14 ">
						<div className="p-5">
							<h1 className="text-3xl font-black">Sign Up Today!</h1>
						</div>
						<form>
							<div className="flex justify-center">
								<div className="flex justify-center md:w-1/4 w-1/2">
									<button
										type="button"
										name="action"
										value="google"
										onClick={() =>
											signIn("google", {
												redirect: false,
												callbackUrl: "/",
											})
										}
										className="flex justify-center text-center border-solid border-2 border-blue-200 p-1 rounded-md cursor-pointer w-full hover:border-blue-400"
									>
										<Image
											src={GoogleLogo}
											alt="google logo"
											width={15}
											height={15}
											className="py-2"
										/>
										<div className="text-center p-1.5 text-sm px-2 font-bold text-blue-800">
											Sign Up with Google
										</div>
									</button>
								</div>
							</div>
						</form>
						<div className="flex justify-center items-center p-2 ">
							<div className="flex items-center md:w-1/4 w-1/2">
								<div className="flex grow h-0.5 bg-gray-200 dark:border-gray-400"></div>
								<div className="flex-shrink-0 text-center text-sm text-gray-400 px-4">
									Or Sign Up with Email
								</div>
								<div className="flex grow h-0.5 bg-gray-200 dark:border-gray-400"></div>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<form
							className=" md:w-1/4  w-1/2"
							onSubmit={handleSubmit(onSubmit)}
						>
							<div>
								<div className="font-semibold text-blue-900  p-1">
									<label htmlFor="name">Full Name</label>
								</div>
								<input
									id="name"
									type="text"
									placeholder="Enter your full name"
									className="border-2 border-solid border-gray-200 p-2 rounded-lg outline-none w-full hover:border-gray-400"
									{...register("name", {
										required: { value: true, message: "Full name is required" },
									})}
								/>
								<p className=" text-blue-500 text-sm  p-1">
									{errors.name?.message}
								</p>
							</div>
							<div className="pt-1">
								<div className="font-semibold text-blue-900 p-1">
									<label htmlFor="email">Email Address</label>
								</div>
								<input
									id="email"
									type="email"
									placeholder="Enter email address"
									className="border-2 border-solid border-gray-200 p-2 rounded-lg outline-none w-full hover:border-gray-400"
									{...register("email", {
										required: { value: true, message: "Email is required" },
									})}
								/>
								<p className=" text-blue-500 text-sm  p-1">
									{errors.email?.message}
								</p>
							</div>
							<div className="pt-1">
								<div className="font-semibold text-blue-900 p-1">
									<label htmlFor="password">Password</label>
								</div>
								<input
									id="password"
									type="password"
									placeholder="Enter password"
									className="border-2 border-solid border-gray-200 p-2 rounded-lg outline-none w-full hover:border-gray-400"
									{...register("password", {
										required: { value: true, message: "Password is required" },
									})}
								/>
								<p className=" text-blue-500 text-sm  p-1">
									{errors.password?.message}
								</p>
							</div>
							<div className="pt-1">
								<div className="font-semibold text-blue-900 p-1">
									<label htmlFor="confirmPassword">Confirm Password</label>
								</div>
								<input
									id="confirmPassword"
									type="password"
									placeholder="Confirm password"
									className="border-2 border-solid border-gray-200 p-2 rounded-lg outline-none w-full hover:border-gray-400"
									{...register("confirmPassword", {
										required: {
											value: true,
											message: "Password confirmation is required",
										},
										validate: (value) =>
											value === watch("password") || "Passwords do not match",
									})}
								/>
								<p className=" text-blue-500 text-sm  p-1">
									{errors.confirmPassword?.message}
								</p>
							</div>
							<div>
								<p className="text-blue-500 text-sm  p-1">{errorMessage}</p>
							</div>
							<div className="flex justify-center py-1">
								<button
									type="submit"
									className="bg-sky-600 text-white font-semibold rounded-full p-3 px-10 w-full hover:bg-sky-700"
									disabled={isSubmitting}
								>
									Continue
								</button>
							</div>
						</form>
					</div>
					<div className="flex justify-center gap-x-2 text-sm py-1">
						<div className="text-gray-500  ">Already have an account?</div>
						<div className="text-sky-600 font-bold cursor-pointer hover:text-sky-700">
							<Link href="/signin">Login</Link>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="w-1/2 md:w-1/4 text-sm p-1  text-gray-400">
							By clicking &apos;Continue&apos;, you acknowledge that you have
							read and accepted our
							<span className="text-blue-800"> Terms of Service </span>
							and <span className="text-blue-800"> Privacy Policy</span>.
						</div>
					</div>
				</div>
			) : (
				<VerifyEmail
					name={data?.name || ""}
					email={data?.email || ""}
					password={data?.password || ""}
					confirmPassword={data?.confirmPassword || ""}
					role={data?.role || "user"}
				/>
			)}
		</>
	);
};

export default SignUp;
