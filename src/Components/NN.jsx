import Find from "./Find";
import Front from "./Front";
import { useState } from "react";
function NN() {

    const [searchTerm,setsearchTerm] = useState('');
    return (
        <div>
            <Front update={setsearchTerm} />
            {(searchTerm) ? <Find user={searchTerm} key={searchTerm} /> : <div style={{padding : '10px' , textAlign : 'center'}}>
                <div>Write the name to show the avatar</div>
                <div>The Image will be shown below</div>
                </div>}
        </div>
    );
}
export default NN;