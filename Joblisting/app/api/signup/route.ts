import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
	const { name, email, password, confirmPassword } = await req.json();

	try {
		const response = await fetch("https://akil-backend.onrender.com/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				password,
				confirmPassword,
				role: "user",
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			return NextResponse.json(
				{ message: data.message || "Signup failed" },
				{ status: response.status }
			);
		}

		return NextResponse.json({ user: data }, { status: 201 });
	} catch (error) {
		console.error("Signup error:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
