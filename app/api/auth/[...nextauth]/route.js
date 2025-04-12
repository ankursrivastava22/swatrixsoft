import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/db/mongodb";
import User from "@/db/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async signIn({ user }) {
      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        await User.create({
          email: user.email,
          username: user.name || "",   // optional
          role: "user",                // default role
          provider: "google",          // mark as OAuth
          // ⛔ don't include `password`
        });
      }

      return true;
    },

    async session({ session }) {
      const dbUser = await User.findOne({ email: session.user.email });
      if (dbUser) {
        session.user.role = dbUser.role;
        session.user.id = dbUser._id;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
