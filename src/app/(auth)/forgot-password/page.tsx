import AuthHeader from "@/components/auth/auth-header";
import AuthFooter from "@/components/auth/auth-footer";
import ForgotPasswordForm from "@/components/auth/forgot-password-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  description:
    "Forgot your password? No worries! Enter your email address and we'll send you a link to reset your password.",
};

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <AuthHeader />
      <ForgotPasswordForm />
      <AuthFooter />
    </main>
  );
}
