import { JobDetails } from "./JobDetails";
export interface CardData {
	success: boolean;
	message: string;
	data: JobDetails[];
	errors: null | string;
	count: number;
}
