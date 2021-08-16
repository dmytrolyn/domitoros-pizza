import React, { useEffect } from 'react';

const withAuthorizedSideRequest = (Component) => {
    let ComponentWithAuthorizedRequest = (props) => {
        useEffect(() => {
            const getData = () => {
                props.getData(props.token);
            }
            getData();
        }, [props])
        return <Component {...props} />
    }

    return ComponentWithAuthorizedRequest;
}

export default withAuthorizedSideRequest;