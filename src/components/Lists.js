import React, { Component } from 'react';



class Lists extends Component {
    state = { 
        list:false,
     } 
     displayList = () => {
       this.setState({
         list : true,
       })
     }
    render() { 
      const {arrList,price}= this.props;
        return (
          <div className='list-container'>
            <div className={this.state.list ? "view-list" : "hidden-list"}>
              <div className="food">
                {arrList.map((food, index) => (
                  <div key={index + 1}>
                    <h1>{food.name}</h1>
                  </div>
                ))}
              </div>
              <h1>Jami to'lov : {price}</h1>
              <div className="btns">
                <button>Jo'natmoq</button>
                <button>O'chirmoq</button>
              </div>
            </div>
            <button className="btn-list" onClick={this.displayList}>
              Buyurtmalarni Ko'rish
            </button>
          </div>
        );
    }
}
 
export default Lists;