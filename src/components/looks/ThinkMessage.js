import React, { useState } from 'react'

function ThinkMessage() {

    const [state, setState] = useState({
        show_msg: false,
        message: "Hm..",
    });

    const handleThinkMessage = () => {
        let ele = document.getElementById("message-box-id-think");
        let ele1 = document.getElementById("message-box-id-think-1");
        ele1.innerHTML = state.message;
        ele.style.display = "block";
    }

    return (
        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
            onClick={() => handleThinkMessage()}
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
        </div>
    )
}

export default ThinkMessage