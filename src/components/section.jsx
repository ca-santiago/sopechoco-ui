import React from 'react';

function Section({ children, className }) {
    return (
        <div className={className + " h-screen"}>
            {children}
        </div>
    );
}

export default Section;