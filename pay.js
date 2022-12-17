
import './pay.css';
function selectMenu() {
    return (
        <body className='container'>
            <div>
                <div >
                    <p className='textcard'>ชำระเงิน</p>
                </div>
                <div className='card'>
                <div className='box'>
                    <button variant="contained" className='buttonAdd'>
                        <div style={{ fontSize: '2vw' }}>จ่ายด้วยเงินสด</div>
                    </button>
                    <button variant="contained" className='buttonAdd'>
                        <div style={{ fontSize: '2vw' }}>Prompay</div>
                    </button>
                    <div className='total'>
                        <p className='textThank'>รวมราคาทั้งหมด</p>
                        <p className='textbaht'>10000</p>
                        <p className='textThank'>บาท</p>
                    </div>
                </div>
                <div className='pic'>
                <img style={{height: '20vw'}} src='https://cdn.discordapp.com/attachments/752894614448635944/1052926075954532422/clorazepate.png' alt="qr" />
                </div>
                    {/* ---------------------------------------------------------- */}

                    {/* <div className='box'>
                        <div className='boxStar'>
                        <img className='img' src='https://cdn.discordapp.com/attachments/752894614448635944/1052888986290495488/star.png' alt="star" />
                        <img className='img' src='https://cdn.discordapp.com/attachments/752894614448635944/1052888986290495488/star.png' alt="star" />
                        <img className='img' src='https://cdn.discordapp.com/attachments/752894614448635944/1052888986290495488/star.png' alt="star" />
                        <img className='img' src='https://cdn.discordapp.com/attachments/752894614448635944/1052888986290495488/star.png' alt="star" />
                        <img className='img' src='https://cdn.discordapp.com/attachments/752894614448635944/1052888986290495488/star.png' alt="star" />
                        </div>
                        <button variant="contained" className='buttonAdd'>
                            <div style={{ fontSize: '1.4vw' }}>สั่งอาหารเพิ่ม</div>
                        </button>
                        <div >
                            <p className='textThank'>ขอบคุณครับ</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </body>

    );
}

export default selectMenu;