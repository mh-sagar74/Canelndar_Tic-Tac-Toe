"use client";

import { useEffect } from "react";
import ErrorImg from "@/public/Error.png";
import Image from "next/image";

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="w-[500px] m-auto text-center">
      <Image src={ErrorImg} alt="500 Error" priority />
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
