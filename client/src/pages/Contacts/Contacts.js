import React from 'react'
import UseScript from '../../utils/UseScript';
import ContactsInfo from './components/ContactsInfo';
import ContactsForm from './components/ContactsForm';

export default function Contacts({ sendFeedback }) {
    return (
        <>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1796.4311288364233!2d30.450253931989586!3d50.44971924745936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc2665615229%3A0xf4507ae46d0d275c!2z0J7QsdGJ0LXQttC40YLQuNC1IOKEljE0INCd0KLQo9CjICLQmtCf0Jgi!5e0!3m2!1sru!2sua!4v1590609153066!5m2!1sru!2sua" width="800" height="600" frameBorder="0" title="location" allowFullScreen={true} aria-hidden="false" tabIndex="0"></iframe>
            <h2>Our contacts</h2>
            <div className="contacts">
                <ContactsInfo />
                <div className="contacts__feedback">
                    <ContactsForm onSubmit={({ name, message }) => sendFeedback({ name, message })}/>
                </div>
            </div>
            {UseScript("https://cdn.jsdelivr.net/npm/goodshare.js@6/goodshare.min.js")}
        </>
    )
}