import { Component } from 'react';
import ListNews from './components/main-news/ListNews'
import { dataBase } from './Data';
import { data } from './components/aside/assets/asideItems';
import Aside from './components/aside/Aside';

class App extends Component {
    render() {
        return (<>
            <ListNews news={dataBase.ItemList} />
            <Aside data ={data}/>
            </>
        )
    }
}

export default App