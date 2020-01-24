import React from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, View} from 'react-native'

class Main extends React.Component {
  render() {
    const {email} = this.props
    return (
      <View style={styles.container}>
        <Text>Hi {email}!</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.user.email,
  }
}

export default connect(mapStateToProps)(Main)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
