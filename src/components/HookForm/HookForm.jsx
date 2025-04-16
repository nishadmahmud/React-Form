import React from 'react';
import useInputFeild from '../../hooks/useInputFeild';

const HookForm = () => {
    const [name,nameOnChange] = useInputFeild('');
    const [email,emailOnChange] = useInputFeild('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name,email);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={nameOnChange} defaultValue={name}/>
                <br />
                <input type="email" name="email" onChange={emailOnChange} defaultValue={email}/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;