import React from "react";
import './mainpage.css'
import { useState, useEffect } from "react";

export default function App() {
  const [food, setFood] = useState([]);
  const [foodMain, setFoodMain] = useState([]);
  const [foodFav, setFoodFav] = useState([]);



  useEffect(() => {
    setFoodMain(["ข้าวมันกู้ว", "ข้าวมันกู้ว"])
    setFoodFav(["ชอบ", "ชอบ", "ชอบ"])
    setFood(["ข้าวมันกู้ว", "ข้าวมันกู้ว"])
  }, [])


  return (
    <body>
      <div className="container">
        <div className="header">
          <h1>ยืนยันคำสั่งซื้อ</h1>
        </div>
        <div className="out-container">
          <div className="Image">
            <div className="food">
              <h4 style={{ textAlign: "center", paddingTop: 15 }}>รายการอาหารทั้งหมด</h4>
              {
                food.map((value) => {
                  return (
                    <div className="image-food">
                      <img class="image-menu" src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" />
                      <div style={{ padding : 20 }}>
                        <p style={{ fontSize: "1.3vw" }}>{value}</p>
                        <p style={{ fontSize: "0.815vw" }}>0 ฿</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="Input">
            <div>
              <label className="labelname" for="fname">ผู้สั่งซื้อ</label>
              <input type="text" id="fname" name="firstname"></input>
              <label className="labelname" for="fname">Email/Line?</label>
              <input type="text" id="email" name="email"></input>
            </div>
            <div>
              <label className="labelname" for="fname">เบอร์ติดต่อ</label>
              <input type="text" id="phone" name="phone"></input>
            </div>
          </div>
          <div className="Btn">
            <button className="btnBack">ย้อนกลับ</button>
            <button className="btnBuy">สั่งซื้อ</button>
          </div>
        </div>
      </div>
    </body>
  );
}