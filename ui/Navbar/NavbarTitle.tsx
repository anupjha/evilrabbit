import Link from "next/link";
import Image from "next/image";
import { IconLayoutKanban } from "@tabler/icons-react";

export default function NavbarTitle() {
  return (
    <div className="flex items-center my-2 gap-5">
      <h4 className="flex items-center text-lg gap-3 font-semibold tracking-tight">
        <IconLayoutKanban className="text-purple-500" /> Evil Rabbit
      </h4>
    </div>
  );
}
