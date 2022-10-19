import { useEffect, useState } from "react"

const App = () => {

    const [task, setTask] = useState("")

    const local_list = JSON.parse(localStorage.getItem('list'))
    
    const [list, setList] = useState(local_list == null ? [] : local_list)

    useEffect(()=>{
        localStorage.setItem("list", JSON.stringify(list))
    }, [list])

    const addToList = () => {
        if (task != "") {
            setList([...list, task])
            setTask("")
        }
    }

    const removeFromList = (key) => setList(list.filter((_item, id) => key != id)) 

    const deleteAll = () => setList([])

    return (
        <div id="application" className="flex bg-gray-50 flex-col items-center justify-center min-h-[100vh]">

            <div className="border h-[90vh] overflow-auto bg-white p-4 rounded-md shadow" >
                <div className="flex items-center">
                    <input
                        type="text"
                        value={task}
                        className="px-3 w-60 py-1.5 text-gray-800 border border-solid border-gray-300 rounded transition ease-in-out focus:border-blue-600 focus:outline-none"
                        placeholder="Enter Task"
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button
                        type="button"
                        className="ml-2 p-2 text-white bg-blue-700 hover:bg-blue-800 hover:shadow-lg transition-all rounded-full"
                        onClick={addToList}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                    </button>
                </div>

                <div className="text-center pt-4 pb-4">
                    <button
                        type="button"
                        className=" text-white font-medium text-sm px-2 py-1 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg transition-all"
                        onClick={deleteAll}
                    >
                        DELETE ALL
                    </button>
                </div>

                <div>
                    {
                        list.map((item, key) => {
                            return (
                                <div key={key} className="flex py-1 justify-between items-center">
                                    <p className="overflow-auto w-60 text-gray-800">{item}</p>
                                    <button
                                        className="text-red-500 hover:text-red-600"
                                        onClick={() => removeFromList(key)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>

    )
}

export default App
