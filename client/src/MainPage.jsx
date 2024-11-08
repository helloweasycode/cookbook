import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function MainPage(){
    const navigate = useNavigate();
    return(
        <div className="page-wrap">
            <h2>main page</h2>
            <button onClick={() => {
                navigate("/write");
            }}>글쓰기</button>
        </div>
    )
}
export default MainPage;
