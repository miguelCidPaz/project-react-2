import { Component } from 'react';
import ListNews from './components/ListNews'
import { dataBase } from './Data';

class App extends Component {
    render() {
        return (
            <ListNews />
        )
    }
}

export default App