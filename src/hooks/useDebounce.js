import { useState,useEffect } from 'react';
function useDebounce(value,delay) {
    const [currentValue,setCurrentValue] = useState(value)
    useEffect(()=>{{
        const handler=setTimeout(()=>setCurrentValue(value),delay)
        return ()=>clearTimeout(handler)
    }},[value,delay])
    return ( currentValue );
}

export default useDebounce