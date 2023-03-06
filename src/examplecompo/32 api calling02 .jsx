import { useEffect, useState } from "react";
import GithubUsers from "./33 apicalling02 ";
// import Loading from "./34 apicalling02 ";


const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    
    
    // const [loading, setLoading] = useState(true);

    // const getUsers = async () => {
        // try {
            // const response = await fetch('https://api.github.com/users');
            //  setLoading(false);
            // setUsers(await response.json());
        // } catch (error) {
        //     setLoading(false);
        //     console.log("my error is "+ error);
        // }
    // }

    useEffect(() => {
        // type 1
        // getUsers();

        // type 2
        fetch('https://api.github.com/users')
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
            setUsers(result)
            })
        
    }, []);

    // if (loading) {
    //     return <Loading />
    // }

    return (
        <>
        
            <GithubUsers users={users}/>
        </>
    )
}

export default UseEffectAPI