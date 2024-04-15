import Link from "next/link";
import Image from "next/image";
import { IconLayoutKanban } from "@tabler/icons-react";

export default function NavbarTitle() {
  return (
    <div className="flex items-center my-2 gap-5">
      <h4 className="flex items-center text-lg gap-3 font-semibold tracking-tight">
        <Image src="/favicon.png" width={32} height={32} alt="Picture of the author" /> Evil Rabbit
      </h4>
    </div>
  );
}
