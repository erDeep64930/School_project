import AllRoutes from "./Routes/AllRoutes"
import {Header, Footer,Navbar} from "./components/index"



const App = () => {
  return (
    <div className="">
    <Navbar />
    <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App