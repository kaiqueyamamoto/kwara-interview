import React from "react";

export default function DebounceCN(props: string) {

    const [inputValue, setInputValue] = React.useState("");

    React.useEffect(() => {
        const timeoutID = setTimeout(() => console.log(inputValue), 5000)
        return () => clearTimeout(timeoutID);
    }, [inputValue])

    return (
        <div>
            <h1> Valor digitado: {inputValue}</h1>

            <input
                className={"rounded bg-white text-black"}
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setInputValue(e.currentTarget.value) }}
            />
        </div>
    )
}