import AuthHeader from "@/components/auth/auth-header";
import AuthFooter from "@/components/auth/auth-footer";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
  description:
    "Reset your password by entering your new password and confirming it.",
};

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <AuthHeader />
      <ResetPasswordForm />
      <AuthFooter />
    </main>
  );
}
