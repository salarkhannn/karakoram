import { Listbox } from "@headlessui/react";
import { useState } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";


const sizes = [
  { id: 1, label: "XXS", stock: "Only 1 remaining" },
  { id: 2, label: "XS", stock: "Only 1 remaining" },
  { id: 3, label: "S", stock: "Only 1 remaining" },
  { id: 4, label: "M", stock: "Only 1 remaining" },
];

export default function SizeDropdown() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="relative w-64">
      <Listbox value={selectedSize} onChange={setSelectedSize}>
        <div className="relative">
          <Listbox.Button className="w-full py-2 px-4 border border-gray-400 bg-white text-left rounded flex justify-between items-center">
            {selectedSize ? `JP ${selectedSize.id} = ${selectedSize.label}` : "SELECT A SIZE"}
            <ChevronUpDownIcon className="w-5 h-5 text-gray-500" />
          </Listbox.Button>
          <Listbox.Options className="absolute w-full mt-2 border border-gray-400 bg-white shadow-lg rounded-md">
            <p className="text-xs px-4 py-2 font-semibold text-gray-600">SELECT A SIZE</p>
            {sizes.map((size) => (
              <Listbox.Option key={size.id} value={size} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                JP {size.id} = {size.label} - <span className="text-red-600">{size.stock}</span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
