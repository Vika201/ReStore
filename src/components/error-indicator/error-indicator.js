import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <span className='error'>Error</span>
            <div>Something has gone terribly wrong</div>
        </div>
    )
};

export default ErrorIndicator;