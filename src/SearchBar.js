import React from 'react'

class SearchBar extends React.Component {
    state = {term:'birds'}
    formSubmit = (e) =>{
        e.preventDefault();
        this.props.searchSubmit(this.state.term)
    }
    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.formSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={(e)=> this.setState({term:e.target.value})} value={this.state.term} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar