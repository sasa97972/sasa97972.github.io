import React from 'react';
import ReactDOM from 'react-dom';

import Table from './components/table';
import Container from './components/container';

const App = () => {
    return(
        <Container>
            <Table/>
        </Container>
    )
};

ReactDOM.render(<App/>, document.getElementById('app'));

module.hot.accept();