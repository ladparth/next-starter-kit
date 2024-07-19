import { Mountain } from "lucide-react";
import Link from "next/link";

export default function AuthHeader() {
  return (
    <Link href="/">
      <div className="mb-4 flex items-center justify-center">
        <Mountain className="mr-2 h-6 w-6" />
        <h1 className="text-xl font-medium">Acme Social</h1>
      </div>
    </Link>
  );
}
