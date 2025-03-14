// @ts-ignore
import * as React from "react";
import logo from "./logo.svg";

// @ts-ignore
function DocAILogo(props) {
    return (
        <div style={{ display: "flex", alignItems: "center" }} {...props}>
            <img src={logo} alt="DocAI Logo" style={{ height: "50px", marginRight: "10px" }} />
            <span
                style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#0F3A24",
                }}
            >
                DocAI
            </span>
        </div>
    );
}

export default DocAILogo;
