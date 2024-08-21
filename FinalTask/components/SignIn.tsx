"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

interface FormValues {
	email: string;
	password: string;
}

const SignIn = () => {
	const { register, handleSubmit, formState } = useForm<FormValues>();
	const { errors } = formState;
	const [authError, setAuthError] = useState<string | null>(null);

	const onSubmit = async (formData: FormValues) => {
		setAuthError(null); // Clear any previous authentication errors

		const result = await signIn("credentials", {
			email: formData.email,
			password: formData.password,
			redirect: false,
		});

		if (result?.error) {
			// Handle error
			setAuthError("Email not registered or incorrect password");
		} else {
			// Redirect to dashboard on successful login
			window.location.href = "/dashboard";
		}
	};

	return (
		<div className="pt-16">
			<div className="text-center pt-8">
				<div className="pt-5">
					<h1 className="text-3xl font-black">Welcome Back {}</h1>
				</div>
				<div className="flex justify-center">
					<div className="flex justify-center items-center p-5 w-1/4 ">
						<div className="flex items-center w-full max-w-lg">
							<div className="flex grow h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 dark:border-gray-400 "></div>
							<div className="flex-shrink-0 text-center text-sm text-gray-400 px-16"></div>
							<div className="flex grow h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 dark:border-gray-400 "></div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center ">
				<form
					className="lg:w-1/4 md:w-1/2 sm:w-1/2"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="pt-3">
						<div className="font-semibold text-blue-900 py-2 p-1">
							<label htmlFor="email">Email Address</label>
						</div>
						<input
							type="email"
							placeholder="Enter email address"
							className="border-2 border-solid border-gray-200 p-3 rounded-lg outline-none w-full hover:border-gray-400"
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: /^[^@ ]+@[^@ ]+.[^@ .]{2,}$/,
									message: "Email is not valid",
								},
							})}
						/>
						{errors.email && (
							<p className="text-sm text-blue-500 p-1">
								{errors.email.message}
							</p>
						)}
					</div>
					<div className="pt-3">
						<div className="font-semibold text-blue-900 py-2 p-1">
							<label htmlFor="password">Password</label>
						</div>
						<input
							type="password"
							placeholder="Enter password"
							className="border-2 border-solid border-gray-200 p-3 rounded-lg outline-none w-full hover:border-gray-400"
							{...register("password", {
								required: "Password is required",
								minLength: {
									value: 6,
									message: "Password should be at least 6 characters",
								},
							})}
						/>
						{errors.password && (
							<p className="text-sm text-blue-500 p-1">
								{errors.password?.message}
							</p>
						)}
					</div>
					<div className="pt-3 ">
						{authError && (
							<p className="text-sm text-blue-500 py-1 text-center ">
								{authError}
							</p>
						)}
					</div>
					<div className="flex justify-center py-5 w-full">
						<button
							type="submit"
							className="bg-gradient-to-r from-sky-600 to-blue-500 text-white font-semibold rounded-full p-3 px-10 w-full hover:bg-gradient-to-r from-sky-700 to-blue-600"
						>
							Login
						</button>
					</div>
				</form>
			</div>
			<div className="flex justify-center gap-x-2">
				<div className="text-gray-500">Don&apos;t have an account?</div>
				<div className="text-sky-600 font-bold cursor-pointer hover:text-sky-700">
					<Link href="/signup">Sign Up</Link>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
