import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { useState } from "react";

export default function MainDropDown({ list }) {
  const [selectedKeys, setSelectedKeys] = useState(list[0]);

  return (
    <Dropdown>
      <DropdownTrigger className="px-2 outline-none w-16">
        <Button variant="bordered" className="capitalize">
          {selectedKeys}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className="bg-white rounded-xl"
      >
        {list.map((item) => (
          <DropdownItem
            className="px-8 my-1 py-1 hover:bg-zinc-100 transition-all"
            key={item}
          >
            {item}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
