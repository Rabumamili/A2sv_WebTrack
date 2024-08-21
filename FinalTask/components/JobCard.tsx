import React from "react";
import Image from "next/image";
import { JobDetails } from "@/types/JobDetails";
import { useSession } from "next-auth/react";
import imageMap from "../assets/ImageMap"

interface JobCardProps {
	job: JobDetails;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
	const { data: session } = useSession();
	const imageSrc = job.logoUrl || imageMap['job1.png'];

	function capitalizeFirstLetter(string: string): string {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<div className="p-6 rounded-2xl cursor-pointer mb-5 mr-3 hover:bg-slate-100">
			<div className="flex">
				<Image
					className="h-[59px] w-[66px]"
					src={imageSrc}
					alt="job image"
					width={66}  // Specify width
					height={59} // Specify height
				/>

				<div className="ml-8">
					<h2 className="font-bold">{job.title}</h2>
					<p className="text-gray-400 text-sm py-2">
						{job.orgName} . {job.location}
					</p>
				</div>
			</div>
			<div className="pl-20 text-sm">
				<div className="pr-3">
					<span>{job.description}</span>
				</div>
				<div className="flex gap-2 items-center w-auto h-8 mt-3">
					<p className="flex items-center bg-[#56CDAD1A] text-xs text-[#56CDAD] rounded-2xl h-full w-[76px] py-1 px-2">{capitalizeFirstLetter(job.opType)}</p>
					<p>|</p>
					<p className="flex justify-center items-center text-xs text-yellow-500 border-yellow-500 w-auto border rounded-2xl h-full py-1 px-2 text-nowrap">{job.categories?.[0]? job.categories[0]:"NA"}</p>
					{job.categories?.[1] && (
						<p className="flex justify-center items-center text-xs text-blue-900 border-blue-900 w-auto border rounded-2xl h-full py-1 px-2 text-nowrap">{job.categories[1]}</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default JobCard;
