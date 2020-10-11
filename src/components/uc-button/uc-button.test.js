import React from "react";
import UcButton from "./uc-button";

export default class UcButtonTest extends React.Component{
    render() {
        return(
            <div>
                <h3>测试</h3>
                <UcButton size="large"/>
                <UcButton size="small"/>
                <hr/>
                <UcButton type="circ">圆</UcButton>
                <UcButton type="circ" siz="large">大</UcButton>
                <UcButton type="circ" size="small">小</UcButton>
                <hr/>
                <UcButton onclick={ev=> console.log(ev.target,this)}>事件</UcButton>
                <UcButton style={{background:'red'}}>样式</UcButton>
                <UcButton disable onclick={ev=> console.log(ev.target)}>禁用</UcButton>


            </div>
        )
    }
}