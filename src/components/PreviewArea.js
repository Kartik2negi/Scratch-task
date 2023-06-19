import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea() {
  return (
    <div className="flex-none h-full overflow-y-auto p-2">
      <div className="absolute top-60">
        <div className="hidden border-2 p-2 ml-3 mb-2 w-auto whitespace-nowrap"
          id="message-box-id"
        >
        </div>
        <div className="hidden" id="message-box-id-think">
          <div className="border-2 p-1 ml-2 nb-2 w-auto whitespace-nowrap"
            id="message-box-id-think-1"
          >
          </div>
          <div className="border-2 rounded-full w-4 h-4 mt-1 ml-20 mb-1"></div>
          <div className="border-2 rounded-full w-2 h-2 mt-1 ml-16 mb-1"></div>
        </div>
        <CatSprite />
      </div>
    </div>
  );
}
