import React, { useRef } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const App = () => {

  const imageRef = useRef();
  const contentRef = useRef();

  const getStarted = () => {
    imageRef.current.bounceOut();
    contentRef.current.fadeOutDownBig(300);
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Animatable.Image animation='bounceIn' ref={imageRef}
          source={require('./src/assets/outlook.png')} style={{ width: 250, height: 250 }} />
      </View>
      <Animatable.View ref={contentRef} animation={'slideInUp'} duration={300} style={style.footer}>
        <Text style={style.title}>Stay connected with everyone!</Text>
        <Text style={style.message}>Sign in with account</Text>
        <View style={style.button}>
          <TouchableOpacity onPress={getStarted}>
            <LinearGradient colors={['#abcbff', '#70a7ff']} style={{ borderRadius: 50 }}>
              <Text style={style.buttonText}>
                Get Started {'>'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#70a7ff'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 29,
  },
  message: {
    color: '#ababab',
    fontWeight: 'bold',
    marginTop: 5,
  },
  button: {
    paddingHorizontal: 8,
    flex: 1,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  buttonText: {
    paddingHorizontal: 10,
    fontSize: 15,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})

export default App;