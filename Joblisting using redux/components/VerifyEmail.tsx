"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface VerifyEmailProps {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	role: string;
}

const VerifyEmail: React.FC<VerifyEmailProps> = ({
	name,
	email,
	password,
	confirmPassword,
	role,
}) => {
	// State to keep track of the code inputs
	const [code, setCode] = useState(["", "", "", ""]);
	// State to keep track of the countdown timer
	const [countdown, setCountdown] = useState(30);
	const [isResendEnabled, setIsResendEnabled] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	// Handler for input changes
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const { value } = e.target;

		// Update the code state with the new value
		const newCode = [...code];
		newCode[index] = value;

		// Set the updated code state
		setCode(newCode);

		// Move to the next input field automatically
		if (value && index < 3) {
			const nextInput = document.querySelector(
				`input[data-index="${index + 1}"]`
			) as HTMLInputElement;
			if (nextInput) nextInput.focus();
		}
	};

	// Concatenate the input values
	const getConcatenatedCode = () => code.join("");

	// Countdown timer logic
	useEffect(() => {
		if (countdown > 0) {
			const timer = setInterval(() => {
				setCountdown((prev) => prev - 1);
			}, 1000);

			return () => clearInterval(timer);
		} else {
			setIsResendEnabled(true);
		}
	}, [countdown]);

	// Handle resend code
	const handleResendCode = async () => {
		try {
			const response = await fetch(
				"https://akil-backend.onrender.com/resend-otp",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email }),
				}
			);

			if (!response.ok) {
				setError("Failed to resend OTP. Please try again later.");
				return;
			}

			setCountdown(30);
			setIsResendEnabled(false);
			setError(null); // Clear any previous errors
		} catch (error) {
			setError("Failed to resend OTP. Please try again later.");
		}
	};

	// Handle verify code
	const handleVerifyCode = async () => {
		const otp = getConcatenatedCode();

		try {
			const response = await fetch(
				"https://akil-backend.onrender.com/verify-email",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email, OTP: otp }),
				}
			);

			// Parse response
			const data = await response.json();
			console.log("data", data);
			if (!response.ok) {
				setError(data.message || "Invalid OTP. Please try again.");
				return;
			}

			// Log success for debugging
			console.log("OTP verification successful:", data);

			// On successful verification, redirect to dashboard
			router.push("/dashboard");
		} catch (error) {
			setError("Failed to verify OTP. Please try again later.");
			console.error("Verification error:", error);
		}
	};

	return (
		<div>
			<div>
				<div className="flex justify-center pt-24 ">
					<div className="font-black text-4xl text-gray-700">Verify Email</div>
				</div>
				<div className="flex justify-center">
					<div className="w-1/4 text-gray-400 text-sm">
						We&apos;ve sent a verification code to the email address you
						provided. To complete the verification process, please enter the
						code here.
					</div>
				</div>
			</div>
			<div className="flex justify-center gap-10 p-10">
				{code.map((_, index) => (
					<div key={index}>
						<input
							type="text"
							value={code[index]}
							onChange={(e) => handleChange(e, index)}
							maxLength={1}
							data-index={index}
							className="border-2 border-solid border-blue-200 rounded-lg w-20 p-4 text-center text-3xl text-gray-400 outline-none focus:border-blue-400"
						/>
					</div>
				))}
			</div>
			{error && (
				<div className="flex justify-center text-blue-400 mb-4">{error}</div>
			)}
			<div className="flex justify-center">
				<div className="text-sm p-3">
					You can request to{" "}
					<span
						onClick={handleResendCode}
						className={`text-blue-800 font-bold cursor-pointer ${
							isResendEnabled
								? "hover:text-blue-700"
								: "cursor-not-allowed opacity-50"
						}`}
					>
						Resend code{" "}
					</span>
					in{" "}
					<span className="text-blue-800 font-bold">{`0:${countdown
						.toString()
						.padStart(2, "0")}`}</span>
				</div>
			</div>
			<div className="flex justify-center p-3 mt-2">
				<button
					onClick={handleVerifyCode}
					className="mx-auto bg-sky-600 w-1/4 p-3 rounded-full text-white font-bold hover:bg-sky-500"
				>
					Continue
				</button>
			</div>
		</div>
	);
};

export default VerifyEmail;
