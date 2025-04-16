import React from 'react';
import Special from './Special';

const MySelf = ({asset}) => {
    return (
        <div>
            <h3>Myself</h3>
            <section>
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default MySelf;