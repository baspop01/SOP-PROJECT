import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const queue = () => {
    return (
        <View style={styles.container}>
            <div>
                <div >
                    <p style={styles.textcard}>คิวของฉัน 0 คิว</p>
                </div>
                <div style={styles.card}>
                    <div style={styles.card2}>
                        <div style={{ display: 'flex', justifyContent: 'center', fontSize: '1.4vw' }}>
                            <p>รายการอาหารทั้งหมด</p>
                        </div>
                        <div style={styles.dis}>
                            <img style={styles.image} src='https://cdn.discordapp.com/attachments/921293798884134923/1052594450414702602/2927347.png' alt="Logo" />
                            <div style={styles.textfood}>
                                <a style={{ fontSize: '1.2vw', marginTop: '0.5vw' }}>แพนแค้กหมูตุ๋น</a>
                                <a style={{ fontSize: '1vw' }}>35 B</a>
                                {/* <a style={{ fontSize: '1.2vw' }}>888</a> */}
                                {/* <button className="button" variant="contained" style={styles.button1}>
                                <Text color="black" style={{ fontSize: '0.8vw' }}>ดูรายละเอียด</Text>
                            </button> */}
                            </div>
                        </div>
                        {/* ------------------------------------------------ */}
                        <div style={styles.dis}>
                            <img style={styles.image} src='https://cdn.discordapp.com/attachments/921293798884134923/1052594450414702602/2927347.png' alt="Logo" />
                            <div style={styles.textfood}>
                                <a style={{ fontSize: '1.2vw', marginTop: '0.5vw' }}>แพนแค้กหมูตุ๋น</a>
                                <a style={{ fontSize: '1vw' }}>35 B</a>
                                {/* <a style={{ fontSize: '1.2vw' }}>888</a> */}
                                {/* <button className="button" variant="contained" style={styles.button1}>
                                <Text color="black" style={{ fontSize: '0.8vw' }}>ดูรายละเอียด</Text>
                            </button> */}
                            </div>
                        </div>
                    </div>
                    <div style={styles.card3}>
                        <div style={styles.dis2}>
                            
                            <img style={styles.imageCheck} src='https://cdn.discordapp.com/attachments/921293798884134923/1052898900421390346/800px-Sign-check-icon.png' alt="Logo" />
                        </div>
                        <div style={{display:'grid', justifyContent:'center'}}>
                                <p style={{fontSize:'1.5vw', marginLeft:'1vw'}}>ยืนยันคำสั่งซื้อ</p>
                        </div>
                    </div>

                </div>

            </div>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F0E0",
        width: '100%',
        height: '100%',
    },
    card: {
        transition: '0.3s',
        width: '95%',
        height: '100%',
        border: '0.25vw solid #927363',
        borderRadius: '2vw',
        backgroundColor: '#F7E6C4',
        marginLeft: '2%',
        display: 'flex',
        justifyContent: 'center'
        // boxShadow: '0 4px 8px 0 ',
    },
    card2: {
        width: '60%',
        height: '70%',
        transition: '0.3s',
        margin: '1%',
        border: '7px solid #B2918A',
        borderRadius: '3vw',
        backgroundColor: '#B2918A',
    },
    card3: {
        width: '30%',
        height: '80%',
        transition: '0.3s',
        margin: '1%',
        border: '7px solid #F8F0E0',
        borderRadius: '2vw',
        backgroundColor: '#F8F0E0',
    },
    image: {
        width: '10%',
        height: '10%',
        marginLeft: '2%',
        display: 'flex'
    },
    imageCheck: {
        width: '40%',
        height: '40%',
        marginTop: '12%',
        display: 'flex'
    },
    textcard: {
        fontSize: '2.5vw',
        marginLeft: '4%',
        color: '#71463C'
    },
    textfood: {
        display: 'grid',
        marginLeft: '3%'
    },
    dis: {
        display: 'flex',
        marginLeft: '1vw'
    },
    dis2: {
        display: 'flex',
        marginLeft: '1vw',
        justifyContent: 'center'
    },

    button1: {
        color: 'white',
        cursor: 'pointer',
        borderRadius: '2vw',
        backgroundColor: '#F7E6C4'
    },




});
export default queue;