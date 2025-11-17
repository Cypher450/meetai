"use client";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";


export const HomeView = () => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.hello.queryOptions({ text: "from tRPC React Query" }));
  return (
    <div className="flex flex-col p-4 gap-y-4">
        {data ? <p className="text-lg">Server says: {data.greeting}</p> : <p>Loading...</p>}
      </div>
  );
}
