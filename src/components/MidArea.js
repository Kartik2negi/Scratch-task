import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import MoveX, { handleClickXMove } from "./motion/MoveX";
import MoveY from "./motion/MoveY";
import TurnAntiClockDirection from "./motion/TurnAntiClockDirection";
import TurnClockDirection from "./motion/TurnClockDirection";
import SayMessage from "./looks/SayMessage";
import MessageWithTimeout from "./looks/MessageWithTimeout";
import ThinkMessage from "./looks/ThinkMessage";
import ThinkMessageWithTimeout from "./looks/ThinkMessageWithTimeout";

export default function MidArea({ component }) {

  let x = {
    "X": <MoveX />,
    "Y": <MoveY />,
    "ACW": <TurnAntiClockDirection />,
    "CW": <TurnClockDirection />,
    "SM": <SayMessage />,
    "MWT": <MessageWithTimeout />,
    "TM": <ThinkMessage />,
    "TMWT": <ThinkMessageWithTimeout />
  }

  // const eventFire = (ele, eType) => {
  //   console.log(ele, eType)
  //   if (ele && ele.fireEvent) {
  //     ele.fireEvent("on" + eType);
  //   } else if (ele) {
  //     var evObj = document.createEvent("Events");
  //     console.log(evObj)
  //     evObj.initEvent(eType, true, false);
  //     ele.dispatchEvent(evObj);
  //   }

  // }

  const handleClick = (item) => {
    console.log(item)

    item.forEach((ele) => {
      if (ele.id === "X") {
        handleClickXMove(ele.value);
      }
    })

    // handleClickXMove()
    // eventFire(document.getElementById("move-x"), 'click')

  }

  return (
    <>
      <div className="flex-1 h-full overflow-auto">{"mid area"} </div>
      <div className="grid grid-flow-col">
        <div className="w-56 h-56 border border-4 border-gray-300 p-2">
          <Droppable droppableId="droppable-area" >
            {(provided) => {
              return (
                <ul
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="droppable-area"
                >
                  <div className="text-center mx-auto my-2 mb-4"
                    onClick={() => handleClick(component)}
                  >
                    Run{" "}

                  </div>
                  {
                    component.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={`${item.id}-i-1`}
                        index={index}
                      >
                        {(provided) => {
                          return (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {x[item.id]}
                            </li>
                          )
                        }}
                      </Draggable>
                    ))
                  }

                </ul>
              )
            }}
          </Droppable>
        </div>
      </div>
    </>
  )
}
