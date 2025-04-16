import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name="Dana"></Cousin>
                <Cousin name="Jim"></Cousin>
            </section>
        </div>
    );
};

export default Aunt;