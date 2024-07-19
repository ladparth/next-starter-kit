import AuthHeader from "@/components/auth/auth-header";
import AuthFooter from "@/components/auth/auth-footer";
import { SigninForm } from "@/components/auth/signin-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in to your account to access your dashboard, settings, and more.",
};

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <AuthHeader />
      <SigninForm />
      <AuthFooter />
    </main>
  );
}
