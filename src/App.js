import React, { createContext, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragDropContext } from "react-beautiful-dnd";

export const AppDataProvider = createContext(null)

export default function App() {

  const [data, setData] = useState([{ id: "X" }])

  const [runData, setRunData] = useState([])

  console.log("-----runData", runData)

  const onDragEnd = (result) => {

    console.log(result)
    let element = result.draggableId.split("-")[0];
    console.log(element)

    setData([...data, { id: element }])

  };

  useEffect(() => {
    console.log("---useEf", runData, data)
    let a = data?.map((item) => {
      let b = runData?.find((ele) => ele.id = item.id)
      if (b?.value) {
        return { ...item, value: b["value"] }
      } else {
        return { ...item, value: 0 }
      }
    })
    // console.log("---use", a)
    setData(a)
  }, [runData])

  return (
    <AppDataProvider.Provider value={{ runData, setRunData }} >
      <div className="bg-blue-100 pt-6 font-sans">
        <div className="h-screen overflow-hidden flex flex-row  ">
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <DragDropContext onDragEnd={onDragEnd}>
              <Sidebar /> <MidArea component={data} />
            </DragDropContext>

          </div>
          <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <PreviewArea />
          </div>
        </div>
      </div>
    </AppDataProvider.Provider >
  );
}
