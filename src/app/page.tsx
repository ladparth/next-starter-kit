import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <div className="max-w-2xl flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Next.js Starter Kit
        </h1>
        <p className="text-lg mb-6">
          Kickstart your Next.js project with our comprehensive starter kit.
          Build faster, deploy sooner, and scale effortlessly.
        </p>
        <Button className="mb-4">Get Started</Button>
        <ThemeToggle />
      </div>
    </main>
  );
}
