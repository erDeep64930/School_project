
import { Route, Routes } from "react-router-dom";
import {Home ,About, Teams,Academics,Infrastructure, Activities,PageNotFound} from "../pages/index";
const AllRoutes = () => {
  return (
    <div>

<Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/team" element={<Teams />}/>
        <Route path="/academics" element={<Academics />}/>
        <Route path="/infrastructure" element={<Infrastructure />}/>
        <Route path="/activities" element={<Activities />}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default AllRoutes