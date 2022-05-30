import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '762919003362-9epl50j8af0ls56v5hlljhdd8b653jok.apps.googleusercontent.com',
                scope: 'email',
                plugin_name: 'Streamy'
            })
        });
    }

    render() {
        return (
            <div>GoogleAuth</div>
        )
    }
}

export default GoogleAuth;