// NOT RUNNING
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({
          email: profile.email,
        });

        // if user doesn't exist
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(), // Fixed typo here
            image: profile.picture,
          });
        }

        return true; /*Return true na dewar karon kalker theka mara khaite asi*/
      } catch (e) {
        console.log("Error in signIn callback:", e);
      }
    },
  },
});

export { handler as GET, handler as POST };
