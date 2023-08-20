import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import SoilImage from './components/SoilImage';

import MetrixChart from './components/MetrixChart';
export default function App() {

  function showAlert(msg) {
    Alert.alert(
      msg
    )
  }

  const Separator = () => <View style={styles.separator} />;
  function classFileName(iclay, isand, isilt) {

    var numClay = Number.parseInt(iclay==='' || iclay=== null? 0: iclay);
    var numSand = Number.parseInt(isand==='' || isand=== null? 0: isand);
    var numSilt = Number.parseInt(isilt==='' || isilt=== null? 0: isilt);

    // Loam	7 to 27 percent clay, 28 to 50 percent silt, and 52 percent or less sand.
    // Silt loam	50 percent or more silt and 12 to 27 percent clay, or 50 to 80 percent silt and less than 12 percent clay.
    // Silt	80 percent or more silt and less than 12 percent clay.
    // Sandy clay loam	20 to 35 percent clay, less than 28 percent silt, and more than 45 percent sand.
    // Clay loam	27 to 40 percent clay and more than 20 to 46 percent sand.
    // Silty clay loam	27 to 40 percent clay and 20 percent or less sand.
    // Sandy clay	35 percent or more clay and 45 percent or more sand.F
    // Silty clay	40 percent or more clay and 40 percent or more silt.
    // Clay	40 percent or more clay, 45 percent or less sand, and less than 40 percent silt.
    let desc = '';
    if (100 - (Number.parseInt(numClay) + Number.parseInt(numSand)) < 0) {
      desc = 'Error Output';
    }
    else if (Number.parseInt(numSilt) >= 80 && Number.parseInt(numClay) <= 12) {
      desc = 'SILT';
    }
    else if ((Number.parseInt(numClay) >= 7 && Number.parseInt(numClay) <= 27) && (Number.parseInt(numSilt) >= 28 && Number.parseInt(numSilt) <= 50) && (Number.parseInt(numSand) <= 52)) {
      desc = 'LOAM';
    }
    else if (((Number.parseInt(numClay) >= 7 && Number.parseInt(numClay) <= 27) && Number.parseInt(numSilt) >= 50 || (Number.parseInt(numSilt) >= 50 && Number.parseInt(numSilt) <= 80) && Number.parseInt(numClay) <= 12)) {
      desc = 'SILT LOAM';
    }
    else if ((Number.parseInt(numClay) >= 20 && Number.parseInt(numClay) <= 35) && (Number.parseInt(numSilt) <= 28) && (Number.parseInt(numSand) > 45)) {
      desc = 'SANDY CLAY LOAM';
    }
    else if ((Number.parseInt(numClay) >= 27 && Number.parseInt(numClay) < 40) && (Number.parseInt(numSand) > 20 && Number.parseInt(numSand) < 46)) {
      desc = 'CLAY LOAM';
    }
    else if ((Number.parseInt(numClay) >= 27 && Number.parseInt(numClay) < 40) && (Number.parseInt(numSand) < 20)) {
      desc = 'SILTY CLAY LOAM';
    }
    else if ((Number.parseInt(numClay) >= 35) && (Number.parseInt(numSand) > 45)) {
      desc = 'SANDY CLAY';
    }
    else if ((Number.parseInt(numClay) >= 40) && (Number.parseInt(numSilt) >= 40)) {
      desc = 'SILTY CLAY';
    }
    else if ((Number.parseInt(numClay) >= 40) || (Number.parseInt(numSand) <= 45) && (Number.parseInt(numSilt) <= 40)) {
      desc = 'CLAY';
    }
    else if ((numSand >= 70 && numSand <= 91) && ((numSilt + (1.5 * numClay)) >= 15) && ((numSilt + (2 * numClay)) < 30)) {
 
      desc = 'LOAMY SAND';
    }
    else if (numSand > 85 && (numSilt + (1.5 * numClay)) < 15) {
      desc = 'SAND';
    } else if ((numClay >= 7 && numClay <= 20) && (numSand > 52) && ((numSilt + (2 * numClay)) >= 30) || (numClay < 7 && numSilt < 50 && numSand > 43)) {
      desc = 'SANDY LOAM';

    }
    else {
      desc = 'Invalid Entry';
    }

    return desc;
  }

  const TabOne = () => {

    const [clayg, setclayg] = useState('')
    const [siltg, setsiltg] = useState('');
    const [sandg, setsandg] = useState('');
    const [gravel, setgravel] = useState('100');

    const [iclay, setIclay] = useState('');
    const [isilt, setISilt] = useState('100');
    const [isand, setISand] = useState('');

    const [data1, setdata1] = useState('');
    const [data2, setdata2] = useState('');
    const [data3, setdata3] = useState('');
    const [data4, setdata4] = useState('');
    const [soilDesc, setSoilDesc] = useState('');
    const HandleClickWithGraval = () => {

      let iSand = 0;
      let iClay = 0;
      let iSilt = 0;
      let iGraval = 0;

      if (!Number.isNaN(Number.parseInt(sandg))) {
        iSand = sandg;
      }

      if (!Number.isNaN(Number.parseInt(clayg))) {
        iClay = clayg;
      }
      if (!Number.isNaN(Number.parseInt(siltg))) {
        iSilt = siltg;
      }

      if (!Number.isNaN(Number.parseInt(gravel))) {
        iGraval = gravel;
      }

      if (((100 - (Number.parseInt(iSand) + Number.parseInt(iClay) + Number.parseInt(iSilt))) < 0) || iGraval > 99) {
        showAlert('Error Entry');
        setdata1('');
        setdata2('');
        setdata3('');
        setdata4('');
        setISand(0);
        setISilt(0);
        setIclay(0);

        setSoilDesc('');
      } else {
        let iGPercent = 100 - iGraval;
        let iSandPercent = (iSand / iGPercent) * 100;
        let iSiltPercent = (iSilt / iGPercent) * 100;
        let iClayPercent = (iClay / iGPercent) * 100;

        setISand(iSandPercent);
        setISilt(iSiltPercent);
        setIclay(iClayPercent);

        setdata1('SAND = ' + (Number.isNaN(iSandPercent) ? 0 : iSandPercent) + '%');
        setdata2('SILT    = ' + (Number.isNaN(iSiltPercent) ? 0 : iSiltPercent) + '%');
        setdata3('CLAY  = ' + (Number.isNaN(iClayPercent) ? 0 : iClayPercent) + '%');
        const descFile = classFileName(iClayPercent, iSandPercent, iSiltPercent);
        setSoilDesc(descFile);
        setdata4('CLASSIFICATION SOIL :' + descFile);
      }


    }

    const HandleClickWithGravelCancel = () => {
      setclayg('');
      setsandg('');
      setsiltg('');
      setgravel('100');
      setISand(0);
      setISilt(100);
      setIclay(0);

      setdata1('');
      setdata2('');
      setdata3('');
      setdata4('');
      setSoilDesc('');
    }

    function calculateWithGraval(numClay, numSand, numSilt) {
      let iSand = 0;
      let iClay = 0;
      let iSilt = 0;

      if (!Number.isNaN(Number.parseInt(numSand))) {
        iSand = numSand;
      }

      if (!Number.isNaN(Number.parseInt(numClay))) {
        iClay = numClay;
      }
      if (!Number.isNaN(Number.parseInt(numSilt))) {
        iSilt = numSilt;
      }

      const numGraval = 100 - (Number.parseInt(iSand) + Number.parseInt(iClay) + Number.parseInt(iSilt));

      if (Number.isNaN(numGraval)) {
        setgravel("Error");
      }
      else if (numGraval < 0) {
        setgravel("Error");
      }
      else {
        setgravel(numGraval.toString());
      }

    }


    const claylimitg = (value) => {
      let parsedQty = Number.parseInt(value)
      if (Number.isNaN(parsedQty)) {
        setclayg('') //setter for state
      } else if (parsedQty > 100) {
        parsedQty = 100;
        setclayg(parsedQty.toString())
      } else {
        setclayg(parsedQty.toString())
      }
      calculateWithGraval(Number.parseInt(parsedQty), Number.parseInt(sandg), Number.parseInt(siltg));

    }

    const sandlimitg = (value) => {
      let parsedQty = Number.parseInt(value)
      if (Number.isNaN(parsedQty)) {
        setsandg('') //setter for state
      } else if (parsedQty > 100) {
        parsedQty = 100;
        setsandg(parsedQty.toString())
      } else {
        setsandg(parsedQty.toString())
      }
      calculateWithGraval(Number.parseInt(clayg), Number.parseInt(parsedQty), Number.parseInt(siltg));
    }

    const siltlimitg = (value) => {
      let parsedQty = Number.parseInt(value)
      if (Number.isNaN(parsedQty)) {
        setsiltg('') //setter for state
      } else if (parsedQty > 100) {
        parsedQty = 100;
        setsiltg(parsedQty.toString())
      } else {
        setsiltg(parsedQty.toString())
      }
      calculateWithGraval(Number.parseInt(clayg), Number.parseInt(sandg), Number.parseInt(parsedQty));
    }
    return (
      <ScrollView style={styles.shape_container}>

        <MetrixChart sand={isand} silt={isilt} clay={iclay} />

        <View style={styles.spliter}>
          <Text style={styles.text}>PERCENTAGE OF GRAVEL:</Text>
          <Separator />
          <TextInput
            editable={false}
            // onChangeText={siltlimit}
            value={gravel}
            otherProps
            keyboardType='numeric'
            maxLength={3}
            style={styles.input} />
          <Text>%</Text>
        </View>

        <View style={styles.spliter}>
          <Text style={styles.text}>PERCENTAGE OF SAND :  </Text>
          <Separator />
          <TextInput
            value={sandg}
            onChangeText={sandlimitg}
            otherProps
            keyboardType='numeric'
            maxLength={3}
            style={styles.input} />
          <Text>%</Text>
        </View>



        <View style={styles.spliter}>
          <Text style={styles.text}>PERCENTAGE OF SILT     : </Text>
          <Separator />
          <TextInput
            onChangeText={siltlimitg}
            value={siltg}
            otherProps
            keyboardType='numeric'
            maxLength={3}
            style={styles.input} />
          <Text>%</Text>
        </View>

        <View style={styles.spliter}>
          <Text style={styles.text}>PERCENTAGE OF CLAY   : </Text>
          <Separator />
          <TextInput
            onChangeText={claylimitg}
            value={clayg}
            otherProps
            keyboardType='numeric'
            maxLength={3}
            style={styles.input} />
          <Text>%</Text>
        </View>


        <View style={styles.fixToText} >
          <Button onPress={HandleClickWithGraval} title='PLOT' />
          <Separator />

          <Button onPress={HandleClickWithGravelCancel} title='CLEAR' color='#000' />
        </View>

        <Text style={styles.result}>
          {data1}{'\n'}
          {data2}{'\n'}
          {data3}{'\n\n'}
          {data4}
        </Text>


        <StatusBar style="auto" />
        <SoilImage data={soilDesc} />

      </ScrollView>
    )
  }
  //  BOUNDERZY
  const TabTwo = () => {

    const [clay, setclay] = useState('')
    const [silt, setsilt] = useState('100');
    const [sand, setsand] = useState('');
    const [data, setdata] = useState('');


    const [iclay, seticlay] = useState(0)
    const [isilt, setisilt] = useState(0);
    const [isand, setisand] = useState(0);

    function calculateWithoutGraval(numClay, numSand) {
      let iSand = 0;
      let iClay = 0;

      if (!Number.isNaN(Number.parseInt(numSand))) {
        iSand = numSand;
      }

      if (!Number.isNaN(Number.parseInt(numClay))) {
        iClay = numClay;
      }


      const numSilt = 100 - (Number.parseInt(iSand) + Number.parseInt(iClay));
      if (Number.isNaN(numSilt)) {
        setsilt("Error");
      }
      else if (Number.parseInt(numSilt) < 0) {
        setsilt("Error");
      }
      else {
        setsilt(numSilt.toString());
      }

    }

    const claylimit = (value) => {

      let parsedQty = Number.parseInt(value)
      if (Number.isNaN(parsedQty)) {
        setclay('') //setter for state
      } else if (parsedQty > 100) {
        parsedQty = 100;
        setclay(parsedQty.toString())
      } else {
        setclay(parsedQty.toString())
      }
      calculateWithoutGraval(Number.parseInt(parsedQty), Number.parseInt(sand));

    }

    const sandlimit = (value) => {
      let parsedQty = Number.parseInt(value)
      if (Number.isNaN(parsedQty)) {
        setsand('') //setter for state
      } else if (parsedQty > 100) {
        parsedQty = 100;
        setsand(parsedQty.toString())
      } else {
        setsand(parsedQty.toString())
      }
      calculateWithoutGraval(Number.parseInt(clay), Number.parseInt(parsedQty));
    }


    const HandleClickWithoutGraval = () => {

      const desc = classFileName(clay, sand, silt);
      if (desc === "Invalid Entry" || desc === "Error Output") {
        showAlert(desc);
      }

      seticlay(clay);
      setisand(sand);
      setisilt(silt)

      setdata(desc);
    }

    const HandleClickWithOutGravelCancel = () => {
      setclay('');
      setsand('');
      setsilt('100');
      setdata('');
      seticlay(0);
      setisand(0);
      setisilt(100)
    }

    return (
      <ScrollView style={styles.shape_container}>
        <MetrixChart sand={isand} silt={isilt} clay={iclay} />

        <View style={styles.spliter}>
          <Text style={styles.text}>PERCENTAGE OF SAND : </Text>
          <Separator />
          <TextInput
            value={sand}
            onChangeText={sandlimit}
            otherProps
            keyboardType='numeric'
            maxLength={3}
            style={styles.input} />
          <Text>%</Text>
        </View>

        <View style={styles.spliter}>
          <Text style={styles.text}>PERCENTAGE OF CLAY   :</Text>
          <Separator />
          <TextInput
            onChangeText={claylimit}
            value={clay}
            otherProps
            keyboardType='numeric'
            maxLength={3}
            style={styles.input} />
          <Text>%</Text>
        </View>

        <View style={styles.spliter}>
          <Text style={styles.text}>PERCENTAGE OF SILT    : </Text>
          <Separator />
          <TextInput
            editable={false}
            // onChangeText={siltlimit}
            value={silt}
            otherProps
            keyboardType='numeric'
            maxLength={3}
            style={styles.input} />
          <Text>%</Text>
        </View>

        <View style={styles.fixToText} >
          <Button onPress={HandleClickWithoutGraval} title='PLOT' />
          <Separator />
          <Button onPress={HandleClickWithOutGravelCancel} title='CLEAR' color='#000' />
        </View>
        <Text style={styles.result}>
          {data}
        </Text>

        <StatusBar style="auto" />
        <SoilImage data={data} />
      </ScrollView>
    )
  }

  const Tab = createBottomTabNavigator();

  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="W/ GRAVEL"
          component={TabOne}
          options={{
            tabBarLabel: 'W/ GRAVEL',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="caretleft" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="W/O GRAVEL"
          component={TabTwo}
          options={{
            tabBarLabel: 'W/O GRAVEL',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="caretright" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 35,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    marginLeft: 10,
    marginRight: 10,

  },

  img: {
    marginBottom: 30,
  },

  button: {
    paddingRight: 20,
  },
  separator: {
    marginHorizontal: 8,

  },
  fixToText: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    paddingRight: 10,
    paddingTop: 10,
  },
  spliter: {
    flexDirection: 'row',
    paddingRight: 10,
    paddingTop: 10,
    justifyContent: 'center',
  },
  result: {
    borderColor: '#000',
    height: 110,
    borderStyle: 'solid',
    flex: 0.3,
    borderWidth: 1,
    margin: 10,
    padding: 10,
  }


});
