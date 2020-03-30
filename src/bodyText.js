import React from 'react';
import {Link} from "react-router-dom";
import './App.css';

export default class Text extends React.Component {

    render () {

        let text = 'The technical world is filled with various challenges and hence, every IT certification is essential. IT certifications are vitally responsible for enhancing your career along with your technical skills. Since the upcoming technology is quite sturdy, employers are looking for experienced and certified candidates while screening for tech jobs. The certifications are worth your strategy to build-up a strong resume and gain an effectual experience in a specialized field. Various IT professionals think that their sheer talent is enough to rock the IT world but its demonstration to employers is very necessary. Hence, the certifications are proven to be valuable to gross desired advantages of career advancement.';
        let p_title = 'Get Certified Candidates top-notch skill set';

        return (
            <div className="body-text-1">
                <h3 className='h3'>{p_title}</h3>
                <h4 className='h4'>{text}</h4>
                <div className='button-div'>
                    <button className='button'
                        //        onClick={() => alert("Yes!")}
                    >
                        <Link className='link' to="/know_more">Know More</Link>
                        <i className="fa fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        );
    };

}