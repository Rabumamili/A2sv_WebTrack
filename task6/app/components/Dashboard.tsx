"use client";
import Header from "./Header";
import JobCard from "./JobCard";
import useJobData from "../../utils/JobData";
import Link from "next/link";

const Dashboard = () => {
	const jobData = useJobData();

	return (
		<div className="m-5 h-full w-full max-w-6xl pl-5">
			<Header />

			{jobData?.map((job, index) => (
				<Link href={`/JobDes/${index}`} key={index}>
					<JobCard job={job} key={index} />
				</Link>
			))}
		</div>
	);
};

export default Dashboard;
