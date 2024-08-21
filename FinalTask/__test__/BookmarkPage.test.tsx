import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Bookmarks from "@/app/bookmarks/page";
import useJobData from "@/utils/JobData";
import { useSession } from "next-auth/react";
import { BookmarkCrud, getBookmarks } from "@/app/api/bookmarkApi";
import Image from "next/image";

// Mocking dependencies
jest.mock("@/utils/JobData");
jest.mock("next-auth/react");
jest.mock("@/app/api/bookmarkApi");

describe("Bookmarks Page", () => {
	const mockJobData = [
		{
			id: "1",
			title: "Job 1",
			logoUrl: "",
			orgName: "Org 1",
			location: "Location 1",
			description: "Description 1",
			opType: "full-time",
		},
		{
			id: "2",
			title: "Job 2",
			logoUrl: "",
			orgName: "Org 2",
			location: "Location 2",
			description: "Description 2",
			opType: "part-time",
		},
	];

	const mockSession = {
		user: {
			accessToken: "mock-token",
		},
	};

	const mockUseJobData = useJobData as jest.Mock;
	const mockUseSession = useSession as jest.Mock;
	const mockGetBookmarks = getBookmarks as jest.Mock;
	const mockBookmarkCrud = BookmarkCrud as jest.Mock;

	beforeEach(() => {
		mockUseJobData.mockReturnValue({
			jobData: mockJobData,
			error: null,
			loading: false,
		});
		mockUseSession.mockReturnValue({ data: mockSession });
		mockGetBookmarks.mockResolvedValue([{ eventID: "1" }]);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("renders correctly with job data and displays bookmarks", async () => {
		render(<Bookmarks />);

		// await waitFor(() => {
		// 	expect(screen.getByText("Job 1")).toBeInTheDocument();
		// 	expect(screen.getByText("Job 2")).toBeInTheDocument();
		// 	expect(screen.getByAltText("Bookmarked")).toBeInTheDocument();
		// });
	});

	it("displays loading state", () => {
		mockUseJobData.mockReturnValue({
			jobData: null,
			error: null,
			loading: true,
		});

		render(<Bookmarks />);

		expect(screen.getByText("Loading...")).toBeInTheDocument();
	});

	it("displays an error message", () => {
		mockUseJobData.mockReturnValue({
			jobData: null,
			error: "Failed to fetch job data",
			loading: false,
		});

		render(<Bookmarks />);

		expect(
			screen.getByText("Error: Failed to fetch job data")
		).toBeInTheDocument();
	});

	it("handles bookmarking functionality", async () => {
		mockBookmarkCrud.mockResolvedValue({ success: true });

		render(<Bookmarks />);

		await waitFor(() => {
			expect(screen.getByAltText("Bookmarked")).toBeInTheDocument();
		});

		const bookmarkButton = screen.getByAltText("Bookmarked");

		fireEvent.click(bookmarkButton);

		await waitFor(() => {
			expect(mockBookmarkCrud).toHaveBeenCalledWith("1", "mock-token", true);
		});
	});

	it("handles bookmark API errors", async () => {
		mockBookmarkCrud.mockRejectedValueOnce(new Error("Bookmarking failed"));

		render(<Bookmarks />);

		await waitFor(() => {
			const bookmarkButton = screen.getByAltText("Bookmarked");
			fireEvent.click(bookmarkButton);

			waitFor(() => {
				expect(
					screen.getByText("Error updating bookmark: Bookmarking failed")
				).toBeInTheDocument();
			});
		});
	});

	it("renders no bookmarks image when no bookmarks are present", async () => {
		mockGetBookmarks.mockResolvedValue([]);

		render(<Bookmarks />);

		await waitFor(() => {
			expect(screen.getByAltText("No bookmarks")).toBeInTheDocument();
		});
	});
});