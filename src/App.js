// import React from "react";
// import DataFetcher from "./DataFetcher";

// function App() {
//   var url =
//     "https://newsapi.org/v2/everything?q=bitcoin&apiKey=ed1eee6b688545cc91022ebf7ddade91";
//   var req = new Request(url);
//   //"https://swapi.dev/api/people/1/">
//   //<p>{JSON.stringify(data)}</p>
//   //data.map(d=>(<p>{d.title}</p>))
//   return (
//     <div>
//       <DataFetcher url={req}>
//         {({ data, loading }) =>{
//           if(loading){
//             <h1>Loading...</h1>
//           }
//           else {
//            for(var i=0;i<data.length;i++){
//            <p>{data[i].title}</p>
//            }
//           }
//         }
//       }
//       </DataFetcher>
//     </div>
//   );
// }

// export default App;
import React, {Component} from "react"
import "./App.css"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    
    componentDidMount() {
        this.setState({loading: true})
        fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=ed1eee6b688545cc91022ebf7ddade91")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data.articles
                })
                console.log(this.state.data)
            })
    }
    
    render() {
        return (
            <div>
               {this.state.data.map((item,index)=>{
                 return(
                   <div>
                 <h2>
                   {item.title}
                 </h2>
                 <img src={item.urlToImage} alt="pic" className="image"/>
                <a href={item.url} className="button"><button >Read More...</button></a>
                 <hr/>
                 </div>
                 )
               })}
            </div>
              
        )
    }
}

export default App
