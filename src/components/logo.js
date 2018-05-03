import React from 'react';


const Logo = (props) => {
    const size = {
        height: props.size ? props.size : 105
    }
        return (
            <div className="logo-main">
                <img style={size} src="/assets/ds_circle_logo.png" alt="daily smarty logo big" />
            </div>
        )
}

export default Logo;