"use client";
import Header from "./Header";
import JobCard from "./JobCard";
import useJobData from "../../utils/JobData";
import Link from "next/link";

const Dashboard = () => {
	const { jobData, error, loading } = useJobData();

	return (
		<div className=" h-full w-full max-w-6xl pl-5 m-auto">
			<Header num={jobData?.length ?? 0} />

			{loading &&( <div className="flex flex-col justify-center items-center h-screen">
  <div className="relative">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
    <div className="absolute inset-0 flex justify-center items-center text-blue-500 font-semibold">
      <span>🔄</span>
    </div>
  </div>
  <p className="mt-4 text-lg text-blue-600">Loading, please wait...</p>
</div>

  )}
			{error && <div>Error: {error}</div>}
			{jobData &&
				jobData.length > 0 &&
				jobData.map((job, index) => (
					<Link href={`/JobDes/${index}`} key={index}>
						<JobCard job={job} key={index} />
					</Link>
				))}
			{jobData && jobData.length === 0 && <div>No job listings available</div>}
		</div>
	);
};

export default Dashboard;
