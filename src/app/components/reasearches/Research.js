import React, { Component } from 'react';
import './Research.css';

export default class Reasearch extends Component{



    render(){

        return(
            <div className='research container p-5'>
                <div className="mx-auto">
                    <h1 className= 'text-center'>
                        Search your images
                    </h1>

                    <form action= '' onSubmit = {this.props.getData} className="form-inline mt-5 col-sm-12">

                        
                        <input className= 'mx-sm-3 col-sm-7 mb-2 form-control col-sm-6' name='research' type="text" placeholder="Type a reference" />
                        

                        <button type="submit" className="btn btn-danger col-sm-4 mb-2">
                            Search...
                        </button>

                    </form>
                </div>
            </div>
        )
    }
}