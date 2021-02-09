import React from 'react';
import Picture from './Picture';
import NoPicture from './NoPicture';
import './Results.css';

const Result = ({data}) => {
    if (!data) {
        return <NoPicture />
    } else {
        return (
            <div>
                {data.map(image => <Picture image={image} />)}
            </div>
        )
    }
}

export default Result;

