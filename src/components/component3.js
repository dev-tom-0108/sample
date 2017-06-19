import React,{Component} from 'react'
import Component1 from './component1';

class Component3 extends Component{
    constructor(props){
        super(props);
        this.state = {
            userId: ''
        }
        this.click = this.click.bind(this);
        this.change = this.change.bind(this);
    }

    // componentWillMount() {
    //     this.setState({userId: this.props.data})
    // }

    componentWillReceiveProps(nextProps){
        if (nextProps.data !== this.props.data){
            this.setState({userId:this.state.userId});
        }
    }

    click() {
        // this.setState({userId:'789'})
        this.props.onPress(this.state.userId);
        console.log("com 3:" + this.state.userId)
    }
    change(event){
        this.setState({userId: event.currentTarget.value});
    }

    render(){
        return (
            <div className="divcom3">
                <button className="com3" onClick={this.click}>Hello Child</button>
                <input type="text" onChange={this.change} value={this.state.userId} />
            </div>      
        );
    }

}

export default Component3;