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
    async signIn({ user, account }) {
      try {
        const existingUser = await User.findOne({ email: user.email });

        if (existingUser) {
          // Block login if account was created with different provider
          if (existingUser.provider && existingUser.provider !== account?.provider) {
            console.warn("❌ Provider mismatch for:", user.email);
            throw new Error("OAuthAccountNotLinked");
          }

          // ✅ Allow login for same provider
          return true;
        }

        // 🔵 Create user if not exists
        await User.create({
          email: user.email,
          username: user.name || "",
          role: "user",
          provider: account?.provider || "google",
        });

        return true;
      } catch (error) {
        console.error("❌ signIn error:", error.message);
        return false;
      }
    },

    async session({ session }) {
      try {
        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) {
          session.user.role = dbUser.role;
          session.user.id = dbUser._id.toString();
        }
      } catch (error) {
        console.error("❌ session callback error:", error);
      }

      return session;
    },
  },

  pages: {
    signIn: "/login",
    error: "/login", // Redirect OAuthAccountNotLinked errors here
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
