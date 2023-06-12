import { Auth } from "aws-amplify";
import { string } from "zod";

interface SignUpProps {
  username: string;
  email: string;
  password: string;
}

// Sign Up

export async function registerNewUser({
  username,
  email,
  password,
}: SignUpProps) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
    console.log(user);
  } catch (error) {
    console.log("error signing up:", error);
  }
}

async function resendConfirmationCode(username: string) {
  try {
    await Auth.resendSignUp(username);
    console.log("code resent successfully");
  } catch (err) {
    console.log("error resending code: ", err);
  }
}
