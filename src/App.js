import React, {Component} from "react"
import "./App.css"
class App extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            searchItem:"",
            clicked:false
        }
        this.handleChange=this.handleChange.bind(this)
        this.loadUrl=this.loadUrl.bind(this)
    }
    handleChange(event) {
        this.setState({
           searchItem: event.target.value
            })
    }
   
    loadUrl(event) {
        event.preventDefault()
         this.setState({clicked: true})
          console.log("item: "+this.state.searchItem)
        // const url ={this.state.search}
        fetch(`https://newsapi.org/v2/everything?q=${this.state.searchItem}&apiKey=ed1eee6b688545cc91022ebf7ddade91`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data.articles
                })
                console.log(this.state.data)
            })
        
    }
    componentDidMount() {
        if(this.state.clicked===false){
        fetch("https://newsapi.org/v2/everything?q=science&apiKey=ed1eee6b688545cc91022ebf7ddade91")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data.articles
                })
                console.log(this.state.data)
            })
        }
    }
    
    render() {
        return (
            <div>
                <h1 className="strokeh1">READ NEWS</h1>
                  <form>
               <input type="text" 
                placeholder="What are you looking for?"
                className="searchTerm"
                 name="todo" value={this.state.searchItem}
                  onChange={this.handleChange}
                  />
                <button onClick={this.loadUrl} className="example_b">See</button>
            </form>
            
            {
               this.state.data.map((item,index)=>{
                 return(
                   <div key={index}>
                 <h2 className="strokeme">
                   {item.title}
                 </h2>
                 <img src={item.urlToImage} alt="pic" className="image"/>
                 <p>{item.description}</p>
                <a href={item.url} target="_blank" rel="noreferrer">
                    <button  className="example_b read" >Read More...</button>
                    </a>
                 <hr/>
                 </div>
                 )
               })}
            </div>
              
        )
    }
}

export default App
