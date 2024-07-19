import Link from "next/link";

export default function AuthFooter() {
  return (
    <div className="mx-auto flex flex-col justify-center space-y-6 w-[350px] mt-4">
      <p className="px-8 text-center text-sm text-muted-foreground">
        By continuing , you agree to our{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
