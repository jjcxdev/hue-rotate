import Link from "next/link";
import Color from "./components/Color";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-amber-200 to-yellow-400 text-black">
      <div className="pb-6">
        <h1 className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text pt-8 text-4xl font-black uppercase text-transparent">
          Hue
          <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            {" "}
            Rotate
          </span>
        </h1>
      </div>
      <Color />
    </main>
  );
}
