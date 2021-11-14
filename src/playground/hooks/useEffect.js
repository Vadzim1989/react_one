import { useEffect, useState, useRef } from "react";
import {useCounter} from './useCounter';

export const Test = () => {
    // const [firstRender, setFirstRender] = useState(false);
    const {count, inc, dec} = useCounter(0,1);
    const renderRef = useRef(false);

    useEffect(() => {
        if (!renderRef.current) {
            // setFirstRender(true);
            renderRef.current = true;
        } else {
            console.log('USEEFFECT!');
        }
    });

    console.log('RENDER!');
    return (
        <> 
            <div ref={renderRef}>{count}</div>
            <button onClick={inc}>+</button>
        </>
        )
};


export const TestToggler = () => {
    const [shouldShow, setShouldShow] = useState(true);

    return (
        <>
            <button onClick={()=> setShouldShow((prev) => !prev)}>Toggle</button>
            {
                shouldShow && <Test/>
            }
        </>
    );
};