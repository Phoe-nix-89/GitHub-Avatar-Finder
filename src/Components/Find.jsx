import axios from "axios";
import { useEffect, useState } from "react";
function Find({ user }) {
    const [name,setname] = useState('');
    const url = `https://api.github.com/users/${user}`;

    async function Fetch() {
        const response = await axios.get(url);

        setname(response.data.avatar_url);
    }

    useEffect(() => {
        Fetch();
    },[]);


    return (
        <>
            <div style={{display : 'flex' , justifyContent : 'center'}}>
                <img style={{padding : '20px'}} src={name} alt="" />
            </div>
        </>
    );
}
export default Find;