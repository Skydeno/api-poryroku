import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    render () {
        if(this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat = {this.state.lat} />
        }
        if (!this.state.lat && this.state.errorMessage) {
            return <div>Błąd: {this.state.errorMessage}</div> //tutaj
        }
        return <Spinner />
    }

    componentDidMount () {
        window.navigator.geolocation.getCurrentPosition (
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (error) => {
                this.setState({errorMessage: error.message});
            }
        );
    }
}

ReactDOM.render (<App />, document.getElementById('root'));