import React, {Component} from "react"
import "./App.css"
class App extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            searchItem:"",
            searchStored:""
        }
        this.handleChange=this.handleChange.bind(this)
        this.addItem=this.addItem.bind(this)
        this.loadUrl=this.loadUrl.bind(this)
    }
    handleChange(event) {
        this.setState({
           searchItem: event.target.value
            })
            console.log(this.state.searchItem)
    }
    addItem(event){
        event.preventDefault()
        this.setState({
            searchStored:this.state.searchItem
        })
       //  this.setState({
       //      searchItem:""
       //  })
        console.log(this.state.searchStored)
   }
   
    loadUrl(event) {
        event.preventDefault()
       if(this.state.todoList!=="" && this.state.todoList!==" "){
        fetch(`https://newsapi.org/v2/everything?q=${this.state.searchStored}&apiKey=ed1eee6b688545cc91022ebf7ddade91`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data.articles
                })
                console.log(this.state.data)
            })
        } else {
            console.log("nothing")
        }
    }
    
    render() {
        return (
            <div>
                  <form>
                <input type="text" name="todo" value={this.state.searchItem} onChange={this.handleChange}/>
                <button onClick={this.addItem}>Search</button>
                <button onClick={this.loadUrl}>See</button>
            </form>
               {this.state.data.map((item,index)=>{
                 return(
                   <div>
                 <h2>
                   {item.title}
                 </h2>
                 <img src={item.urlToImage} alt="pic" className="image"/>
                <a href={item.url} className="button" target="_blank"><button >Read More...</button></a>
                 <hr/>
                 </div>
                 )
               })}
            </div>
              
        )
    }
}

export default App
