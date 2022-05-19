import React, { Component } from 'react'
import About from '../components/About';
import Cards from '../components/Cards';

class Main extends Component {
    state = {  } 
    render() { 
        return <main>
           <About />
           <Cards />
        </main>
    }
}
 
export default Main;