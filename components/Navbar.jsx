import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-3 bg-slate-800">
      <Link className="text-white font-bold" href={"/"}>
        CRUD{" "}
      </Link>
      <Link className="bg-white p-2" href={"/addTopic"}>
        Add Topic{" "}
      </Link>
    </div>
  );
}
