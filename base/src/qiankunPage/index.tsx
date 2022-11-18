import React from 'react';
import { qinkunMenu } from '../router';

const QianKunPage = () => {
    return (
        <>
            {qinkunMenu.map(item => (
                <div id={item.name} key={item.name} />
            ))}
        </>
    );
};

export default QianKunPage;
