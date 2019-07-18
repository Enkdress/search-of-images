import React, { Component } from 'react';


import './Results.css';

export default class Result extends Component{


    render(){

        const appState = this.props.data

        return(
            <React.Fragment>
                {appState.map(image => {
                    return (
                        <div className='card col-sm-3' key={image.id}>
                            <div className="main-image">
                                <img className='images card-img-top' src={image.previewURL} alt=''/>
                            </div>
                            <div className="card-body">
                                <div className="tags text-center">
                                    <p className="card-text">downloads: {image.downloads}</p>
                                    <p className="card-text">views: {image.views}</p>
                                    <p className="card-text">likes: {image.likes}</p>
                                </div>
                                <div className="card-title text-center">
                                    <h4 className="card-title">
                                        <i className='user-image'><img src={image.userImageURL} alt={image.user}/>
                                            {image.user}
                                        </i>
                                    </h4>
                                </div>
                            </div>
                        </div> );
                    })}
                </React.Fragment>
        )
    }
}