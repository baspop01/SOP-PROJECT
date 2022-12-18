import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";
import './waitingitem.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { collapseClasses } from "@mui/material";
import { color } from "@mui/system";
// import './main.js'
function createData(number, nameCustomer, item, quantity, price, status,phoneNumber) {
    return { number, nameCustomer, item, quantity, price, status,phoneNumber };
  }
  
  const rows = [
    createData(1, 'แป้งแป้ง', 'หมี่เย็น', 'เส้นเยอะ ๆ', 100, true,'0927175555'),
    createData(1, 'แป้งแป้ง', 'หมี่เย็น', 'เส้นเยอะ ๆ', 100, true,'0927175555'),
    createData(1, 'แป้งแป้ง', 'หมี่เย็น', 'เส้นเยอะ ๆ', 100, false,'0927175555'),
    createData(1, 'แป้งแป้ง', 'หมี่เย็น', 'เส้นเยอะ ๆ', 100, true,'0927175555'),
    createData(1, 'แป้งแป้ง', 'หมี่เย็น', 'เส้นเยอะ ๆ', 100, false,'0927175555'),
  ];

const mainAdmin = () => {
    return (
        <View style={styles.container} className="body">
            <div className="div1">
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '2vw' }}>
                    <button className="buttonOut" variant="contained" style={{ cursor: 'pointer' }}>
                        <a className="div1" style={{ fontSize: '1vw', color: 'white' }}>ออกจากระบบ</a>
                    </button>
                </div>
            </div>
            <div className="div2">
                <div style={{ display: 'flex', justifyContent: 'center', marginRight: '2vw' }}>
                    <button className="buttonAll" variant="contained" style={{ cursor: 'pointer' }}>
                        <a className="div2" style={{ fontSize: '1vw', color: 'black' }}>หน้าหลัก</a>
                    </button>
                    <button className="buttonAll" variant="contained" style={{ cursor: 'pointer' }}>
                        <a className="div2" style={{ fontSize: '1vw', color: 'black' }}>ดูยอดทั้งหมด</a>
                    </button>
                </div>
            </div>
            <div className="div3">
                <div style={{ display: 'flex', justifyContent: 'center', marginRight: '2vw' }}>
                    <button className="buttonAll" variant="contained" style={{ cursor: 'pointer' }}>
                        <a className="div3" style={{ fontSize: '1vw', color: 'black' }}>รอการทำรายการ</a>
                    </button>
                    <button className="buttonAll" variant="contained" style={{ cursor: 'pointer' }}>
                        <a className="div3" style={{ fontSize: '1vw', color: 'black' }}>กำลังทำรายการ</a>
                    </button>
                    <button className="buttonAll" variant="contained" style={{ cursor: 'pointer' }}>
                        <a className="div3" style={{ fontSize: '1vw', color: 'black' }}>ทำรายการสำเร็จ</a>
                    </button>
                </div>
            </div>
            <div>
            <TableContainer component={Paper} style={{margin: '5vw', width: '90%', borderRadius: '1vw', border: '0.25vw solid #2c0b06'}} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="tableBig">
        <TableHead style={{borderBottom:'0.25vw solid #2c0b06'}}>
          <TableRow >
            <TableCell align="center"><a className="div3">ลำดับ</a></TableCell>
            <TableCell align="center"><a className="div3">ชื่อลูกค้า</a></TableCell>
            <TableCell align="center"><a className="div3">รายการอาหาร</a></TableCell>
            <TableCell align="center"><a className="div3">จำนวน</a></TableCell>
            <TableCell align="center"><a className="div3">ราคา</a></TableCell>
            <TableCell align="center"><a className="div3">สถานะ</a></TableCell>
            <TableCell align="center"><a className="div3"></a></TableCell>
            <TableCell align="center"><a className="div3">เบอร์โทร</a></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center"><a className="div3">{row.number}</a></TableCell>
              <TableCell align="center"><a className="div3">{row.nameCustomer}</a></TableCell>
              <TableCell align="center"><a className="div3">{row.item}</a></TableCell>
              <TableCell align="center"><a className="div3">{row.quantity}</a></TableCell>
              <TableCell align="center"><a className="div3">{row.price}</a></TableCell>
              {/* <TableCell align="center"><a className="div3" style={row.status? {color:"black"}: {}}>รอการชำระเงิน</a></TableCell>
              <TableCell align="center"><a className="div3" style={row.status? {}: {color:"red"}}>ชำระเงินแล้ว</a></TableCell> */}
             
             <TableCell align="center"><p className="div3">{(row.status)? "รอการชำระเงิน": "ชำระเงินแล้ว"}</p></TableCell>
             
             {/* <TableCell align="center"><a className="div3">{row.status}</a></TableCell> */}
             <TableCell align="center">
             <button className="buttonAll" variant="contained" style={row.status? {backgroundColor: '#7ad441', cursor: 'pointer'} : {backgroundColor: '#9e9e9e', cursor: 'pointer'}}>
                       <a className="div3" style={{ fontSize: '1vw', color: 'white' }}>ชำระเงินแล้ว</a>
                   </button>

              {/* <TableCell align="center"><a className="div3">{row.status}</a></TableCell> */}
              {/* <TableCell align="center">
              <button className="buttonAll" variant="contained" style={{ cursor: 'pointer',  backgroundColor: '#7ad441' }}>
                        <a className="div3" style={{ fontSize: '1vw', color: 'white' }}>ชำระเงินแล้ว</a>
                    </button> */}
              </TableCell>
              <TableCell align="center"><a className="div3">{row.phoneNumber}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
            

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F0E0",
        width: '100%',
        height: '100%',
    },





});
export default mainAdmin;