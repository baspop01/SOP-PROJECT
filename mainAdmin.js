import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import './mainAdmin.css';
import './main.js'

const mainAdmin = () => {
    return (
        <View style={styles.container} className="body">
            <div className="div1">
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '2vw' }}>
                    <button className="buttonOut" variant="contained" style={{ cursor: 'pointer' }}>
                        <a className="div1" style={{ fontSize: '1vw', color: 'white' }}>ออกจากระบบ</a>
                    </button>
                </div>
            </div>
            <div className="div2">
                <div style={{ display: 'flex', justifyContent: 'center', marginRight: '2vw' }}>
                    <button className="buttonAll" variant="contained" style={{ cursor: 'pointer' }}>
                        <a className="div2" style={{ fontSize: '1vw', color: 'black' }}>หน้าหลัก</a>
                    </button>
                    <button className="buttonAll" variant="contained" style={{ cursor: 'pointer' }}>
                        <a className="div2" style={{ fontSize: '1vw', color: 'black' }}>ดูยอดทั้งหมด</a>
                    </button>
                </div>
            </div>
            <div className="div3">
                <div style={{ display: 'flex', justifyContent: 'center', marginRight: '2vw' }}>
                    <button className="buttonAll" variant="contained" style={{ cursor: 'pointer' }}>
                        <a className="div3" style={{ fontSize: '1vw', color: 'black' }}>รอการทำรายการ</a>
                    </button>
                    <button className="buttonAll" variant="contained" style={{ cursor: 'pointer' }}>
                        <a  className="div3" style={{ fontSize: '1vw', color: 'black' }}>กำลังทำรายการ</a>
                    </button>
                    <button className="buttonAll" variant="contained" style={{ cursor: 'pointer' }}>
                        <a className="div3" style={{ fontSize: '1vw', color: 'black' }}>ทำรายการสำเร็จ</a>
                    </button>
                </div>
            </div>
            <div className="div4" style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5vw'}}>
                <div className="divContent" >
                    <div style={{ display: 'grid', justifyContent: 'flex-start', marginRight: '2vw' }}>
                        <div style={{margin: '0.5vw'}}>
                            <label htmlFor="fname">ชื่อร้านอาหาร:</label>
                            <input style={{ marginLeft: '0.5vw' }} type="text"  />
                        </div>
                        <div style={{margin: '0.5vw'}}>
                            <label htmlFor="fname">โทรศัพท์:</label>
                            <input style={{ marginLeft: '0.5vw' }} type="text" />
                        </div>
                        <div style={{margin: '0.5vw'}}>
                            <a>สถานะ: </a>
                            <input type="radio" id="open" name="status" value="30" />
                            <label for="open">เปิด</label>
                            <input type="radio" id="close" name="status" value="60" />
                            <label for="close">ปิด</label>
                        </div>
                        <div style={{margin: '0.5vw'}}>
                            <a>วัตถุดิบ: </a>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', marginRight: '2vw', marginTop: '1vw' }}>
                                <from className="fromMenu">
                                    <label className="labelMenu" for="close">ข้าว</label> <br></br>
                                    <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                    <input type="number" id="number" value="0" />
                                    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>

                                </from>
                                <from className="fromMenu">
                                    <label className="labelMenu" for="close">วุ้นเส้น</label> <br></br>
                                    <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                    <input type="number" id="number" value="0" />
                                    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                                </from>
                                <from className="fromMenu">
                                    <label className="labelMenu" for="close">สปาเก็ตตี้</label> <br></br>
                                    <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                    <input type="number" id="number" value="0" />
                                    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                                </from>
                                <from className="fromMenu">
                                    <label className="labelMenu" for="close">บะหมี่</label> <br></br>
                                    <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                    <input type="number" id="number" value="0" />
                                    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                                </from>
                                <from className="fromMenu">
                                    <label className="labelMenu" for="close">มักโรนี</label> <br></br>
                                    <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                    <input type="number" id="number" value="0" />
                                    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                                </from>
                                <from className="fromMenu">
                                    <label className="labelMenu" for="close">มาม่า</label> <br></br>
                                    <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                    <input type="number" id="number" value="0" />
                                    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                                </from>
                            </div>

                            {/* --------------------------------------------------------------------------------------------------------- */}
                            <div style={{ display: 'flex', justifyContent: 'flex-start', marginRight: '2vw', marginTop: '1vw' }}>
                                <from className="fromMenu">
                                    <label className="labelMenu" for="close">หมู</label> <br></br>
                                    <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                    <input type="number" id="number" value="0" />
                                    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>

                                </from>
                                <from className="fromMenu">
                                    <label className="labelMenu" for="close">หมึก</label> <br></br>
                                    <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                    <input type="number" id="number" value="0" />
                                    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                                </from>
                                <from className="fromMenu">
                                    <label className="labelMenu" for="close">กุ้ง</label> <br></br>
                                    <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                    <input type="number" id="number" value="0" />
                                    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                                </from>
                                <from className="fromMenu">
                                    <label className="labelMenu" for="close">ไก่</label> <br></br>
                                    <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                    <input type="number" id="number" value="0" />
                                    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                                </from>
                                <from className="fromMenu">
                                    <label className="labelMenu" for="close">ปลา</label> <br></br>
                                    <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                    <input type="number" id="number" value="0" />
                                    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                                </from>
                                <from className="fromMenu">
                                    <label className="labelMenu" for="close">เบคอน</label> <br></br>
                                    <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                    <input type="number" id="number" value="0" />
                                    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                                </from>
                            </div>
                            
                            {/* --------------------------------------------------------------------------------------------------------- */}
                            <div style={{ display: 'flex', justifyContent: 'flex-start', marginRight: '2vw', marginTop: '1vw' }}>
                                <from className="fromMenu">
                                    <label className="labelMenu" for="close">หมูกรอบ</label> <br></br>
                                    <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                    <input type="number" id="number" value="0" />
                                    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>

                                </from>
                                <from className="fromMenu">
                                    <label className="labelMenu" for="close">ไส้กรอก</label> <br></br>
                                    <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                    <input type="number" id="number" value="0" />
                                    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                                </from>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F0E0",
        width: '100%',
        height: '100%',
    },





});
export default mainAdmin;