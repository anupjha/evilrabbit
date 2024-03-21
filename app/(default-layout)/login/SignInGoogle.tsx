"use client";
import { signIn } from "next-auth/react";
import { Button } from "@nextui-org/button";
import { IconBrandGoogle } from "@tabler/icons-react";

const SignInGoogle = () => {
  return (
    <Button onClick={() => signIn("google", { callbackUrl: "/board" })} type="button" variant="ghost">
      <IconBrandGoogle size={20} />
      Sign In With Google
    </Button>
  );
};

export default SignInGoogle;
