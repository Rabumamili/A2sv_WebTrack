import React from "react";
import Description from "../../../components/Description";

const page = ({ params }: { params: { jobId: number } }) => {
	return (
		<div>
			<Description id={params.jobId.toString()} />
		</div>
	);
};

export default page;
