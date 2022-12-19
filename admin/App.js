// import logo from '../logo.svg';
// import React, { useState } from "react";
import './App.css';
function AddMenu() {
    return (
        <div className="first-container">
            <h1>เพิ่มเมนูอาหาร</h1>
            <div className="secound-container">
                <div className='choice'>
                    <label >ชื่อเมนู</label>
                    <input type="text" className='add-on'></input>
                </div>
                <div className='choice'>
                    <label style={{ marginRight: "1vw" }}>ราคา</label>
                    <input type="text" className='add-on'></input>
                </div>
                <div className='choice'>
                    <label style={{ marginRight: "1vw" }}>รูปภาพ</label>
                    <input type="file"></input>
                </div>
                {/* <img src="https://cdn.discordapp.com/attachments/752894614448635944/1052896924497346621/salad.gif" alt='food img' width={180}></img> */}
                <div className='choice'>
                    <div style={{ display: "flex", alignItems: "center", marginRight: "1vw", flexDirection: "column", justifyContent: "space-around" }}>
                        <label>ข้าว/เส้น</label>
                        <label>เนื้อสัตว์</label>
                    </div>
                    <div>
                        <div className='sub-choice'>
                            <input type="radio" value="rice" name="rice" style={{ marginRight: "0.5vw" }} />
                            <label>ข้าว</label>
                        </div>
                        <div className='sub-choice' style={{ marginTop: "1vw" }}>
                            <input type="radio" value="pig" name="pig" style={{ marginRight: "0.5vw" }} />
                            <label>หมู +0฿</label>
                        </div>
                    </div>
                    <div>
                        <div className='sub-choice'>
                            <input type="radio" value="mama" name="mama" style={{ marginRight: "0.5vw" }} />
                            <label>มาม่า</label>
                        </div>
                        <div className='sub-choice' style={{ marginTop: "1vw" }}>
                            <input type="radio" value="chicken" name="chicken" style={{ marginRight: "0.5vw" }} />
                            <label>ไก่ +0฿</label>
                        </div>
                    </div>
                    <div>
                        <div className='sub-choice'>
                            <input type="radio" value="vermicelli" name="vermicelli" style={{ marginRight: "0.5vw" }} />
                            <label>วุ้นเส้น</label>
                        </div>
                        <div className='sub-choice' style={{ marginTop: "1vw" }}>
                            <input type="radio" value="beaf" name="beaf" style={{ marginRight: "0.5vw" }} />
                            <label>เนื้อ +5฿</label>
                        </div>
                    </div>
                    <div>
                        <div className='sub-choice'>
                            <input type="radio" value="noodle" name="noodle" style={{ marginRight: "0.5vw" }} />
                            <label>บะหมี่</label>
                        </div>
                        <div className='sub-choice' style={{ marginTop: "1vw" }}>
                            <input type="radio" value="shimp" name="shimp" style={{ marginRight: "0.5vw" }} />
                            <label>กุ้ง +10฿</label>
                        </div>
                    </div>
                    <div>
                        <div className='sub-choice'>
                            <input type="radio" value="macaroni" name="macaroni" style={{ marginRight: "0.5vw" }} />
                            <label>มักกะโรนี</label>
                        </div>
                        <div className='sub-choice' style={{ marginTop: "1vw" }}>
                            <input type="radio" value="octopus" name="octopus" style={{ marginRight: "0.5vw" }} />
                            <label>หมึก +10฿</label>
                        </div>
                    </div>
                    <div>
                        <div className='sub-choice'>
                            <input type="radio" value="spaghetti" name="spaghetti" style={{ marginRight: "0.5vw" }} />
                            <label>สปาเกตตี้</label>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                {/* <div className='choice'>
                    <label >หมายเหตุ</label>
                    <input type="text" className='add-on'></input>
                </div> */}
                <div className="button">
                    {/* <div className='manage-button'>
                        <div onClick={toggle} style={{ marginRight: "2vw" }}>
                            {LikeMenu ? <img src='https://cdn.discordapp.com/attachments/752894614448635944/1052896925231366184/heart.png' width={"30vh"}></img> :
                                <img src='https://cdn.discordapp.com/attachments/752894614448635944/1054314834289758258/love.png' width={"30vh"}></img>
                            }
                        </div>
                        <div>
                            <img src='https://cdn.discordapp.com/attachments/752894614448635944/1052896924904202310/carts.png' width={"30vh"}></img>
                        </div>
                    </div> */}
                    <div className='buy-but' style={{ marginRight: "2vw" }}>บันทึก</div>
                    <div className='buy-but'>ย้อนกลับ</div>
                </div>
            </div>
        </div>



    );
}

export default AddMenu;
