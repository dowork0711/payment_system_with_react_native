import axios from "axios";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// 결제 성공 내역을 async-storage로 받아옴.
const paymentSuccessData = {
    memberId: 'kakao_test_account',
    paymentMainAddr: '대전광역시 서구',
    paymentDetailAddr: '둔산로 100',
    paymentZipcode: 12345,
    paymentCategory: '굿즈',
}

// 결제가 성공하면 쇼핑 리스트를 db에 넣어줌
const addShoppingList = () => {

    // axios({
    //     url: 'http://192.168.0.13:3000/addGoodsShoppingList',
    //     method: 'post',
    //     headers: { 'Content-Type': 'application/json' },
    //     data: {
    //         memberId: 'kakao_test_account',
    //         amount: 15200,
    //         mainAddr: '대전광역시 서구',
    //         detailAddr: '둔산로 100',
    //         zipcode: 12345,
    //     },
    // })
    axios.post("http://192.168.0.13:3000/addGoodsShoppingList", 
                null, 
                {params: {
                    member_id: 'kakao_test_account', 
                    payment_pay: 15200, 
                    payment_main_addr: '대전광역시 서구', 
                    payment_detail_addr: '둔산로 100', zipcode: 12345
                }}
    )
    .then((resp) => console.log(resp.data))
    .catch((err) => console.log(err));
}

export default function PaymentResult({ navigation }:any) {

    addShoppingList(); 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>결제가 완료되었습니다!</Text>
            <View style={styles.btnGroup}>
                <TouchableOpacity style={[styles.btn, styles.btnPrimary]}>
                    <Text style={styles.btnText}>상세 주문 정보</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, styles.btnBack]}>
                    <Text style={styles.btnText}>계속 쇼핑하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        color: '#000',
        fontWeight: '800',
        fontSize: 25
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 40,
        marginTop: 20,
        width: '40%',
    },
    btnText: {
        color: "#fff",
        fontSize: 17,
    },
    btnPrimary: {
        backgroundColor: '#3064b8',
    },
    btnBack: {
        backgroundColor: '#bd4646'
    }
})