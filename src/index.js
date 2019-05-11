/** @format */

import React from 'react';
import { Dimensions, View, ActivityIndicator, StyleSheet, Keyboard } from 'react-native';

const dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    width: dimensions.width,
    height: dimensions.height
  },
  modalSpinnerContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20
  }
});

function RNScreenOverlaySpinner (props) {
  this.props = props;

  this.hideKeyboard = () => {
    if (this.props.visible) Keyboard.dismiss();
  };

  this.componentDidMount = this.hideKeyboard;
  this.componentDidUpdate = this.hideKeyboard;

  this.render = () => {
    if (!this.props.visible) return null;

    return (
      <View
        style={[
          styles.modal,
          {
            backgroundColor: this.props.modalBackground || 'rgba(0, 0, 0, 0.3)'
          }
        ]}>
        <View
          style={
            this.props.spinnerContainerStyles
              ? [styles.modalSpinnerContainer, this.props.spinnerContainerStyles]
              : styles.modalSpinnerContainer
          }>
          <ActivityIndicator size="large" color={this.props.spinnerColor || '#000'} />
        </View>
      </View>
    );
  };

  return this;
}

RNScreenOverlaySpinner.prototype = React.PureComponent.prototype;
RNScreenOverlaySpinner.prototype.constructor = RNScreenOverlaySpinner;

export default RNScreenOverlaySpinner;
