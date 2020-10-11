import React from "react";
import UcCell from "./uc-cell";
import UcButton from "../uc-button/uc-button";

export default class UcCellTest extends  React.Component{

    add = (e) =>{
        console.log('add',e,this)
    }

    render() {
        return(
            <div>
                <h3>测试</h3>
                <UcCell title="标题"/>
                <UcCell title="标题" lable="主标题" index={0}/>
                <UcCell title="标题" lable="主标题" index={0} url="http://www.baidu.com"/>
                <UcCell title="标题" lable="主标题" index={0} to={{pathname:'/detail/1',search:{collectionName:'home'}}}/>

                <UcCell title="标题" lable="主标题" index={0} to={{pathname:'/detail/2',search:{collectionName:'home'}}}>
                    <UcButton type="circ" size="small" onclick={this.add}>+</UcButton>
                </UcCell>


            </div>
        )
    }
}