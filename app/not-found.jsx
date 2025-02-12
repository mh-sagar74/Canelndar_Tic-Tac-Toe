import Image from "next/image";
import NotFoundImg from "@/public/NotFound.png";

export default function NotFound() {
  return (
    <div className="w-[300px] m-auto">
      <Image src={NotFoundImg} alt="404 Page Not Found" priority />
    </div>
  );
}
