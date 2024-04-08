"use client";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <button onClick={goBack}>
      {" "}
      <IconArrowLeft />{" "}
    </button>
  );
}
