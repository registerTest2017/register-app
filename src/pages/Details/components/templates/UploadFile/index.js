import React, { Component, PropTypes } from 'react';
// import proxier from 'proxier';
import styles from './style.scss';

/* eslint-disable no-console */
class UploadFile extends Component {
    constructor (props) {
        super(props);
        this.state = {
            path: ''
        };
        this.isLeftAlign = true;
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSizeCheck = this.handleSizeCheck.bind(this);
        this.base64ToBlob = this.base64ToBlob.bind(this);
        this.fileToBase64 = this.fileToBase64.bind(this);
    }
    componentDidMount () {
        this.handleSizeCheck();
    }
    componentDidUpdate () {
        this.handleSizeCheck();
    }
    handleSizeCheck () {
        const strWidth = this.stringHolder.clientWidth;
        const disWidth = this.displayHolder.clientWidth;
        if (strWidth < disWidth) {
            this.isLeftAlign = true;
        } else {
            this.isLeftAlign = false;
        }
        if (this.toRender) {
            this.setState({});
            this.toRender = false;
        }
    }
    handleOnClick () {
        this.fileInput.click();
    }
    handleOnChange (event) {
        const fileObject = event.target;
        const file = fileObject.files[0];
        this.setState({
            path: event.target.value
        });
        this.handleSizeCheck();
        this.toRender = true;
        this.getFileData(file, (data) => {
            this.props.onChange && this.props.onChange(data, fileObject);
        });
    }
    getFileData (file, fn) {
        return (async () => {
            const base64ToBlob = this.base64ToBlob;
            const fileToBase64 = this.fileToBase64;
            const fileData = await fileToBase64(file);
            const data = base64ToBlob(fileData, file.name);
            return data;
        })().then((data) => {
            typeof fn === 'function' && fn(data);
        });
    }
    fileToBase64 (file) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(file);
        });
    }
    base64ToBlob (base64, fileName) {
        const byteString = atob(base64.replace(/\s/g, '').split(',')[1]);
        const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        const len = byteString.length;
        for (let key = 0; key < len; key += 1) {
            ia[key] = byteString.charCodeAt(key);
        }
        const Builder = window.WebkitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
        let blobURL;
        if (Builder) {
            const builder = new Builder();
            builder.append(ab);
            blobURL = builder.getBlob(mimeString);
        } else {
            blobURL = new window.Blob([ab], { type: mimeString });
        }
        blobURL.name = fileName;
        const fd = new FormData();
        fd.append(this.props.fileKey, blobURL);
        fd[this.props.fileKey] = blobURL;
        return fd;
    }
    render () {
        const textAlignStyle = {
            display: 'block',
            float: this.isLeftAlign ? 'left' : 'right'
        };
        return (
            <div className={styles.uploadFile}>
                <input type="file" accept={this.props.accept} ref={(self) => {
                    this.fileInput = self;
                }}
                    onChange={this.handleOnChange}
                />
                <span tabIndex="0" role="button" onKeyPress={() => {}} onClick={this.handleOnClick}
                    ref={(self) => {
                        this.displayHolder = self;
                    }}
                >
                    <i style={textAlignStyle}
                        ref={(self) => {
                            this.stringHolder = self;
                        }}
                    >{this.state.path}</i>
                </span>
                <button onClick={this.handleOnClick}>{this.props.title}</button>
            </div>
        );
    }
}

UploadFile.propTypes = {
    accept: PropTypes.string.isRequired,
    fileKey: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    title: PropTypes.string
};

UploadFile.defaultProps = {
    accept: 'image/*',
    fileKey: 'file',
    title: '...'
};

export default UploadFile;
