import React from 'react';

import './SeasonDisplay.css';

const seasonConfig = {
    lato: {
        text: 'Pali🥵',
        icon: 'sun',
    },
    zima: {
        text: 'Mrozi🥶',
        icon: 'snowflake',
    },
};



const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'lato' : 'zima';
    }
    else {
        return lat > 0 ? 'zima' : 'lato';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, icon} = seasonConfig[season];

    return (
        <div className={`season ${season}`}>
            <i className={`icon-left massive ${icon} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${icon} icon`} />
        </div>
    );    
};

export default SeasonDisplay;