import { Route, Routes } from "react-router-dom"
import Introfunction from "./02introfunction"
import Statefunction01 from "./03statefunction"
import Usecontext01 from "./04usecontext"
import Propsm from "./05 propsm"
import Inheritancefunc from "./07 composition inheritance "
import Usecallbackfunc from "./08 usecallback "
import Usememoexample from "./09 use memo function "
import Usereducerexample from "./10 use reducer "
import Apifun from "./api "

const Functionrouter = () => {
    return (
        <>
            
            <Routes>

                <Route path="/" element={<Introfunction />}>
                    <Route path ="statefunction"  element={<Statefunction01/> } />
                    <Route path ="usecontext"  element={<Usecontext01/> } />
                    <Route path ="propsfunc"  element={<Propsm/> } />
                    <Route path ="inheritancefunc"  element={<Inheritancefunc/> } />
                    <Route path ="usecallback"  element={<Usecallbackfunc/> } />
                    <Route path ="usememo"  element={<Usememoexample/> } />
                    <Route path ="usereducer"  element={<Usereducerexample/> } />
                    <Route path ="apifunc"  element={<Apifun/> } />
                </Route>

            </Routes>
        </>
    )
}
export default Functionrouter