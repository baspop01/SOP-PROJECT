// import food from '../salad.gif';
import './myMenu.css';
function myMenu() {
    return (
        <div className="first-container">
            <h1 style={{color:"#705142"}}>เพิ่มเมนูอาหารที่ทำเอง</h1>
            <div className="secound-container">
                <form className="input">
                    <div className='formgroup'>
                        <label>ชื่ออาหาร</label>
                        <input type="text" className="sub-input"></input>
                    </div>
                    <div className='formgroup'>
                        <label>เนื้อสัตว์</label>
                        <input type="text" className="sub-input"></input>
                    </div>
                    <div className='formgroup'>
                        <label>วัตถุดิบ</label>
                        <input type="text" className="sub-input"></input>
                    </div>
                    <div className='formgroup'>
                        <label>หมายเหตุ</label>
                        <input type="text" className="sub-input"></input>
                    </div>
                    <div className="button">
                        <div>
                            {/* <button type='submit' className="manage-but"> */}
                                <img src='https://cdn.discordapp.com/attachments/752894614448635944/1052896925231366184/heart.png' width={"30vh"} className="manage-but"></img>
                            {/* </button> */}
                            {/* <button type='submit' className="manage-but"> */}
                                <img src='https://cdn.discordapp.com/attachments/752894614448635944/1052896924904202310/carts.png' width={"30vh"} className="manage-but"></img>
                            {/* </button> */}
                        </div>
                        <div className="back-but">ย้อนกลับ</div>
                    </div>
                </form>
                <div className='loading'>
                    <img src="https://cdn.discordapp.com/attachments/752894614448635944/1052896924497346621/salad.gif" alt="loading..." width={"200vh"}/>
                    <p style={{color:"gray"}}>ตั้งตารอเมนูใหม่ไม่ไหวแล้ว...</p>
                </div>
            </div>
        </div>
    );
}

export default myMenu;
