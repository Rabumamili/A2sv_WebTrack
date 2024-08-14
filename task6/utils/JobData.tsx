import React, { useState, useEffect } from "react";
import { CardData } from "@/types/CardData";

function JobData() {
	const [jobData, setJobData] = useState<CardData[] | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("http://localhost:3000/jobs.json", {
				cache: "no-store",
			});
			const data = await res.json();
			setJobData(data.job_postings);
		};

		fetchData();
	}, []);
	return jobData;
}

export default JobData;
