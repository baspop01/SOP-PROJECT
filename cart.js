import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";


const cart = () => {
    return (
        <View style={styles.container}>
            <div>
                <div >
                    <p style={styles.textcard}>ตะกร้า</p>
                </div>
                <div style={styles.card}>
                    <div style={styles.card2}>
                        <div style={styles.dis}>
                            <img style={styles.image} src='https://cdn.discordapp.com/attachments/921293798884134923/1052594450414702602/2927347.png' alt="Logo" />
                            <div style={styles.textfood}>
                                <a style={{ fontSize: '1.5vw', marginTop: '0.5vw' }}>แพนแค้กหมูตุ๋น</a>
                                <a style={{ fontSize: '1.2vw' }}>35 B</a>
                                {/* <a style={{ fontSize: '1.2vw' }}>888</a> */}
                                <button className="button" variant="contained" style={styles.button1}>
                                    <Text color="black" style={{ fontSize: '1vw' }}>ดูรายละเอียด</Text>
                                </button>
                            </div>
                            <div>
                                <button className="button" variant="contained" style={styles.buttonDel}>
                                    <Text style={{ fontSize: '1vw', color: 'white' }}>DELETE</Text>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div style={styles.card2}>
                        <div style={styles.dis}> <img style={styles.image} src='https://cdn.discordapp.com/attachments/921293798884134923/1052595279347589200/food-and-drink-5727926-4800418.png' alt="Logo" />
                            <div style={styles.textfood}>
                                <a style={{ fontSize: '1.5vw', marginTop: '0.5vw' }}>แพนแค้กหมูตุ๋น</a>
                                <a style={{ fontSize: '1.2vw' }}>35 B</a>

                                {/* <a style={{ fontSize: '1.2vw' }}>888</a> */}
                                <button className="button" variant="contained" style={styles.button1}>
                                    <Text color="black" style={{ fontSize: '1vw' }}>ดูรายละเอียด</Text>
                                </button>
                            </div>
                            <div>
                                <button className="button" variant="contained" style={styles.buttonDel}>
                                    <Text style={{ fontSize: '1vw', color: 'white' }}>DELETE</Text>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'flex-end', marginRight:'2vw'}}>
                        <button className="button" variant="contained" style={styles.buttonTotal}>
                            <Text style={{ fontSize: '1.4vw', color: 'white' }}>Total: 35 B</Text>
                        </button>
                    </div>
                    <div style={{display:'flex', justifyContent:'flex-end', marginRight:'2vw', marginTop:'1vw'}}>
                        <button className="button" variant="contained" style={styles.buttonMenu}>
                            <Text style={{ fontSize: '1.4vw', color: 'white' }}>เมนูหลัก</Text>
                        </button>
                        <button className="button" variant="contained" style={styles.buttonConfirm}>
                            <Text style={{ fontSize: '1.4vw', color: 'white' }}>ยืนยัน</Text>
                        </button>
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
        // display: 'flex',
        justifyContent: 'center'
        // boxShadow: '0 4px 8px 0 ',
    },
    card2: {
        transition: '0.3s',
        margin: '1%',
        border: '8px solid #B2918A',
        borderRadius: '3vw',
        backgroundColor: '#B2918A',
    },
    image: {
        width: '10%',
        height: '10%',
        marginLeft: '2%',
        display: 'flex'
    },
    textcard: {
        fontSize: '2.5vw',
        marginLeft: '2%',
        color: '#71463C'
    },
    textfood: {
        display: 'grid',
        marginLeft: '2%'
    },
    dis: {
        display: 'flex'
    },
    button1: {
        color: 'white',
        cursor: 'pointer',
        borderRadius: '2vw',
        backgroundColor: '#F7E6C4'
    },
    buttonDel: {
        borderRadius: '2vw',
        cursor: 'pointer',
        backgroundColor: '#F36155',
        border: '0.25vw solid #F36155',
        width: '25%',
        height: '50%',
        marginLeft: '52vw',
        marginTop: '2vw',
    },
    buttonTotal: {
        borderRadius: '2vw',
        backgroundColor: '#B2918A',
        border: '0.1vw solid #F69443C',
        width: '12%',
        height: '40%'
    },
    buttonMenu: {
        borderRadius: '2vw',
        cursor: 'pointer',
        backgroundColor: '#B2918A',
        border: '0.5vw solid #B2918A',
        width: '12%',
        height: '40%'
    },
    buttonConfirm: {
        borderRadius: '2vw',
        cursor: 'pointer',
        backgroundColor: '#7AD441',
        border: '0.5vw solid #7AD441',
        width: '12%',
        height: '40%',
        marginLeft: '0.5vw'
    }




});
export default cart;