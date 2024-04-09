import React from "react";
import { Input } from "antd";
const InputLabel = ({
    labelName,
    id,
    type = "text",
    placeHolder,
    onChange,
    value,
    name,
}) => {
    return (
        <div style={{ margin: "10px 0" }}>
            <label htmlFor={id}>{labelName}</label>
            <Input
                style={{ margin: "5px 0" }}
                placeholder={placeHolder}
                id={id}
                name={name}
                onChange={onChange}
                value={value}
                type={type}
            />
        </div>
    );
};

export default InputLabel;
