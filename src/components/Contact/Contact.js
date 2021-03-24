import React from 'react';
import { useState } from 'react';

function Contact() {
    const [firstName, setFirstName ] = useState( '' ); 
    const [lastName, setLastName ] = useState( '' ); 
    const [bestImpression, setBestImpression ] = useState( '' ); 
    const [output, setOutput ] = useState( '' );

    let handleFirstName = event => {
        setFirstName( event.target.value );
        setOutput( '' );
    };
    let handleLastName = event => {
        setLastName( event.target.value );
    };
    let handleBestImpression = event => {
        setBestImpression( event.target.value );
        setOutput( `${firstName} ${lastName}'s best impression is ${bestImpression}`)
    };
    if( firstName !== '' && lastName !== '' && bestImpression !== '') {
        return (
            <div>
                <form>
                    <input type="text" placeholder="First Name" onChange = { handleFirstName }></input>
                    <input type="text" placeholder="Last Name" onChange = { handleLastName }></input>
                    <input type="text" placeholder="Best Impression" onChange = { handleBestImpression }></input>
                    <button type="reset">Join Us!</button>
                </form>
                <p>{output}</p>
                <p>Phone: 612-644-993 </p>
                <p>Email: lucas.c.gabrielson@gmail.com </p>
            </div>
        )
    }
    else {
        return (
            <div>
                <form>
                    <input type="text" placeholder="First Name" onChange = { handleFirstName }></input>
                    <input type="text" placeholder="Last Name" onChange = { handleLastName }></input>
                    <input type="text" placeholder="Best Impression" onChange = { handleBestImpression }></input>
                    <button type="reset">Join Us!</button>
                </form>
                <p>Phone: 612-644-993 </p>
                <p>Email: lucas.c.gabrielson@gmail.com </p>
            </div>
        )
    }
    
} // end Constant

export default Contact;