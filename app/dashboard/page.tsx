import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default async function DashboardPage() {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/auth/signin");
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <Card className="bg-white p-6">
          <div className="flex items-center gap-4">
            {session.user.image && (
              <Image
                src={session.user.image}
                alt={session.user.name ?? "Profile"}
                width={60}
                height={60}
                className="rounded-full"
              />
            )}
            <div>
              <h2 className="text-xl font-semibold">Welcome, {session.user.name}!</h2>
              <p className="text-gray-600">{session.user.email}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}