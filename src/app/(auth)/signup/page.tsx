import AuthHeader from "@/components/auth/auth-header";
import AuthFooter from "@/components/auth/auth-footer";
import { SignupForm } from "@/components/auth/signup-form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Sign up for a new account to access your dashboard, settings, and more.",
};

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <AuthHeader />
      <SignupForm />
      <AuthFooter />
    </main>
  );
}
