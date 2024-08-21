export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard", "/JobDes/:id*", "/bookmark"] };
