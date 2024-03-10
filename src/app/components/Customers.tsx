"use client";
import toast, { Toaster } from "react-hot-toast";

import { useRef } from "react";
import { useState } from "react";
import Image from "next/image";

export default function Customers() {
  const [customerList, setCustomerList] = useState([
    { id: 3, name: "Kero Magdy", img: "/avatar_1.png" },
    { id: 2, name: "Ward Fathy", img: "/avatar_2.png" },
    { id: 1, name: "Hossam  Yehia", img: "/avatar_3.png" },
    { id: 5, name: "Mohamed Sheded", img: "/avatar_1.png" },
    { id: 4, name: "Rana Ehab", img: "/avatar_4.png" },
  ]);

  const dragCustomer = useRef<number>(0);
  const draggedOverCustomer = useRef<number>(0);
  function handleSort() {
    const customersClone = [...customerList];
    const temp = customersClone[dragCustomer.current];
    customersClone[dragCustomer.current] =
      customersClone[draggedOverCustomer.current];
    customersClone[draggedOverCustomer.current] = temp;
    setCustomerList(customersClone);

    toast.success(
      `Places were changed between ${
        customersClone[draggedOverCustomer.current].name
      } and ${customersClone[dragCustomer.current].name}`,
      {
        style: {
          padding: " 10px",
          borderRadius: "10px",
          background: "#2196f3",
          color: "#fff",
        },
      }
    );
  }
  return (
    <ul className="d-flex flex-col ">
      {customerList.map((customer, index) => (
        <li
          draggable
          onDragStart={() => (dragCustomer.current = index)}
          onDragEnter={() => (draggedOverCustomer.current = index)}
          onDragEnd={handleSort}
          onDragOver={(e) => e.preventDefault()}
          key={customer.id}
          className="d-flex gap-3 px-8 py-3 mb-3 bg-slate-800 hover:bg-sky-900 hover:translate-x-1 duration-300 text-left cursor-pointer focus:hover:bg-sky-600 flex items-center justify-between"
        >
          <span>
            {customer.id} - {customer.name}
          </span>
          <Image
            src={customer.img}
            width={50}
            height={50}
            alt="Avatar"
            className="rounded-full"
          />
        </li>
      ))}
      <Toaster />
    </ul>
  );
}
