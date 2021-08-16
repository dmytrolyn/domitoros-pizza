import React from 'react'
import FakeHeaderContainer from './components/FakeHeader/FakeHeaderContainer';
import MainHeader from './components/MainHeader';

export default function Head(){
    return (
        <header className="header">
            <FakeHeaderContainer />
            <MainHeader />
        </header>
    )
}