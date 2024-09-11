import GitHubProvider from "@auth/core/providers/github";
import GoogleProvider from "@auth/core/providers/google";
import { Password } from "@convex-dev/auth/providers/Password";
import { convexAuth } from "@convex-dev/auth/server";
import { DataModel } from "../convex/_generated/dataModel";

const CustomPassword = Password<DataModel>({
  profile(params) {
    return {
      email: params.email as string,
      name: params.name as string,
      // role: params.role as string,
    };
  },
});

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [GitHubProvider, GoogleProvider, CustomPassword],
});
