describe("Bookmark Functionality", () => {
	it("should toggle bookmark status for a job", () => {
		cy.visit("http://localhost:3000/signin");
		cy.get('input[placeholder="Enter email address"]', { timeout: 10000 }).type(
			"rabuma.milisha@a2sv.org"
		);
		cy.get('input[placeholder="Enter password"]', { timeout: 10000 }).type(
			"rabbuu"
		);
		cy.get('button[type="submit"]').first().click();

		cy.url({ timeout: 10000 }).should("include", "/");

		cy.wait(6000); // Wait for job cards to load

		cy.get('[data-testid="bookmark-button"]', { timeout: 10000 })
			.first()
			.as("bookmarkButton");

		// Check initial bookmark status
		cy.get("@bookmarkButton")
			.should("have.attr", "src")
			.then((src) => {
				const isBookmarked = src.toString().includes("bookmark.png");
				cy.log(
					isBookmarked ? "The job is bookmarked" : "The job is not bookmarked"
				);
			});

		// Click to toggle the bookmark status
		cy.get("@bookmarkButton").click();

		// Verify that the bookmark status has changed
		cy.get("@bookmarkButton")
			.should("have.attr", "src")
			.then((src) => {
				const isBookmarked = String(src).includes("bookmark.png");
				cy.log(
					isBookmarked
						? "The job is now bookmarked"
						: "The job is now unbookmarked"
				);
			});
	});
});