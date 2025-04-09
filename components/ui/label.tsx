import React from'react';

const Label: React.FC<any> = ({ children, className }) => {
    return <label className={className}>{children}</label>;
};


export default Label    