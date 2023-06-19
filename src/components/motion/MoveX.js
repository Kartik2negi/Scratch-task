import React, { useContext, useState } from 'react'
import { AppDataProvider } from '../../App';

export const handleClickXMove = (stepsX) => {
  let ele = document.getElementById('active-cat');
  let left = ele.offsetLeft;
  ele.style.position = "relative";
  ele.style.left = left + stepsX + "px";
}

function MoveX() {

  const { runData, setRunData } = useContext(AppDataProvider);

  const [stepsX, setStepsX] = useState(0);


  return (
    <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      id='move-x'
      onClick={() => handleClickXMove(stepsX)}
    >
      {"Move"}
      <input
        type="number"
        className="text-black text-center w-16 mx-2 rounded-full"
        value={stepsX}
        onChange={(e) => { setStepsX(parseInt(e.target.value)); setRunData([...runData, { id: "X", value: parseInt(e.target.value) }]) }}
      />
      {"steps : X"}
    </div>
  )
}

export default MoveX;

