
import './review.css';
function selectMenu() {
    return (
        <body className='container'>
            <div>
                <div >
                    <p className='textcard'>ให้คะแนนความพึงพอใจ</p>
                </div>
                <div className='card'>

                    {/* ---------------------------------------------------------- */}

                    <div className='box'>
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
                    </div>
                </div>
            </div>
        </body>

    );
}

export default selectMenu;

