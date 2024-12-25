import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
  <div className="pt-20 flex flex-col items-center justify-center">
    <h1 className="text-8xl text-red-700"> Wellcome to </h1>
    <h1 className="text-8xl text-slate-700 "> University List</h1>
    <p className="pt-10 text-orange-300 text-xl">find perfect university for your future across US.</p>
    <Button variant="destructive" className="mt-20 py-3 px-5 text-2xl"><Link href="/Table" >See List</Link></Button>
 

  </div>
  );
}
