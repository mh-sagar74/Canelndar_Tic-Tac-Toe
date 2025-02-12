import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <div>Home directory</div>
      <div className="text-left">
        <div className="font-semibold">
          In this site you'll find two functional react apps.
        </div>
        <ul className="list-disc list-inside">
          <li>
            <Link href={"/calendar"}>Calendar</Link>
          </li>
          <li>
            <Link href={"/tik-tak-toe"}>Tic-Tac-Toe Game</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
