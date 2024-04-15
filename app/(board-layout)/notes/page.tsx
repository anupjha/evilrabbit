import PageHeading from "@/ui/PageHeading";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const TextEditor = dynamic(() => import("./TextEditor"), { ssr: false });

export default function Notes() {
  return (
    <main className="flex flex-col grow min-w-0 p-5 bg-zinc-200">
      <PageHeading title="Notes" />
      <div className="w-full min-h-[400px]">
        <Suspense fallback={<p>Loading...</p>}>
          <TextEditor />
        </Suspense>
      </div>
    </main>
  );
}
