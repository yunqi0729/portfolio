import { format } from "date-fns"

function App() {
  return (
    <>
      <h1>Welcome to my portfolio!</h1>
      <p>Today's Date: {format(new Date(), "dd/MM/yyyy")}</p>
    </>
  )
}

export default App
