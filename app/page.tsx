import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-4xl font-bold mb-6">Welcome to MyApp</h1>
        <p className="text-lg text-gray-600 mb-8">
          A secure and modern application with Google authentication and Firebase integration.
        </p>
        {!session ? (
          <Button asChild size="lg">
            <Link href="/auth/signin">Get Started</Link>
          </Button>
        ) : (
          <Button asChild size="lg">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        )}
      </div>
    </div>
  );
}