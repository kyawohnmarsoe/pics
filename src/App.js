import React from 'react'
import ReactDOM from 'react-dom'
import Unsplash from './api/Unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component  {
    state = {images:[]}
    searchSubmit = async terms => {
    const response = await Unsplash.get('/search/photos',{
           params:{query: terms},
       })
    this.setState({
        images:response.data.results
    })
   }
    render(){
        return(
            <div className="ui container" style={{ marginTop:'10px'}}>
                <SearchBar searchSubmit={this.searchSubmit} />
               <ImageList images={this.state.images} />
            </div>
        )
    }
}
export default App
