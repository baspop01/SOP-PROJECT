import React from "react";
import './mainpage.css'
import { useState, useEffect } from "react";

export default function App() {
  const [food, setFood] = useState([]);
  const [foodMain, setFoodMain] = useState([]);
  const [foodFav, setFoodFav] = useState([]);
  const [btnQueue, setbtnQueue] = useState("btn");
  const [btnMain, setbtnMain] = useState("btnClick");
  const [btnFav, setbtnFave] = useState("btn");
  const [btnOrder, setbtnOrder] = useState("btn");
  const [queue, setQueue] = useState(0);
  const [order, setOrder] = useState(0);



  useEffect(() => {
    setFoodMain(["ข้าวมันกู้ว", "ข้าวมันกู้ว", "ข้าวมันกู้ว", "ข้าวมันกู้ว", "ข้าวมันกู้ว", "ข้าวมันกู้ว", "ข้าวมันกู้ว"])
    setFoodFav(["ชอบ", "ชอบ", "ชอบ"])
    setFood(["ข้าวมันกู้ว", "ข้าวมันกู้ว", "ข้าวมันกู้ว", "ข้าวมันกู้ว", "ข้าวมันกู้ว", "ข้าวมันกู้ว", "ข้าวมันกู้ว"])
  }, [])


  return (
    <body>
      <div className="container">
        <div className="header">
          <h1>ครัวพี่ช้าง</h1>
          <h3>TEL. 0616645773</h3>
          <h3>สถานะ: เปิด</h3>
        </div>
        <div className="Btn-container">
          <div style={{ textAlign: "left" }}>
            <button className={btnQueue} onClick={() => { setbtnQueue("btnClick"); setbtnMain("btn"); setbtnFave("btn"); setbtnOrder("btn");}}>คุณคิวที่ {queue} </button>
          </div>
          <div style={{ textAlign: "center" }}>
            <button className={btnMain} onClick={() => { setbtnQueue("btn"); setbtnMain("btnClick"); setbtnFave("btn"); setbtnOrder("btn"); setFood(foodMain)}}>เมนูหลัก</button>
            <button className={btnFav} onClick={() => { setbtnQueue("btn"); setbtnMain("btn"); setbtnFave("btnClick"); setbtnOrder("btn"); setFood(foodFav)}}>รายการโปรด</button>
          </div>
          <div style={{ textAlign: "right" }}>
            <button className={btnOrder} onClick={() => { setbtnQueue("btn"); setbtnMain("btn"); setbtnFave("btn"); setbtnOrder("btnClick") }}>{order} รายการ</button>
          </div>
        </div>
        <hr style={{backgroundColor: "#69443C", height: "0.15vw", marginTop: "2vw", marginBottom: "2vw"}}/>
        <button className="btnAdd" onClick={() => { console.log("เบลอ")}}>+ เพิ่มเมนูใหม่</button>
        <div className="food">
          {
            food.map((value) => {
              return (
                <div className="food-menu">
                  <img class="image-menu" src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"/>
                  <p style={{fontSize: "1.5vw"}}>{value}</p>
                  <p style={{fontSize: "1.15vw"}}>0 ฿</p>
                  <button className="btnDetail" onClick={() => { console.log("เบลอ")}}>ดูรายละเอียด</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </body>
  );
}

