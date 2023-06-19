import React from 'react'
import MessageWithTimeout from './MessageWithTimeout'
import SayMessage from './SayMessage'
import ThinkMessage from './ThinkMessage'
import ThinkMessageWithTimeout from './ThinkMessageWithTimeout'
import { Draggable, Droppable } from 'react-beautiful-dnd'

function Looks() {

    let component = [{
        id: "SM",
        child: <SayMessage />
    },
    {
        id: "MWT",
        child: <MessageWithTimeout />
    },
    {
        id: "TM",
        child: <ThinkMessage />
    },
    {
        id: "TMWT",
        child: <ThinkMessageWithTimeout />
    }];

    return (
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
    )
}

export default Looks