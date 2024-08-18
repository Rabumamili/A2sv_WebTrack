import { useState, useEffect } from "react";
import { JobDetails } from "@/types/JobDetails";

const useJobData = () => {
	const [jobData, setJobData] = useState<JobDetails[] | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					"https://akil-backend.onrender.com/opportunities/search"
				);

				if (!res.ok) {
					throw new Error(`Error: ${res.status} ${res.statusText}`);
				}

				const data = await res.json();
				setJobData(data.data);
				setError(null); // Clear any previous errors
			} catch (err) {
				setError((err as Error).message);
				setJobData(null); // Clear previous data
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return { jobData, error, loading };
};

export default useJobData;
