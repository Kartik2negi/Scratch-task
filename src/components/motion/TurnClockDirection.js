import React, { useEffect, useState } from 'react'
import Icon from '../Icon'

function TurnClockDirection() {
    const [rotateClockWise, setRotateClockWise] = useState(0);
    const [checkAngle, setCheckAngle] = useState({
        angle: 0
    });

    const handleTurnClockDirection = () => {

        setCheckAngle({ angle: checkAngle.angle + rotateClockWise })
        let ele = document.getElementById('active-cat');
        ele.style.position = "relative";
        ele.style.transform = `rotate(${rotateClockWise + checkAngle.angle}deg)`;

    }

    return (
        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
            onClick={() => handleTurnClockDirection()}
        >
            {"Turn "}
            <Icon name="redo" size={15} className="text-white mx-2" />
            <input
                type="number"
                className="text-black text-center w-16 mx-2 rounded-full"
                value={rotateClockWise}
                onChange={(e) => {
                    setRotateClockWise(parseInt(e.target.value));
                }}
            />
            {"degrees"}
        </div>
    )
}

export default TurnClockDirection;