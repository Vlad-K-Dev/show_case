import React, {useState, useEffect} from 'react';

import './App.sass';
import Header from './Components/Header/Header';
import Product from "./Components/Main/Product";

function App() {
    const [courses, setPreview] = useState([])

    useEffect(() => {
        fetch('http://krapipl.imumk.ru:8082/api/mobilev1/update', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',

        })
            .then(response => response.json())
            .then(courses => {
                setPreview(courses.items)
            })
    }, [])

    console.log(useState())
    return (

        <div className="wrapper">
            <Header />
            <Product courses={courses}/>
        </div>
    )
}
export default App;
