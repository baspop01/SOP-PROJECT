import logo from '../logo.svg';
import './selectMenu.css';
function selectMenu() {
  return (
    <div className="first-container">
        <div className="secound-container">
            <h1>ข้าวผัดพริกแกงหมู</h1>
            <img src={logo} alt='food img' width={250}></img>
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
                <button>รายการโปรด</button>
                <div className='manage-button'>
                    <button>เพิ่มเข้าตระกร้า</button>
                    <button>สั่งซื้อ</button>
                </div>
            </div>
        </div>        
    </div>

    

  );
}

export default selectMenu;
