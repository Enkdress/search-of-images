import React, { Component } from 'react';


import './Results.css';

export default class Result extends Component{


    render(){

        const appState = this.props.data

        return(
            <div>
                {appState.map(image => {
                    return (
                        <div className='card' key={image.id}>
                            <div className="main-image">
                                <img className='images' src={image.webformatURL} alt= {image.tags}/>
                                
                                <div className="bodyCard card-body">
                                    <div className="card-title text-center">
                                        <p>
                                            <img src={image.userImageURL}/>
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
                            
                        </div> );
                    })}
            </div>
        )
    }
}