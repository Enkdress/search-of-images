import React from 'react';
import './Results.css';

const Result = ({data}) => {
    if (!data) {
        return <h1>No data</h1>
    } else {
        return (
            <div>
                {data.map(image => {
                    return (
                        <div className='card' key={image.id}>
                            <div className="main-image">
                                <img className='images' src={image.webformatURL} alt={image.tags} />

                                <div className="bodyCard card-body">
                                    <div className="card-title text-center">
                                        <p>
                                            <img src={image.userImageURL} />
                                            {image.user}
                                        </p>
                                    </div>
                                    <div className="tags text-center">
                                        <p className="card-text">downloads: {image.downloads}</p>
                                        <p className="card-text">views: {image.views}</p>
                                        <p className="card-text">likes: {image.likes}</p>
                                    </div>
                                </div>
                            </div>
                            <br id="endPage" />
                        </div>);
                })}
            </div>
        )
    }
}

export default Result;

