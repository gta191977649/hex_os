import React, { Component } from 'react'
import Draggable from 'react-draggable'; // Both at the same time
import { Resizable, ResizableBox } from 'react-resizable';

export default class Window extends Component {
    render() {
        return (
            <ResizableBox>
                <Draggable>
                    <div className="hex-window">
                        <div className="hex-window-title">
                        
                            {this.props.title}
                        </div>
                        <div className="hex-window-content" style={{'textAlign':'center'}}>
                        {this.props.content}
                        
                        </div>
                        
                    </div>
                </Draggable>
            </ResizableBox>
        )
    }
}
