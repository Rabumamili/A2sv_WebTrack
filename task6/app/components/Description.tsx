"use client";

import React from "react";
import Image from "next/image";
import JobData from "@/utils/JobData";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaFire, FaPlus, FaRegCalendarCheck } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BsSkipStartBtn } from "react-icons/bs";

interface JobId {
	id: string;
}

const Description = ({ id }: JobId) => {
	const x = JobData();
	const numId = parseInt(id, 10);
	const curData = x?.find((data, index) => index === numId);
	
	// console.log(curData, id);
	
	if (!curData) {
		return <div>Invalid ID</div>;
	}
	
	return (
		<div className="flex p-5">
			<div id="leftSide" className="pr-20 pl-5">
				<div>
					<h3 className="font-black text-xl">Description</h3>
					<p className="py-5 mb-2 text-gray-500">{curData?.description}</p>
				</div>
				<div>
					<h3 className="font-black text-xl">Responsibilities</h3>

					<div className="py-3 mb-2">
						<ul>
							{curData?.responsibilities?.map((data, index) => (
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
						<li>{`Young(${curData?.ideal_candidate.age}years old) ${curData?.ideal_candidate.gender} `}</li>
						{curData?.ideal_candidate.traits.map((data, index) => (
							<li key={index}>{data}</li>
						))}
					</div>
				</div>
				<div>
					<h3 className="font-black text-xl">When & Where</h3>
					<div className=" flex py-1 mb-2 text-gray-500">
						<div className="pt-2">
							<CiLocationOn className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-1 w-8 h-8 " />
						</div>
						<li className="list-none pl-2 pt-2.5">{curData?.when_where}</li>
					</div>
				</div>
			</div>
			<div id="rightSide" className="mr-5">
				<div>
					<h3 className="font-black text-xl px-2">About</h3>
					<div className="block ">
						<div className="flex  p-2">
							<div className="pt-2">
								<FaPlus className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-2 w-8 h-8 " />
							</div>
							<div className="block ml-3">
								<div className="text-gray-400"> Posted On </div>
								<div>{curData?.about.posted_on}</div>
							</div>
						</div>
						<div className="flex  p-2">
							<div className="pt-2">
								<FaFire className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-1.5 w-8 h-8" />
							</div>
							<div className="block ml-3">
								<div className="text-gray-400"> Deadline </div>
								<div>{curData?.about.deadline}</div>
							</div>
						</div>
						<div className="flex  p-2">
							<div className="pt-2">
								<CiLocationOn className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-1 w-8 h-8 " />
							</div>
							<div className="block ml-3">
								<div className="text-gray-400"> Location </div>
								<div>{curData?.about.location}</div>
							</div>
						</div>
						<div className="flex p-2">
							<div className="pt-2">
								<BsSkipStartBtn className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-1.5 w-8 h-8 " />
							</div>
							<div className="block ml-3">
								<div className="text-gray-400"> Start Date </div>
								<div>{curData?.about.start_date}</div>
							</div>
						</div>
						<div className="flex p-2 ">
							<div className="pt-2">
								<FaRegCalendarCheck className="text-sky-500 border-solid border-2 border-gray-200 rounded-full p-1.5 w-8 h-8 " />
							</div>
							<div className="block ml-3">
								<div className="text-gray-400"> End Date </div>
								<div>{curData?.about.end_date}</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h3 className="font-black text-xl px-2 pt-3">Categories</h3>
					<div className="flex p-2 gap-1 py-5">
						<div className="bg-yellow-100 text-center p-1 text-yellow-500 rounded-xl w-28 cursor-pointer">
							{curData?.about.categories[0]}
						</div>
						<div className="bg-green-100 text-center p-1 text-green-500 rounded-xl w-28 cursor-pointer">
							{curData?.about.categories[1]}
						</div>
					</div>
				</div>
				<div>
					<h3 className="font-black text-xl px-2">Required Skills</h3>
					<div className="inline">
						{curData?.about.required_skills.map((data, index) => (
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
