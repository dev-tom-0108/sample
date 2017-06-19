import React,{Component} from 'react'
import Component3 from './component3'

class Component2 extends Component{
    constructor(props){
        super(props);

        this.state = {
            userId : ''
        };
        this.click = this.click.bind(this);
        this.change = this.change.bind(this);
        this.press = this.press.bind(this);
    }

    // componentWillMount() {
    //     this.setState({userId: this.state.userId})
    //     console.log(this.state.userId)
    // }

    componentWillReceiveProps(nextProps){
        if (nextProps.data !== this.props.data){
            this.setState({userId:this.state.userId});
        }
    }

    click() {
        this.setState({userId:'456'})
        console.log("com 2:" + this.state.userId)
        // this.props.onPress(event)
    }
    press(event){
        this.props.onPress(event)
    }

    change(event){
        this.setState({userId: event.currentTarget.value});
    }

    render(){
        return (
            <div className="divcom2">
                <button className="com2" onClick={this.click}>Hello Child</button>
                <input type="text" onChange = {this.change} value={this.state.userId}/>
                <Component3 data={this.state.userId} onPress={this.press}/>
            </div>
        );
    }

}

export default Component2;