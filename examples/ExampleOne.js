import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

class ExampleOne extends Component {
  static navigationOptions = {
    header: null
  };

  onNextStep = () => {
    console.log('called next step');
  };

  onPaymentStepComplete = () => {
    alert('Payment step completed!');
  };

  onPrevStep = () => {
    console.log('called previous step');
  };

  onSubmitSteps = () => {
    console.log('called on submit step.');
  };

  render() {
    const stepsStyle = {
      activeStepIconBorderColor: '#FF9100',
      activeStepIconColor: '#FF9100',
      completedProgressBarColor: '#FF9100',
      completedStepIconColor: '#FF9100',
      activeLabelColor: '#FF9100',
      activeStepNumColor: 'white'
    };

    return (
      <View style={{ flex: 1, marginTop: 50 }}>
        <ProgressSteps {...stepsStyle}>
          <ProgressStep
            label="Payment"
            onNext={this.onPaymentStepComplete}
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            centerContainer
          >
            <View style={{ alignItems: 'center' }}>
              <Text>Payment step content</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Shipping Address"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            centerContainer
          >
            <View style={{ alignItems: 'center' }}>
              <Text>Shipping address step content</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Billing Address"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            centerContainer
          >
            <View style={{ alignItems: 'center' }}>
              <Text>Billing address step content</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Confirm Order"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            centerContainer
          >
            <View style={{ alignItems: 'center' }}>
              <Text>Confirm order step content</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

export default ExampleOne;
