import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';


const date = new Date()
let random = Math.floor(Math.random() * 10 + 1)
let uid = `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}-${date.getHours()}${date.getMinutes()}${date.getSeconds()}-${random}`

const data = {
    pg: 'tosspay',
    pay_method: 'card',
    merchant_uid: `ORD-${uid}-userId`,   // 사용자 아이디를 추가
    name: '카카오 편수냄비',
    amount: 15200,
    buyer_email: 'kakao@kakao.com',
    buyer_name: '카카오',
    buyer_tel: '010-1234-5678',
    buyer_addr: '대전광역시 서구 둔산로 100',
    buyer_postcode: '12345',
    app_scheme: 'example'
}
export default function PaymentInfo({navigation}:any) {
    
    const [paymentInfo, setPaymentInfo] = useState("paymentInfo");

    const [toPay, setToPay] = useState("결제 수단이 선택되지 않았습니다.");

    let child:any;

    if (paymentInfo === "paymentInfo") {
        child = (<Text>결제정보 화면</Text>);
    } else if (paymentInfo === "payment") {
        child = (<Text>결제화면</Text>);
    } else if (paymentInfo === "paymentResult") {
        child = (<Text>결제 완료</Text>);
    }

    return (
        <View style={{padding: 24, flex: 1, alignItems: 'stretch'}}>
            <View>    
                <View style={styles.eachComponent}>
                    <Text style={styles.subTitle}>주문자 정보</Text>
                    <View style={styles.nameSpace}>
                        <Text style={styles.buyerName}>{data.buyer_name}</Text>
                        <View>
                            <Text>{data.buyer_addr}</Text>
                            <Text>{data.buyer_tel}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.eachComponent}>
                    <Text style={styles.subTitle}>주문 정보</Text>
                    <View style={styles.buyContainer}>
                        <Text>IMG</Text>
                        <Text>{data.name}</Text>
                        <Text>1개</Text>
                        <Text>{data.amount}</Text>
                    </View>
                </View>
                
                <View style={styles.eachComponent}>
                    <Text style={styles.subTitle}>결제 수단</Text>
                    <View style={styles.selectBox}>
                        <RNPickerSelect
                            placeholder={{ label: '결제 수단을 선택하세요', value: null }}
                            items={[
                                { label: '카카오페이로 결제', value: 'kakaopay'},
                                { label: '토스페이먼츠로 결제', value: 'tosspay'}
                            ]}
                            onValueChange={(val) => {
                                if (val === 'kakaopay') {
                                    setToPay(`카카오페이로 ${data.amount}원을 결제합니다.`);
                                    
                                } else if (val === 'tosspay') {
                                    setToPay(`토스 페이먼츠로 ${data.amount}원을 결제합니다.`);
                                    
                                } else {
                                    setToPay('결제수단이 선택되지 않았습니다.');
                                }
                            }}
                        />
                    </View>
                </View>

                <View style={styles.eachComponent}>
                    <Text style={styles.toPayView}>{toPay}</Text>
                    <TouchableOpacity 
                        style={[styles.paymentBtn, styles.btn]}
                        onPress={() => {navigation.navigate('payment')}}
                    >
                        <Text style={styles.btnText}>결제하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.calcelBtn, styles.btn]}>
                        <Text style={styles.btnText}>돌아가기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    eachComponent: {
        marginBottom: 10
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "800",
        paddingTop: 20,
        paddingBottom: 5
    },
    nameSpace: {
        flexDirection: 'row', 
        borderWidth: 2, 
        borderColor: '#e9e9e9', 
        height: 80, 
        alignItems: 'center', 
        padding: 25, 
        backgroundColor: '#fff',
    },
    buyerName: {
        fontSize: 20, 
        fontWeight: "800", 
        marginRight: 20
    },
    buyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
        padding: 15,
        borderWidth: 2,
        borderColor: '#e9e9e9',
        height: 150,
        backgroundColor: '#fff'
    },
    selectBox: {
        borderWidth: 2,
        borderColor: '#e9e9e9',
        fontSize: 17,
        backgroundColor: '#fff',
        // height: 40,
        borderRadius: 10,
        padding: 3
    },
    toPayView: {
        fontWeight: '700',
        textAlign: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        fontSize: 20
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 55,
        marginTop: 10,
        marginBottom: 10
    },
    btnText: {
        color: '#fff',
        fontSize: 16
    },
    paymentBtn: {
        backgroundColor: '#4852c7',
    },
    calcelBtn: {
        backgroundColor: '#bd4646'
    }
})
