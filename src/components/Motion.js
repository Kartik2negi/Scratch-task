import React from 'react'
import Icon from './Icon'
import MoveX from './motion/MoveX'
import MoveY from './motion/MoveY'
import TurnClockDirection from './motion/TurnClockDirection'
import TurnAntiClockDirection from './motion/TurnAntiClockDirection'
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";

function Motion() {

    let component = [{
        id: "X",
        child: <MoveX />
    },
    {
        id: "Y",
        child: <MoveY />
    },
    {
        id: "ACW",
        child: <TurnAntiClockDirection />
    },
    {
        id: "CW",
        child: <TurnClockDirection />
    }];

    return (
        <>
            <Droppable droppableId="droppable-area">
                {
                    (provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="droppable-area"
                        >
                            {component?.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={`${item.id}-i`}
                                    index={index}
                                >
                                    {(provided) => {
                                        return (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                {item.child}
                                            </div>
                                        )
                                    }}
                                </Draggable>
                            ))}
                        </div>
                    )
                }
            </Droppable>
        </>
    )
}

export default Motion