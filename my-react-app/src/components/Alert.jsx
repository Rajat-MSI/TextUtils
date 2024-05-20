import React from 'react';

const Alert = (props) => {
    return (
        props.alert &&
        <>
            <div className={`alert alert-${props.alert.alertType} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.alertMessage} </strong>{props.alert.message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    );
};

export default Alert;