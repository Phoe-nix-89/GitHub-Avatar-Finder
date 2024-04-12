import { useState } from "react";
import Find from "./Find";
import useDebounce from "./useDebounce";

function Front({ update }) {
    // const [name,setname] = useState('');
    const debounce = useDebounce((e) => update(e.target.value))
    return (
        <div style={{
            display : 'flex',
            justifyContent : 'center',
            flexDirection : 'column',
            alignItems : 'center'
        }
        }>
            <div>
                <h1>GitHub Avatar Finder</h1>
                <div style={{display : 'flex' , justifyContent : 'center'}}>
                <input onChange={(e) => debounce(e)} style={{padding : '8px' , border : 'none' , listStyle : 'none'}} placeholder="Enter the user name : " />
                </div>
                {/* {name} */}

            </div>

            

        </div>
    );
}
export default Front;