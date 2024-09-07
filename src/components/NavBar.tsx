import React from "react";
import { Button } from "./ui/button";

function NavBar() {
  return (
    <div className="p-2 flex justify-around  items-center">
      {" "}
      <h3 className="scroll-m-20 w-1/2 bg-gradient-to-r text-transparent bg-clip-text text-2xl from-orange-600 to-orange-500 font-semibold tracking-tight">
        HackerNews
      </h3>{" "}
      <div className="flex gap-2 flex-row">
        <Button className="text-lg" size={"default"} variant={"ghost"}>
          new
        </Button>
        <Button className="text-lg" size={"default"} variant={"ghost"}>
          past
        </Button>
        <Button className="text-lg" size={"default"} variant={"ghost"}>
          coming soon
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
