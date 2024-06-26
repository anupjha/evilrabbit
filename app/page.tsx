import Link from "next/link";
import {
  IconBrandGithub,
  IconLayoutKanban,
  IconHeartHandshake,
  IconWand,
  IconChartBar,
  IconRocket,
  IconBook,
  IconBook2,
  IconLogin,
} from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
export default function Home() {
  return (
    <main className="min-h-dvh text-white bg-gradient-to-br from-black to-zinc-900 dark">
      <nav className="px-3 md:px-10 py-3 mb-5 flex justify-between items-center">
        <h4 className="flex items-center text-lg gap-3 font-semibold tracking-tight">
          <Image src="/favicon.png" width={32} height={32} alt="Logo" /> Evil Rabbit
        </h4>
        <Link href="/board">
          <IconLogin />
        </Link>
      </nav>
      <div className="flex justify-center">
        <Image src="/evilRabbit-v2.jpeg" width={600} height={600} alt="Evil Rabbit" />
      </div>
      <h1 className="text-center">A minimal task tracker. </h1>
    </main>
  );
}
