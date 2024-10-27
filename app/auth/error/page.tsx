"use client";

import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Authentication Error</h1>
          <p className="text-gray-600 mb-4">
            {error === "Configuration" && "There is a problem with the server configuration."}
            {error === "AccessDenied" && "You do not have permission to sign in."}
            {error === "Verification" && "The sign in link is no longer valid."}
            {!error && "An unknown error occurred."}
          </p>
          <a
            href="/auth/signin"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Try again
          </a>
        </div>
      </Card>
    </div>
  );
}