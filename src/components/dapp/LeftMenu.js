import React, { Component } from 'react';
/**
 * 
 * @api {method} /path title
 * @apiName apiName
 * @apiGroup group
 * @apiVersion  major.minor.patch
 * 
 * 
 * @apiParam  {String} paramName description
 * 
 * @apiSuccess (200) {type} name description
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 *     property : value
 * }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *     property : value
 * }
 * 
 * 
 */
class LeftMenu extends Component {
    constructor(props) {
       super(props);
       let {menulist} = props;
       console.log(menulist)
        this.state = {
            menulist
            // showtoast: false, //弹出提醒
        };
    }

    ToLink(link) {
        this.props.ToLink(link);
    }

    childList(child_list) {
        return child_list.map((menu, index) => {
            let label = menu.label;
            return (
                <li key={index} >
                    <a onClick = { label => this.ToLink(menu.link) } >
                        {menu.label}
                    </a>
                </li>
            );
        });
    }

    render() {
        let {menulist} = this.state;
        const menudom = menulist.map((menu, index) => {
            return (
                <div key={index} >
                     <p className="menu-label">
                        {menu.label}
                    </p>
                    <ul className="menu-list">
                        {this.childList(menu.child_list)}
                    </ul>
                </div>    
            );
        });

        return (
            <div className="box" style={{ width: 200 }}>
                <aside className="menu">
                    {menudom}
                </aside>
            </div>

        )
    }
}

export default LeftMenu
