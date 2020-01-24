import React from 'react'
import {connect} from 'react-redux'
import {StyleSheet, View, Button} from 'react-native'
import {logOut as logOutAction} from 'actions/firebase'
import NavigationService from 'navigation/service'

// function Separator() {
//   return <View style={styles.separator} />;
// }

class Main extends React.Component {
  render() {
    const {logOut} = this.props
    return (
      <View style={styles.container}>
        <View>
          <Button title="Log out" onPress={logOut} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    // email: state.user.email,
  }
}

const mapDispatchToProps = dispatch => ({
  logOut: () => {
    // NOTICE: It would be better for for a view component to not have
    // navigation logic and be dumb about what happens when it triggers an
    // action, alternatively we could make a bound action creator
    // to include the navigate in it
    const res = dispatch(logOutAction())
    console.log('res', res)
    res.then(() => NavigationService.navigate('Auth'))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})
