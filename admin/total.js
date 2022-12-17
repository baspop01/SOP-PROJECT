import './total.css'
function total() {
    return (
        <div className='box'>
            <div className='box-button'>
                <div className='logout'>ออกจากระบบ</div>
            </div>
            <div className='sub-box'>
                <h1>ยอดประจำวันที่ 28/12/2565</h1>
                <div className='box-summary'>

                    <div className='summary'>
                        <h3 style={{ marginRight: "5vw", marginLeft: "5vw"}}>จำนวนลูกค้า</h3>
                        <h3 style={{ marginRight: "5vw", marginLeft: "5vw"}}>รายการทั้งหมด</h3>
                        <h3 style={{ marginRight: "5vw", marginLeft: "5vw"}}>ราคาทั้งหมด</h3>
                    </div>
                    <div className='summary'>
                        <h3 style={{ marginRight: "5vw", marginLeft: "5vw"}}>122</h3>
                        <h3 style={{ marginRight: "5vw", marginLeft: "5vw"}}>252</h3>
                        <h3 style={{ marginRight: "5vw", marginLeft: "5vw"}}>1,222,222</h3>
                    </div>
                    <div className='summary'>
                        <h3 style={{ marginRight: "5vw", marginLeft: "5vw"}}>คน</h3>
                        <h3 style={{ marginRight: "5vw", marginLeft: "5vw"}}>รายการ</h3>
                        <h3 style={{ marginRight: "5vw", marginLeft: "5vw"}}>บาท</h3>
                    </div>
                </div>
                <table className='row-data'>
                    <tbody>

                        <tr>
                            <td>ลำดับ</td>
                            <td>ชื่อลูกค้า</td>
                            <td>จำนวนรายการ</td>
                            <td>ราคา</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Jackson</td>
                            <td>94</td>
                            <td>94000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Doe</td>
                            <td>80</td>
                            <td>80000</td>
                        </tr>
                    </tbody>
                </table>
                <div className='box-button'>
                    <div className='back'>
                        ย้อนกลับ
                    </div>
                </div>
            </div>
        </div>
        // style={{ marginRight: "5vw", marginLeft: "5vw"}}
    );
}
export default total;
