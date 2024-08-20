"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import useJobData from "../utils/JobData";
import Link from "next/link";
import JobCardList from "./JobCard";
import Image from "next/image";
import bookmarkIcon from "@/public/assets/bookmark.png";
import unbookmarkIcon from "@/public/assets/unbookmark.png";
import { useSession } from "next-auth/react";
import { BookmarkCrud, getBookmarks } from "@/app/api/bookmarkApi";

const Dashboard = () => {
	const { jobData, error, loading } = useJobData();
	const { data: session } = useSession();
	const [bookmarked, setBookmarked] = useState<{ [key: string]: boolean }>({});
	const token = session?.user?.accessToken;

	useEffect(() => {
		const fetchBookmarks = async () => {
			if (token) {
				try {
					const bookmarks = await getBookmarks(token);
					const tempBookmark: { [key: string]: boolean } = {};

					bookmarks.forEach((bookmark) => {
						tempBookmark[bookmark.eventID] = true;
					});

					setBookmarked(tempBookmark);
				} catch (error) {
					console.error("Error fetching bookmarks:", error);
				}
			}
		};

		fetchBookmarks();
	}, [token]);

	const handleBookmarkClick = async (id: string) => {
		if (!session?.user?.accessToken) {
			console.log("No session token available");
			return;
		}
		const isBookmark = bookmarked[id];

		// Optimistically update UI
		setBookmarked((prevState) => ({
			...prevState,
			[id]: !isBookmark,
		}));

		if (token) {
			try {
				await BookmarkCrud(id, token, isBookmark);
			} catch (error) {
				console.error("Error updating bookmark:", error);
				// Revert state if API call fails
				setBookmarked((prevState) => ({
					...prevState,
					[id]: !isBookmark,
				}));
			}
		}
	};

	return (
		<div className="h-full w-full max-w-4xl px-5 m-auto pt-14 md:px-0">
			<Header num={jobData?.length ?? 0} />
			{loading && <div className="text-center">Loading...</div>}
			{error && <div>Error: {error}</div>}
			{jobData?.map((job, index) => (
				<div
					key={job.id}
					className="p-5 border-solid border-2 border-sky-200 rounded-2xl cursor-pointer mb-5 mr-3 hover:bg-slate-100"
				>
					<div className="flex justify-end">
						<Image
							src={bookmarked[job.id] ? bookmarkIcon : unbookmarkIcon}
							alt={bookmarked[job.id] ? "Bookmarked" : "Unbookmarked"}
							width={20}
							height={20}
							data-testid="bookmark-button"
							onClick={() => handleBookmarkClick(job.id)}
							className="cursor-pointer"
						/>
					</div>
					<Link href={`/JobDes/${index}`}>
						<JobCardList job={job} />
					</Link>
				</div>
			))}
		</div>
	);
};

export default Dashboard;
