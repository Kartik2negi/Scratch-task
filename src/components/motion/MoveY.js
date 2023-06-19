import React, { useContext, useEffect, useState } from 'react'
import { AppDataProvider } from '../../App';

export const handleClickYMove = (stepsY) => {
    let ele = document.getElementById('active-cat');
    let top = ele.offsetTop;
    ele.style.position = "relative";
    ele.style.top = top + stepsY + "px";
}

function MoveY() {

    const { runData, setRunData } = useContext(AppDataProvider);

    const [stepsY, setStepsY] = useState(0);



    return (
        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
            onClick={() => handleClickYMove(stepsY)}
        >
            {"Move"}
            <input
                type="number"
                className="text-black text-center w-16 mx-2 rounded-full"
                value={stepsY}
                onChange={(e) => { setStepsY(parseInt(e.target.value)); setRunData([...runData, { id: "Y", value: parseInt(e.target.value) }]) }}
            />
            {"steps : Y"}
        </div>
    )
}

export default MoveY;