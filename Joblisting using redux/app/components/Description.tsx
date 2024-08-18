"use client";

import React from "react";
import Image from "next/image";
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
		return (<div className="flex flex-col justify-center items-center h-screen">
			<div className="relative">
			  <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-dot rounded-full animate-spin"></div>
			  <div className="absolute inset-0 flex justify-center items-center text-blue-500 font-semibold">
				<span>🔄</span>
			  </div>
			</div>
			<p className="mt-4 text-lg text-blue-600">Loading, please wait...</p>
		  </div>
		  
		);
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!curData) {
		return <div>No job details available</div>;
	}

	return (
		<div className="flex p-5 ">
			<div id="leftSide" className="px-10 max-w-6xl w-full pr-20">
				<div>
					<h3 className="font-black text-xl">Description</h3>
					<p className="py-5 mb-2 text-gray-500 ">{curData.description}</p>
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
									<li className="text-gray-500" key={index}>
										{data}
									</li>
								</div>
							))}
						</ul>
					</div>
				</div>
				<div>
					<h3 className="font-black text-xl">Ideal Candidate We Want</h3>
					<div className="py-3 mb-2 text-gray-500">
						{curData.idealCandidate.split(",").map((data, index) => (
							<li key={index}>{data}</li>
						))}
					</div>
				</div>
				<div>
					<h3 className="font-black text-xl">When & Where</h3>
					<div className="flex py-1 mb-2 text-gray-500">
						<div className="pt-2">
							<CiLocationOn className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-1 w-8 h-8 " />
						</div>
						<li className="list-none pl-2 pt-2.5">{curData.whenAndWhere}</li>
					</div>
				</div>
			</div>
			<div id="rightSide" className="">
				<div>
					<h3 className="font-black text-xl px-2">About</h3>
					<div className="block ">
						<div className="flex p-2">
							<div className="pt-2">
								<FaPlus className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-2 w-8 h-8 " />
							</div>
							<div className="block ml-3">
								<div className="text-gray-400"> Posted On </div>
								<div>{curData.datePosted.split("T")[0]}</div>
							</div>
						</div>
						<div className="flex p-2">
							<div className="pt-2">
								<FaFire className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-1.5 w-8 h-8" />
							</div>
							<div className="block ml-3">
								<div className="text-gray-400"> Deadline </div>
								<div>{curData.deadline.substring(0, 10)}</div>
							</div>
						</div>
						<div className="flex p-2">
							<div className="pt-2">
								<CiLocationOn className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-1 w-8 h-8 " />
							</div>
							<div className="block ml-3">
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
							<div className="pt-2">
								<BsSkipStartBtn className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-1.5 w-8 h-8 " />
							</div>
							<div className="block ml-3">
								<div className="text-gray-400"> Start Date </div>
								<div>{curData.startDate.split("T")[0]}</div>
							</div>
						</div>
						<div className="flex p-2 ">
							<div className="pt-2">
								<FaRegCalendarCheck className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-1.5 w-8 h-8 " />
							</div>
							<div className="block ml-3">
								<div className="text-gray-400"> End Date </div>
								<div>{curData.endDate.split("T")[0]}</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h3 className="font-black text-xl px-2 pt-3">Categories</h3>
					<div className="flex p-2 gap-1 py-5">
						<div>
							{curData.categories.map((data, index) => (
								<span
									key={index}
									className="block mb-2 bg-yellow-100 text-center p-1.5 text-yellow-500 rounded-xl cursor-pointer "
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
								className="bg-slate-100 text-slate-800 rounded-xl p-1 m-2 text-center "
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
