import Guest from "@/components/Guest";
import {currentUser} from "@clerk/nextjs/server";

export default async  function SleepSync() {
  const user = await currentUser();
  if (!user) {
  <Guest />;
  return null;
  }
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">SleepSync</h1>
      <div className = "text-red-500">Home Page</div>
    </div>
  )
}
