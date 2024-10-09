// import Image from "next/image";

import { AuroraBackgroundDemo } from "@/components/customAuroraBackground";

import dynamic from "next/dynamic";
const DynamicNeshanMap = dynamic(() => import("@/components/customNeshanMap"), {
  ssr: false,
  loading: () => <div>Loading ...</div>,
});
export default function Home() {
  return (
    <main className="bg-slate-950">
      <AuroraBackgroundDemo  />
      <DynamicNeshanMap />
    </main>
  );
}
