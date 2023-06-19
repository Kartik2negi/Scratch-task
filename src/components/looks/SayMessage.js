import React, { useState } from 'react'

function SayMessage() {

    const [state, setState] = useState({
        show_msg: false,
        timer_message: "Hey",
    });

    const handleMessage = () => {

        let ele = document.getElementById("message-box-id");

        ele.innerHTML = state.timer_message;

        ele.style.display = "block";
        ele.style.position = "relative";

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
        </div>
    )


}

export default SayMessage