import React from "react";
import { signOut } from "next-auth/react";

const SignOut = () => {
	return (
		<div className="flex justify-end">
			<button
				onClick={() => signOut({ callbackUrl: "/" })}
				className="flex justify-center text-center border-solid border-2 border-blue-200 p-1 rounded-md cursor-pointer mt-2  hover:border-blue-400"
			>
				Log Out
			</button>
		</div>
	);
};

export default SignOut;
