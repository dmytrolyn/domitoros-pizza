import React from 'react'
import Contacts from './Contacts';
import { sendFeedback } from '../../services/actions';
import { connect } from 'react-redux';

const ContactsContainer = ({ sendFeedback }) => {
    const prepareFeedback = async (data) => {
        sendFeedback(data);
    }
    
    return (
        <Contacts sendFeedback={prepareFeedback} />
    )
}

export default connect(null, { sendFeedback })(ContactsContainer);