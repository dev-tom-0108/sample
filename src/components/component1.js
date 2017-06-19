import React, {Component} from 'react'
import Component2 from './component2'

class Component1 extends Component {
    constructor(props){
        super(props);

        this.state ={
            userId: ''
        }
        this.click = this.click.bind(this);
        this.change = this.change.bind(this);
        this.press = this.press.bind(this);
   };

   componentWillMount() {
        this.setState({userId: this.state.userId})
        console.log(this.state.userId)
    }

    click() {
        this.setState({userId: '123'});
        console.log("com 1:" + this.state.userId);
        // this.setState({userId:event})
    }
    press(event){
        this.setState({userId:event})
    }
    change(event){
        this.setState({userId: event.currentTarget.value});
    }

    render(){
        return(
            <div className="divcom1">
                <button className="com1" onClick={this.click}>Hello Child</button>
                <input type="text" value={this.state.userId} onChange={this.change}/>                                    
                <Component2 data={this.state.userId} onPress={this.press}/>                                          
            </div>
        );
    }
}

export default Component1;