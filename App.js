import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>Testttttx</Text>
      <Header></Header>
      <Options></Options>
    </View>
  );
}

const Header = () => {
  return(  
    <View  style={styles.header}>
      <TouchableOpacity>
        <Image 
        source={require('se-project/assets/cancelIcon.png')}
        style={styles.inputPageIcon}
        />
      </TouchableOpacity>  

      <TouchableOpacity>
        <Image 
        source={require('se-project/assets/correctIcon.png')}
        style={styles.inputPageIcon}
        />
      </TouchableOpacity> 

  </View>);

};

const Options = () => {
  return(
    <View style={styles.options}>
      <TouchableOpacity style={styles.optionsTag}>
        <Text>INCOME</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionsTag}>
        <Text>EXPENSE</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    backgroundColor: '#13334C',
    height: 100,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingHorizontal: 10,
  },

  inputPageIcon: {
    width: 30,
    height: 30,
  },

  options: {
    backgroundColor: '#005792',
    height: 60,
    width: '100%',
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingHorizontal: 5,
  },

  optionsTag: {
    backgroundColor: '#005792',
    borderWidth: 2,
    width: '49%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',

  },




});
