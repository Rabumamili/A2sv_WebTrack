"use client";

import React from "react";

const Header: React.FC<{ num: number }> = ({ num }) => {
	return (
		<header className="flex p-5 justify-between mb-5 pt-5">
			<div>
				<h1 className="text-3xl font-black">Opportunities</h1>
				<p className="text-xs pt-1 text-gray-500 ml-1">Showing {num} results</p>
			</div>
			<div className="pt-4">
				<form>
					<label htmlFor="jobs" className="text-gray-500">
						Sort by:
					</label>
					<select
						name="job"
						id="jobs"
						className="bg-gray-100 rounded-lg border-none outline-none text-sky-900"
					>
						<option value="most-relevant">Most relevant</option>
						<option value="most-viewed">Most viewed</option>
					</select>
				</form>
			</div>
		</header>
	);
};

export default Header;
