import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue',
      fontSize: 10
    };

    this.onSetColor = this.onSetColor.bind(this);
    this.onChageSize = this.onChageSize.bind(this);
    this.onSettingDefault = this.onSettingDefault.bind(this);
  }

  onSetColor(params) {
    this.setState({
      color: params
    })
  }

  onChageSize(value) {
    
      if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
        this.setState({ fontSize: (this.state.fontSize + value) })
      } else {
        this.setState({ fontSize: (this.state.fontSize) });
      }
  }

  onSettingDefault(value) {
    if (value) {
      this.setState({
        color: 'blue',
        fontSize: 10
      });
    }
  }

  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker
            color={this.state.color}
            fontSize={this.state.fontSize}
            onReceiveColor={this.onSetColor} />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChageSize} />
            <Reset onSettingDefault={this.onSettingDefault} />
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default App;
