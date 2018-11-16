import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import App from "./App";

class DZone extends Component {

    render() {
        <Dropzone
            multiple={false}
            accept="image/*"
            maxSize={80}
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>
    }
}

export default DZone;