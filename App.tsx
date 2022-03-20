import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import WebView from "react-native-webview";
import Payment from "./src/Payment";
import PaymentFailed from "./src/PaymentFailed";
import PaymentInfo from "./src/PaymentInfo";
import PaymentResult from "./src/PaymentResult";

/*
  설치할 모듈
  npm install --save react-native-webview
  npm install --save iamport-react-native
  npm install @react-navigation/native
  npm install @react-navigation/native-stack
  npm install react-native-safe-area-context
  npm install react-native-gesture-handler
  npm install react-native-screens
  npm install @react-navigation/stack
  npm install @react-native-picker/picker
  npm install react-native-picker-select
  npm install axios
  npm install react-native-modal
*/

const App = ({navigation}:any) => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="paymentInfo">
        <Stack.Screen name="paymentInfo" component={PaymentInfo} options={{title: "결제정보"}} />
        <Stack.Screen name="payment" component={Payment} options={{title: "결제"}} />
        <Stack.Screen name="paymentResult" component={PaymentResult} options={{title: "결제완료"}} />
        <Stack.Screen name="paymentFailed" component={PaymentFailed} options={{title: "결제실패"}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;