//import "./login.css"
import { useState, useContext, useRef } from 'react'

function main() {
    const onSubmit = (data) => {
        localStorage.setItem(data.email, JSON.stringify({ 
            name: data.name, password: data.password 
        }));
        console.log(JSON.parse(localStorage.getItem(data.email)));
    };
    
    return (
        <div>
            <form action="action_page">Email</form>
            <img src="" alt="place_holder" />
            <div className='intro'>
                Welcome to Divne's Vyne
                In order to view this page please login.
            </div>
            
        </div>
    )
}