import React, { useState } from 'react';

const useInputFeild = (defaultValue) => {
    const [feildValue,setFeildValue] = useState(defaultValue);
    const handleFeildOnChange = e => {
        setFeildValue(e.target.value);
    }

    return [feildValue, handleFeildOnChange];
};

export default useInputFeild;