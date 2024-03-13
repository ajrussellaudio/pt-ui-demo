import { GreetingButton } from "../components/greeting-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 className="text-6xl">This is the Catalogue</h1>
      <GreetingButton />
    </main>
  );
}
