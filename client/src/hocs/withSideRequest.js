import React, { useEffect } from 'react';

const withSideRequest = (Component) => {
    let ComponentWithRequest = (props) => {
        useEffect(() => {
            const getData = () => {
                if(props.data.length === 0) {
                    props.getData();
                }
            }
            getData();
        }, [props])
        return <Component {...props} />
    }

    return ComponentWithRequest;
}

export default withSideRequest;