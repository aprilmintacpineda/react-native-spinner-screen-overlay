# react-native-spinner-screen-overlay

There are cases when we want to block the UI with a spinner overlay. It's the simplest way to prevent the user from doing any actions in the UI while a crucial process is taking place, like payments for example. This library provides such a functionality while still making itself as small as it can be.

I created this library to solve a [problem](https://github.com/joinspontaneous/react-native-loading-spinner-overlay/issues/30) I encountered while using [react-native-loading-spinner-overlay](https://github.com/joinspontaneous/react-native-loading-spinner-overlay). In iOS there were times when you show an alert right after removing the spinner and sometimes the alert will close itself even with `cancelable: false` option, there were also times when the spinner won't go away.

# Install

`npm install --save react-native-spinner-screen-overlay`

# Usage

## Rendering SpinnerOverlay component

The recommended way is to put the component on your root component and simply toggle the `visible` props on or off. Pass `true` to `visible` when you want the spinner to show, `false` if otherwise.

```jsx
export default class App extends Component {
  constructor () {
    this.state = {
      blockUI: false
    };
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        // ... rest of the app
        <SpinnerOverlay visible={this.state.blockUI} />
      </View>
    );
  }
}
```

Though you can also render it anywhere, say on a particular route by simply doing something like this:

```jsx
export default class LoginRoute extends Component {
  // ... rest of the code
  render () {
    return (
      <View style={{ flex: 1 }}>
        // ... rest of the code
        <SpinnerOverlay visible={this.state.sendingForm} />
      </View>
    );
  }
}
```

## SpinnerOverlay props

|Name|Description|Expected|Default|
|---|---|---|---|
|modalBackground|The background color of the modal.|[Any color recognized by React-Native.](https://facebook.github.io/react-native/docs/colors)|rgba(0, 0, 0, 0.3)
|spinnerColor|The color of the ActivityIndicator.|[Any color recognized by React-Native.](https://facebook.github.io/react-native/docs/colors)|#000
|spinnerContainerStyles|An object passed to the View which serves as the container of the ActivityIndicator.|A valid React-Native StyleSheet| `{ padding: 20, backgroundColor: '#fff', borderRadius: 20 }`

# Contributing

Discussions, questions, suggestions, bug reports, feature request, etc are all welcome. Just create an issue. Just ensure that you are responsive enough.

---

Created with :heart: by April Mintac Pineda.
