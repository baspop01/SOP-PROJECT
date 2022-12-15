// import logo from '../logo.svg';
import './selectMenu.css';
function selectMenu() {
    return (
        <div className="first-container">
            <div className="secound-container">
                <h1>ข้าวผัดพริกแกงหมู</h1>
                <img src="https://cdn.discordapp.com/attachments/752894614448635944/1052896924497346621/salad.gif" alt='food img' width={180}></img>
                <p>เนื้อสัตว์</p>
                <div className='meat'>
                    <div className='sub-meat'>หมู +0฿</div>
                    <div className='sub-meat'>ไก่ +0฿</div>
                    <div className='sub-meat'>เนื้อ +5฿</div>
                    <div className='sub-meat'>กุ้ง +10฿</div>
                    <div className='sub-meat'>หมึก +10฿</div>
                </div>
                <p>ราคา 55 บาท</p>
                <div className="button">
                    <div className='manage-button'>
                        <img src='https://cdn.discordapp.com/attachments/752894614448635944/1052896925231366184/heart.png' width={"30vh"} className="manage-but"></img>
                        <img src='https://cdn.discordapp.com/attachments/752894614448635944/1052896924904202310/carts.png' width={"30vh"} className="manage-but"></img>
                    </div>
                    <div className='buy-but'>สั่งซื้อ</div>
                </div>
            </div>
        </div>



    );
}

export default selectMenu;
