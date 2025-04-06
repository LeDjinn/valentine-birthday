import NextAuth from "next-auth";

import { authOptions } from "@/lib/authOption";



// Define auth options but don't export it from this file


// Create the handler and export it directly as route handlers
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };