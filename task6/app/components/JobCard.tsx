"use client";

import React from "react";
import Image from "next/image";
import { CardData } from "@/types/CardData";

interface JobCardProps {
	job: CardData;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
	return (
		<div className="p-5 border-solid border-2 border-sky-200 rounded-2xl cursor-pointer mb-5">
			<div className="flex">
				<Image
					src={job.image}
					alt="Job Image"
					width={50}
					height={50}
					className="py-1"
				/>
				<div className="ml-8">
					<h2 className="font-bold">{job.title}</h2>
					<p className="text-gray-400 text-sm py-2">
						{job.company}
					</p>
				</div>
			</div>
			<div className="pl-20 text-sm">
				<div className="pr-20">
					<span>{job.description}</span>
				</div>
				<div className="flex gap-2 mt-7">
					<button className="rounded-xl p-2 border-solid border-2 border-green-300 text-green-500">
						In Person
					</button>
					<span className="text-4xl font-light text-gray-300">|</span>
					<button className="rounded-xl p-2 border-solid border-2 border-yellow-300 text-yellow-500">
						Education
					</button>
					<button className="rounded-xl p-2 border-solid border-2 border-blue-300 text-blue-500 w-12">
						IT
					</button>
				</div>
			</div>
		</div>
	);
};

export default JobCard;
