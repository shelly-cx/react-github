import React,{Component} from "react";
import styles from './uc-cell.module.css';
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

/*
*title :string
* lable :string 描述
* url :string 多页跳转
* to : object {pathname:string,search:string} 单页跳转
* index:number 1
 */

class UcCell extends Component{
    static defaultProps = {
        url:'',
        to:null,
        index:undefined,
        lable:'',
    };
    static propTypes = {
        title: propTypes.string.isRequired,
        label: propTypes.string,
        url: propTypes.string,
        to: propTypes.shape({
            pathname: propTypes.string.isRequired,
            search: propTypes.shape({
                collectionName: propTypes.string,
            })
        })
    };

    //跳转函数
    push = (e) =>{
        let {to,url,history} = this.props;
        if(url) window.open(url,'_blank')
        else if (to) history.push({pathname:to.pathCache,search:`collectionName=${to.search.collectionName}`})
        e.stopPropagation();
    };

    render() {
        let {index,title,lable,children} = this.props;
        return(
            <div className={styles['uc-cell']}
            onClick={this.push}
            >
                {children && <span className={styles.flr}>{ children }</span>}
                <h2>{index + 1 ? <span>{index + 1} . </span> : null}{title}</h2>
                <p>{lable}</p>
            </div>
        )
    }

}

export  default  withRouter(UcCell)