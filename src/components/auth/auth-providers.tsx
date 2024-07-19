import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { signInwithFacebook, signInwithGoogle } from "@/lib/auth/actions";

export default function AuthProviders() {
  const googleSignIn = async () => {
    const response = await signInwithGoogle();
    if (response.status === "error") {
      const errors = response.message;
      toast.error(errors.toString());
      return;
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        toast.success(response.message.toString());
        resolve(null);
      }, 2000);
    });
  };

  const facebookSignIn = async () => {
    const response = await signInwithFacebook();
    if (response.status === "error") {
      const errors = response.message;
      toast.error(errors.toString());
      return;
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        toast.success(response.message.toString());
        resolve(null);
      }, 2000);
    });
  };

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Button variant="outline" onClick={facebookSignIn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mr-2 h-5 w-5"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
          Facebook
        </Button>
        <Button variant="outline" onClick={googleSignIn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mr-2 h-5 w-5"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" />
          </svg>
          Google
        </Button>
      </div>
    </>
  );
}
