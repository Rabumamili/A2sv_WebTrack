import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

export const options: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			profile(profile) {
				return {
					...profile,
					id: profile.sub,
					role: "Google User",
				};
			},
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				if (!credentials) return null;

				try {
					const res = await fetch("https://akil-backend.onrender.com/login", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							email: credentials.email,
							password: credentials.password,
						}),
					});

					const user = await res.json();

					if (!res.ok || !user) {
						throw new Error(user?.message || "Invalid credentials");
					}

					// Ensure user contains all required fields
					return {
						...user,
						role: "user",
						token: user.token, // Make sure to store the token
					};
				} catch (error) {
					console.error("Authorization error:", error);
					return null;
				}
			},
		}),
	],
	callbacks: {
		
		
		async jwt({ token, user }: { token: any; user: User | AdapterUser }) {
			if (user) {
				token.user = user;
				token.accessToken = (user as any).data?.accessToken; // Store the JWT from the backend
				// console.log("user Token", token);
			}
			return token;
		},
		async session({ session, token }: { session: any; token: any }) {
			if (token.user) {
				session.user = token.user;
				session.user.accessToken = (token.user as any).data?.accessToken; // Pass the access token to the session
			}
			return session;
		},
	},
	
	pages: {
		signIn: "/signin",
	},
};
