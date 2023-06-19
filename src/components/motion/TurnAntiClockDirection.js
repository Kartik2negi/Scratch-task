import React, { useEffect, useState } from 'react'
import Icon from '../Icon';

function TurnAntiClockDirection() {
    const [rotateAntiClockWise, setRotateAntiClockWise] = useState(0);
    const [checkAngle, setCheckAngle] = useState({
        angle: 0
    });

    const handleTurnAntiClockDirection = () => {
        setCheckAngle({ angle: checkAngle.angle - rotateAntiClockWise })
        let ele = document.getElementById('active-cat');
        ele.style.position = "relative";
        ele.style.transform = `rotate(${-rotateAntiClockWise + checkAngle.angle}deg)`;

    }
    return (
        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
            onClick={() => handleTurnAntiClockDirection()}
        >
            {"Turn "}
            <Icon name="undo" size={15} className="text-white mx-2" />
            <input
                type="number"
                className="text-black text-center w-16 mx-2 rounded-full"
                value={rotateAntiClockWise}
                onChange={(e) => {
                    setRotateAntiClockWise(parseInt(e.target.value));
                }}
            />
            {"degrees"}
        </div>
    )
}

export default TurnAntiClockDirection