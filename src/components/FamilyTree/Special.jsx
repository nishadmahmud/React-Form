import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name}) => {
    const newAsset = useContext(AssetContext);
    return (
        <div>
            <h3>Special {name}</h3>
            <p>Asset: {newAsset}</p>
        </div>
    );
};

export default Special;