import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ACCESS_CODE, STORAGE_KEY } from "../../utils/access";

export default function SpaceLogin() {

    const [code, setCode] = useState("");
    const [remember, setRemember] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {

        if (code.trim().toLowerCase() === ACCESS_CODE.toLowerCase()) {

            if (remember) {
                localStorage.setItem(STORAGE_KEY, "true");
            } else {
                sessionStorage.setItem(STORAGE_KEY, "true");
            }

            navigate("/space/dashboard");

        } else {

            setError("Invalid Access Code");

        }
    };

    return (

        <div style={{padding:"40px",textAlign:"center"}}>

            <h1>🚀 Indian Space Olympiad 2026</h1>

            <h3>Private Learning Portal</h3>

            <input

                type="password"

                placeholder="Enter Access Code"

                value={code}

                onChange={(e)=>setCode(e.target.value)}

                style={{padding:"10px",width:"250px"}}

            />

            <br/><br/>

            <label>

                <input

                    type="checkbox"

                    checked={remember}

                    onChange={()=>setRemember(!remember)}

                />

                Remember this device

            </label>

            <br/><br/>

            <button onClick={handleLogin}>

                Continue

            </button>

            <br/><br/>

            <span style={{color:"red"}}>

                {error}

            </span>

        </div>

    );
}