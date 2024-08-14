import React from "react";

const header = () => {
	return (
		<header className="flex p-5 justify-between">
			<div>
				<h1 className="text-3xl font-black">Opportunities</h1>
				<p className="text-xs pt-1 text-gray-500 ml-1">Showing 73 results</p>
			</div>
			<div className="pt-4">
				<div>
					<label htmlFor="jobs" className=" text-gray-500">
						Sort by:{" "}
					</label>
					<select name="job" id="jobs">
						<option value="most-relevant">Most relevant</option>
						<option value="most-viewed">Most viewed</option>
					</select>
				</div>
			</div>
		</header>
	);
};

export default header;
