import React from 'react';
import {Link} from "react-router-dom";
import './App.css';

export default class KnowMore extends React.Component {

    render () {
        return (
            <div className="body-text-1">
                <h3 className='h3'>Know More</h3>
                <h4 className='h4'>Content About Us</h4>
                <div className='button-div'>
                    <button className='button'
                        //        onClick={() => alert("Yes!")}
                    >
                        <i className="fa fa-arrow-left"></i>
                        <Link className='link' to="/">Back</Link>
                    </button>
                </div>
            </div>
        );
    };

}