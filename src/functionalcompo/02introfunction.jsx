import { Link, Outlet } from "react-router-dom"

const Introfunction = () => {
    return (
        <>
            <br />
            <div className="container">

            <div className="row offset-6 fs-5 ">
                
                <li>
                    <Link to = "statefunction"> State component</Link>
                </li>
                <li>
                    <Link to = "usecontext">Use-context component</Link>
                </li>
                <li>
                    <Link to = "propsfunc">Props component</Link>
                </li>
                <li>
                    <Link to = "inheritancefunc">Composition Inheritance</Link>
                </li>
                <li>
                    <Link to = "usecallback">Use-Callback function</Link>
                </li>
                <li>
                    <Link to = "usememo">Use-Memo function</Link>
                </li>
                <li>
                    <Link to = "usereducer">Use-Reducer function</Link>
                </li>
                <li>
                    <Link to = "apifunc">API function</Link>
                </li>
            </div>
            </div>
            <div className="container">
                <Outlet/>

            </div>
        </>
    )
}
export default Introfunction