import React,{Component} from "react";
import UcInput from "./uc-input";

export default class UcInputTest extends Component{
    state={
        ipt:'默认输入',
        ipt2:'默认输入2'
    };
    changeIpt = e => this.setState({[e.target.name]:e.target.value})
    render() {

        return(
            <div>
                <h3>测试</h3>

                <h4>多行</h4>

                <UcInput label="自我介绍" multi model={{name:"ipt",value:this.state.ipt,onChange:this.changeIpt}}/>
                <UcInput multi model={{name:"ipt",value:this.state.ipt,onChange:this.changeIpt}}/>
                <UcInput multi style={{backgroundColor:'blue'}} />

                <h4>单行</h4>
                <UcInput ref={ el => this.ucipt1 = el} style={{background:'pink'}}/>
                <UcInput label="用户" model={{name:"ipt2",value:this.state.ipt2,onChange:this.changeIpt}}/>
                <UcInput type="password" label="密码" model={{name:"ipt2",value:this.state.ipt2,onChange:this.changeIpt}}/>


            </div>
        )
    }
    componentDidMount() {
        console.log(this.ucipt1)
    }
}