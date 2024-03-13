import { Inter } from "next/font/google";
import { Button } from "@repo/ui";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-around p-24 ${inter.className}`}>
      <h1 className="text-6xl">This is Teacher Dashboard</h1>
      <Button onClick={() => alert("Hiya from Teacher Dashboard")}>Click here</Button>
    </main>
  );
}
