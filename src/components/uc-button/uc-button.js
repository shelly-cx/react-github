import React,{Component} from "react";
import styles from './uc-button.module.css';
import propTypes from 'prop-types';

/*
*type:类型  default:circ
* onclick:点击后的函数
* style:object  行间样式
* size: 尺寸 small large default
* disabled: boolean 校验
*/

export  default  class UcButton extends Component{

    static defaultProps = {
        onclick:()=>{},
        size:'default',
        style:{},
        disable:false,
        type:'default',

    };
    static propTypes ={
        onclick:propTypes.func,
        size: propTypes.string,
        style:propTypes.object,
        disable: propTypes.bool,
        type: propTypes.string,
    };
    render() {
        //children 来自props 判断是否有传值
        let{children,style,size,onclick,disable,type} = this.props;
        return(
            <button
                // className={`uc-button-defaule uc-button-defaule-large`}
                // className={`uc-button-circ uc-button-circ-small`}
                className={`${styles[`uc-button-${type}`]} ${styles[`uc-button-${type}--${size}`]}`}

                style={style}
                onClick={(e) =>{
                    onclick(e);
                    e.stopPropagation()
                }

                }
                disabled={disable}
            >
                {children ? children : '按钮'}
            </button>
        )
    }
}