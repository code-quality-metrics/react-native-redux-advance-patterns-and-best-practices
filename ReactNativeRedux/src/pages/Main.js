import React from 'react'
import { connect } from 'react-redux'
import {StyleSheet, Platform, Image, Text, View} from 'react-native'

export default class Main extends React.Component {
  render() {
    const { email } = this.props
    return (
      <View style={styles.container}>
        <Text>Hi {email && email}!</Text>
      </View>
    )
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    email: state.user.email
  }
}

const mapDispatchToProps = { increment, decrement, reset }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
