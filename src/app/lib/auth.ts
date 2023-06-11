import { Auth } from "aws-amplify";
import { Sign } from "crypto";

// Sign Up

interface SignUpProps {
  username: string;
  password: string;
  email: string;
}

export async function SignUp({ username, password, email }: SignUpProps) {
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
