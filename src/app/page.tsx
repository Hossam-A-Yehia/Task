import Customers from "./components/Customers";

export default function Home() {
  return (
    <main className="  bg-slate-900 flex py-[43px]  items-center flex-col">
      <h1 className="text-4xl font-bold text-sky-600 mb-[50px]">Customers</h1>
      <Customers />
    </main>
  );
}
