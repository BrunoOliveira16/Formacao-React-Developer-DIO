import React, { Component} from "react";

export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0};
        this.handleClick = this.handeClick.bind(this);
    }

    handeClick() {
        // TODO
    }
    
    render() {
        return <div>AppClass</div>;
    }
}