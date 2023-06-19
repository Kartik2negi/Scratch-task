import React, { useState } from 'react'

function MessageWithTimeout() {
    const [state, setState] = useState({
        show_msg: false,
        timer_message: "Hey..!!",
        timer_for_msg: 0,
    });

    const handleMessage = () => {

        let ele = document.getElementById("message-box-id");

        ele.innerHTML = state.timer_message;

        ele.style.display = "block";
        ele.style.position = "relative";

        setTimeout(() => {
            ele.style.display = "none";
        }, state.timer_for_msg * 1000)

    }

    return (
        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
            onClick={() => handleMessage()}
        >
            {"Say"}
            <input
                type="text"
                className="text-black text-center w-12 mx-2 rounded-full"
                value={state.timer_message}
                onChange={(e) => {
                    e.target.value.length > 0 &&
                        setState({ ...state, timer_message: e.target.value })
                }}
            />
            {"for"}
            <input
                type="number"
                className="text-black text-center w-8 mx-1 rounded-full"
                value={state.timer_for_msg}
                onChange={(e) => {
                    parseInt(e.target.value) > 0 &&
                        setState({ ...state, timer_for_msg: parseInt(e.target.value) })
                }}
            />
            {"seconds"}
        </div>
    )
}

export default MessageWithTimeout