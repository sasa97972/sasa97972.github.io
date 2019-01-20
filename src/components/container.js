import React from 'react';

const Container = (props) => {
    const styles = {
        maxWidth: 1140,
        margin: '100px auto',
    };

    return (
        <div
            style={styles}
            className="container">
            {props.children}
        </div>
    );
};

export default Container;