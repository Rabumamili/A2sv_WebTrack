"use client";

import React from "react";

const Header: React.FC<{ num: number }> = ({ num }) => {
	return (
		<header className="flex p-5 justify-between mb-5 pt-5">
			<div>
				<h1 className="text-3xl font-black">Opportunities</h1>
				<p className="text-xs pt-1 text-gray-500 ml-1">Showing {num} results</p>
			</div>
			
		</header>
	);
};

export default Header;
