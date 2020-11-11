import React, { Component } from 'react'

export default class DateTime extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time:""
        }
    }
    componentDidMount(){
        let _this = this
        setInterval(function() {
            var date = new Date();
            var n = date.toDateString();
            let h = date.getHours() < 10 ? "0"+date.getHours() : date.getHours()
            let m = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes()
            let am_pm = date.getHours() >= 0 && date.getHours() < 12 ? "AM" : "PM"
            var time = `${h}:${m} ${am_pm}`
            _this.setState({time:time})
        },500)
    }
    render() {
        
        return (
            <div>
                {this.state.time}
            </div>
        )
    }
}
