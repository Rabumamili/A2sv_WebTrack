"use client";

import React from "react";
import useJobData from "@/utils/JobData";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaFire, FaPlus, FaRegCalendarCheck } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BsSkipStartBtn } from "react-icons/bs";

interface JobId {
	id: string;
}

const Description = ({ id }: JobId) => {
	const { jobData, error, loading } = useJobData();
	const numId = parseInt(id, 10);
	const curData = jobData?.find((_, index) => index === numId);

	console.log(curData, id);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!curData) {
		return <div>No job details available</div>;
	}

	return (
		<div className="flex  flex-col md:flex-row pt-20 pl-5">
			<div id="leftSide" className="px-10 max-w-6xl w-full pr-20">
				<div>
					<h3 className="font-black text-xl">Description</h3>
					<p className="py-5 mb-2 text-gray-500 text-sm">
						{curData.description}
					</p>
				</div>
				<div>
					<h3 className="font-black text-xl">Responsibilities</h3>
					<div className="py-3 mb-2">
						<ul>
							{curData.responsibilities.split("\n").map((data, index) => (
								<div className="flex text-center" key={index}>
									<span className="text-green-500 pt-1 pr-1">
										<IoIosCheckmarkCircleOutline />
									</span>
									<li className="text-gray-500 text-sm" key={index}>
										{data}
									</li>
								</div>
							))}
						</ul>
					</div>
				</div>
				<div>
					<h3 className="font-black text-xl">Ideal Candidate We Want</h3>
					<div className="py-3 mb-2 text-gray-500 text-sm">
						{curData.idealCandidate.split(",").map((data, index) => (
							<li key={index}>{data}</li>
						))}
					</div>
				</div>
				<div>
					<h3 className="font-black text-xl">When & Where</h3>
					<div className="flex py-1 mb-2 text-gray-500 text-sm">
						<div className="pt-2">
							<CiLocationOn className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-1 w-8 h-8 " />
						</div>
						<li className="list-none pl-2 pt-2.5">{curData.whenAndWhere}</li>
					</div>
				</div>
			</div>
			<div id="rightSide" className="pl-10 md:pl-0">
				<div>
					<h3 className="font-black text-xl px-2">About</h3>
					<div className="block ">
						<div className="flex p-2">
							<div className="pt-1">
								<FaPlus className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-2 w-8 h-8 " />
							</div>
							<div className="block ml-3 text-sm">
								<div className="text-gray-400"> Posted On </div>
								<div>{curData.datePosted.split("T")[0]}</div>
							</div>
						</div>
						<div className="flex p-2">
							<div className="pt-1">
								<FaFire className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-1.5 w-8 h-8" />
							</div>
							<div className="block ml-3 text-sm">
								<div className="text-gray-400"> Deadline </div>
								<div>{curData.deadline.substring(0, 10)}</div>
							</div>
						</div>
						<div className="flex p-2">
							<div className="pt-1">
								<CiLocationOn className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-1 w-8 h-8 " />
							</div>
							<div className="block ml-3 text-sm">
								<div className="text-gray-400"> Location </div>
								<div>
									{curData.location.map((loc, index) => (
										<span className="block" key={index}>
											{loc}
										</span>
									))}
								</div>
							</div>
						</div>
						<div className="flex p-2">
							<div className="pt-1">
								<BsSkipStartBtn className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-1.5 w-8 h-8 " />
							</div>
							<div className="block ml-3 text-sm">
								<div className="text-gray-400"> Start Date </div>
								<div>{curData.startDate.split("T")[0]}</div>
							</div>
						</div>
						<div className="flex p-2 ">
							<div className="pt-1">
								<FaRegCalendarCheck className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-1.5 w-8 h-8 " />
							</div>
							<div className="block ml-3 text-sm">
								<div className="text-gray-400"> End Date </div>
								<div>{curData.endDate.split("T")[0]}</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h3 className="font-black text-xl px-2 pt-3">Categories</h3>
					<div className="flex p-2 gap-1 py-5 text-sm">
						<div>
							{curData.categories.map((data, index) => (
								<span
									key={index}
									className="block mb-2 bg-yellow-100 text-center p-2 text-yellow-500 rounded-xl cursor-pointer "
								>
									{data}
								</span>
							))}
						</div>
					</div>
				</div>
				<div>
					<h3 className="font-black text-xl px-2">Required Skills</h3>
					<div className="inline">
						{curData.requiredSkills.map((data, index) => (
							<div
								className="bg-slate-100 text-slate-800 rounded-xl p-1 m-2 text-center text-sm w-1/3 md:w-1/2"
								key={index}
							>
								{data}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Description;
