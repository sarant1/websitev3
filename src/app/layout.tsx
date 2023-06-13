import "./globals.css";
import { Inter } from "next/font/google";
import { Amplify, Auth } from "aws-amplify";
import awsExports from "@/aws-exports";
import dotenv from "dotenv";

dotenv.config();

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project X",
  description: "Generated by create next app",
};

try {
  Amplify.configure(awsExports);
  Auth.configure(awsExports);
  console.log("Amplify configured");
} catch (error) {
  console.log(error);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
