import React from "react";
import './mainpage.css'
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [food, setFood] = useState([]);
  const [foodMain, setFoodMain] = useState([]);
  const [foodFav, setFoodFav] = useState([]);
  const [btnMain, setbtnMain] = useState("btnClick");
  const [btnFav, setbtnFave] = useState("btn");
  const [queue, setQueue] = useState(0);
  const [order, setOrder] = useState(0);
  const [styleFoodMain, setStyleFoodMain] = useState(1);
  const [styleFoodFav, setStyleFoodFav] = useState(0);


  useEffect(() => {
    axios.get("http://localhost:8080/food", { crossdomain: true }).then(res => {
      setFoodMain(res.data)
      setFood(res.data)
    })
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
            <button className="btn" onClick={() => { setbtnMain("btn"); setbtnFave("btn"); window.location.href='./screen/LoginPage.js' }}>คุณคิวที่ {queue} </button>
          </div>
          <div style={{ textAlign: "center" }}>
            <button className={btnMain} onClick={() => { setbtnMain("btnClick"); setbtnFave("btn"); setFoodMain(food); setFoodFav([]); setStyleFoodMain(1); setStyleFoodFav(0) }}>เมนูหลัก</button>
            <button className={btnFav} onClick={() => { setbtnMain("btn"); setbtnFave("btnClick"); setFoodFav(food); setFoodMain([]); setStyleFoodMain(0); setStyleFoodFav(1) }}>รายการโปรด</button>
          </div>
          <div style={{ textAlign: "right" }}>
            <button className="btn" onClick={() => { setbtnMain("btn"); setbtnFave("btn"); }}>ตะกร้า {order}</button>
          </div>
        </div>
        <hr style={{ backgroundColor: "#69443C", height: "0.15vw", marginTop: "2vw", marginBottom: "2vw" }} />
        <button className="btnAdd" onClick={() => { console.log("เบลอ") }}>+ เพิ่มเมนูใหม่</button>
        <div className="food">
          {
            foodMain.map((value) => {
              return (
                <div className="food-menu" style={{ opacity: styleFoodMain }} key={value._id}>
                  <img class="image-menu" src={value.image} />
                  <p style={{ fontSize: "1.5vw", margin: "0.75vw" }}>{value.name}</p>
                  <p style={{ fontSize: "1.45vw", margin: "0.5vw" }}>{value.price} ฿</p>
                  <button className="btnDetail" onClick={() => { console.log("เบลอ") }}>ดูรายละเอียด</button>
                </div>
              )
            })
          }
          {
            foodFav.map((value) => {
              return (
                <div className="food-fav" style={{ opacity: styleFoodFav }} key={value._id}>
                  <img class="image-menu" style={{ marginRight: "2vw" }} src={value.image} />
                  <div style={{ marginRight: "auto" }}>
                    <p style={{ fontSize: "1.5vw", margin: "1vw" }}>เมนู : {value.name}</p>
                    <p style={{ fontSize: "1.55vw", margin: "1vw" }}>ราคา : {value.price} ฿</p>
                    <button style={{ fontSize: "1vw" }} className="btnDetail" onClick={() => { console.log("เบลอ") }}>ดูรายละเอียด</button>
                  </div>
                  <div style={{ marginTop: "auto", marginBottom: "auto" }}>
                    <button style={{ fontSize: "1.5vw", marginTop: "1vw" }} className="btnAddCart" onClick={() => { console.log("เบลอ") }}>เพิ่มใส่ในตะกร้า</button>
                    <button style={{ fontSize: "1.5vw", marginTop: "1vw" }} className="btnRemove" onClick={() => { console.log("เบลอ") }}>นำออก</button>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </body>
  );
}
