"use client";

import React, { useState, useEffect } from "react";
import useJobData from "@/utils/JobData";
import Link from "next/link";
import JobCardList from "@/components/JobCard";
import Image from "next/image";
import bookmarkIcon from "@/public/assets/bookmark.png";
import unbookmarkIcon from "@/public/assets/unbookmark.png";
import { useSession } from "next-auth/react";
import { BookmarkCrud, getBookmarks } from "@/app/api/bookmarkApi";
import undrawBookmark from "@/public/assets/undraw_bookmarks_re_mq1u.svg";

const Bookmarks = () => {
	const { jobData, error, loading } = useJobData();
	const { data: session } = useSession();
	const [bookmarked, setBookmarked] = useState<{ [key: string]: boolean }>({});
	const token: string | undefined = session?.user?.accessToken;

useEffect(() => {
    const fetchBookmarks = async () => {
        if (token) {
            try {
                const bookmarks: Array<{ eventID: string }> = await getBookmarks(token);
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
					[id]: isBookmark,
				}));
			}
		}
	};

	return (
		<div className="h-full w-full max-w-4xl m-auto pt-20">
			{loading && <div className="text-center pt-10">Loading...</div>}
			{error && <div>Error: {error}</div>}

			{!loading &&
				!error &&
				(Object.keys(bookmarked).length > 0 ? (
					jobData?.map((job, index) =>
						bookmarked[job.id] ? (
							<div
								key={job.id}
								className="p-5 border-solid border-2 border-sky-200 rounded-2xl cursor-pointer mb-5 mr-3 hover:bg-slate-100"
							>
								<div className="flex justify-end">
									<Image
										src={bookmarkIcon}
										alt="Bookmarked"
										width={20}
										height={20}
										onClick={() => handleBookmarkClick(job.id)}
										className="cursor-pointer"
									/>
								</div>
								<Link href={`/JobDes/${index}`}>
									<JobCardList job={job} />
								</Link>
							</div>
						) : null
					)
				) : (
					<div className="p-10 w-1/3 m-auto pt-32">
						<Image src={undrawBookmark} alt="No bookmarks" />
					</div>
				))}
		</div>
	);
};

export default Bookmarks;
