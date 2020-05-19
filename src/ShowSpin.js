import React , {Component} from 'react';
//import "./Spin.js";
import {showSpin} from './Spin';
class ShowSpin extends Component {
    componentWillMount() {
        
        this.myfunction();
        //showSpin("https://cdn.gsmarena.com/vv/spin/samsung-galaxy-a6-plus-2018.jpg");
        
        // this.$el = $(this.el);
        // this.$el.showSpin("https://cdn.gsmarena.com/vv/spin/samsung-galaxy-a6-plus-2018.jpg");
    }
    myfunction(){
        
        showSpin("https://cdn.gsmarena.com/vv/spin/samsung-galaxy-a6-plus-2018.jpg");
    }
  
    componentWillUnmount() {
        //this.$el.showSpin('destroy');
        this.myfunction();
    }
  
    render() {
      return (
              // eslint-disable-next-line 
            <a href="#" className="btn btn-primary" onClick={ this.myfunction }>Say Something</a>
         
      );
    }
  }
  
  export default ShowSpin;