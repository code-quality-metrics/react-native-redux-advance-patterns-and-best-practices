import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import Svg, {Ellipse} from 'react-native-svg'
import {connect} from 'react-redux'
import MaterialUnderlineTextbox from '../components/MaterialUnderlineTextbox'
import MaterialUnderlineTextbox1 from '../components/MaterialUnderlineTextbox1'
import MaterialButtonDark from '../components/MaterialButtonDark'
import MaterialButtonWithVioletText from '../components/MaterialButtonWithVioletText'
import {logIn} from '../actions/firebase'

class Login extends React.Component {
  state = {email: '', password: '', errorMessage: null}
  handleLogin = () => {
    const {login} = this.props
    const {email, password} = this.state
    login(email, password)
  }
  onLoginPress = () => {
    console.log('OnLoginPress')
  }
  render() {
    // Login: onPress={() => this.props.navigation.navigate('SignUp')
    return render.apply(this)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => {
      dispatch(logIn(email, password))
    },
  }
}

export default connect(undefined, mapDispatchToProps)(Login)

function render(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ellipse1Stack}>
        <Svg viewBox="0 0 91.45 91.45" style={styles.ellipse1}>
          <Ellipse
            strokeWidth={1}
            fill="rgba(0,0,0,1)"
            cx={46}
            cy={46}
            rx={45}
            ry={45}></Ellipse>
        </Svg>
        <Svg viewBox="0 0 171.77 160.96" style={styles.ellipse2}>
          <Ellipse
            strokeWidth={12}
            fill="rgba(230, 230, 230,0)"
            stroke="rgba(0,0,0,1)"
            cx={86}
            cy={80}
            rx={80}
            ry={74}></Ellipse>
        </Svg>
      </View>
      <MaterialUnderlineTextbox
        style={styles.materialUnderlineTextbox}></MaterialUnderlineTextbox>
      <MaterialUnderlineTextbox1
        style={styles.materialUnderlineTextbox1}></MaterialUnderlineTextbox1>
      <MaterialButtonDark
        text1="Login"
        style={styles.materialButtonDark}
        onPress={this.handleLogin}></MaterialButtonDark>
      <MaterialButtonWithVioletText
        text1="Signup"
        onPress={() => props.navigation.navigate('SignUp')}
        style={
          styles.materialButtonWithVioletText
        }></MaterialButtonWithVioletText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ellipse1: {
    top: 35,
    width: 91,
    height: 91,
    position: 'absolute',
    left: 40,
  },
  ellipse2: {
    top: 0,
    width: 172,
    height: 161,
    position: 'absolute',
    left: 0,
  },
  ellipse1Stack: {
    width: 172,
    height: 161,
    marginTop: 93,
    marginLeft: 102,
  },
  materialUnderlineTextbox: {
    width: 287,
    height: 43,
    marginTop: 84,
    alignSelf: 'center',
  },
  materialUnderlineTextbox1: {
    width: 287,
    height: 43,
    marginTop: 25,
    alignSelf: 'center',
  },
  materialButtonDark: {
    width: 100,
    height: 36,
    marginTop: 41,
    alignSelf: 'center',
  },
  materialButtonWithVioletText: {
    width: 100,
    height: 36,
    marginTop: 47,
    alignSelf: 'center',
  },
})
