import React,{Component} from "react";
import styles from './uc-input.module.css';
import propTypes from 'prop-types';
import renderLable from "./renderLable";

/*
* 受控 || 非受控
* 单行 ||多行
* type / 多行:multi(属性) / label / style / model(双绑)
 */

export default class UcInput extends Component{

    static defaultProps = {
        type: 'text',
        model:null, //非受控
        multi:false, //单行
        label:'', //提示
        style:{}, //行间样式
    };
    static propTypes = {
        type:propTypes.string,
        model:propTypes.shape({
            name:propTypes.string.isRequired,
            value:propTypes.string.isRequired,
            onChange:propTypes.func.isRequired,
            // [proname]:propTypes.any  任意类型
        }),
        multi: propTypes.bool, //单行
        label: propTypes.string, //提示
        style: propTypes.object, //行间样式
    };

    renderInput = () => {
        let {model,style,lable,type} = this.props;
        //非受控
        let el = null;
        if(!model){
            el = (
                <div style={style} className={styles["uc-input"]}>
                    <input type={type} defaultValue="" style={{paddingLeft:lable ? '1.24rem' : '0.24rem'}}/>
                    {lable && renderLable(lable)}
                </div>
            );
            return el;
        }

        //受控
        // let {name,value,onChange} = model;

        el=(
            <div style={style} className={styles["uc-input"]}>
                <input
                    style={{paddingLeft:lable ? '1.24rem' : '0.24rem'}}
                    type={type}
                    // value={value}
                    // onChange={onChange}
                    // name={name}
                    {...model}
                />
                {lable && renderLable(lable)}

            </div>
        );
        return el;
    };

    renderTextarea = () => {

        let {model,  label, style, type} = this.props;

        let el = null;

        //非受控
        if (!model){
            el = (
                <div style={style}>
                    {renderLable(label)}
                    <textarea cols="30" rows="10"></textarea>
                </div>
            );

            return el;
        }

        //受控
        el = (
            <div style={style}>
                {renderLable(label)}
                <textarea
                    type={type}
                ></textarea>

            </div>
        );

        return el;

    };



    render() {
           let {multi} = this.props;
           return multi ? this.renderTextarea() : this.renderInput();


    }
}