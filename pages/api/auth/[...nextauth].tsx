import NextAuth, { Session, User } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
//@ts-ignore
import clientPromise from "../../../lib/mongodb";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    //   // ...add more providers here
  ],
  //@ts-ignore
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async session({ session, user }: { session: Session; user: User }) {
      // @ts-ignore
      session.user.userId = user.id;
      return session;
    },
  },
};

export default NextAuth(authOptions);
