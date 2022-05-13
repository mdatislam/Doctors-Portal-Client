import React from 'react';

const CommonButton = ({children}) => {
    return (
        <div>
            <button class="btn  bg-gradient-to-r from-secondary to-primary hover:from-pink-500 hover:to-yellow-500  font-bold ">{children}</button>
        </div>
    );
};

export default CommonButton;