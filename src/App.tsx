import { format } from "date-fns"

function App() {
  return (
    <>
      <h1 className="text-2xl text-gray-700 m-4 font-bold">Welcome to my portfolio!</h1>
      <p className="text-sm text-gray-400 m-4">Today's Date: {format(new Date(), "dd/MM/yyyy")}</p>
    </>
  )
}

export default App
