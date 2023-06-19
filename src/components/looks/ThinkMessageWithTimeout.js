import React, { useState } from 'react'

function ThinkMessageWithTimeout() {

    const [state, setState] = useState({
        show_msg: false,
        message: "Hm..",
        timer: 0
    });

    const handleThinkMessageTimeout = () => {
        let ele = document.getElementById("message-box-id-think");
        let ele1 = document.getElementById("message-box-id-think-1");
        ele1.innerHTML = state.message;
        ele.style.display = "block";

        setTimeout(() => {
            ele.style.display = "none";
        }, state.timer * 1000)
    }

    return (
        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
            onClick={() => handleThinkMessageTimeout()}
        >
            {"Think"}
            <input
                type="text"
                className="text-black text-center w-12 mx-2 rounded-full"
                value={state.message}
                onChange={(e) => {
                    e.target.value.length > 0 &&
                        setState({ ...state, message: e.target.value })
                }}
            />
            {"for"}
            <input
                type="number"
                className="text-black text-center w-8 mx-1 rounded-full"
                value={state.timer}
                onChange={(e) => {
                    parseInt(e.target.value) > 0 &&
                        setState({ ...state, timer: parseInt(e.target.value) })
                }}
            />
            {"seconds"}
        </div>
    )
}

export default ThinkMessageWithTimeout