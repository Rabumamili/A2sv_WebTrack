import React from "react";
interface Nums {
	num: number;
}

const header: React.FC<Nums> = ({ num }) => {
	return (
		<header className="flex p-5 justify-between mb-5 pt-5">
			<div>
				<h1 className="text-3xl font-black">Opportunities</h1>
				<p className="text-xs pt-1 text-gray-500 ml-1">Showing {num} results</p>
			</div>
			<div className="pt-4">
				<div>
					<form action="">
						<label htmlFor="jobs" className=" text-gray-500">
							Sort by:{" "}
						</label>
						<select
							name="job"
							id="jobs"
							className="bg-gray-100 rounded-lg border-none outline-none text-sky-900"
						>
							<option value="most-relevant">Most relevant</option>
							<option value="most-viewed">names</option>
						</select>
					</form>
				</div>
			</div>
		</header>
	);
};

export default header;
