import React, { Component } from 'react';
import bgPic from '../assets/img/bgGame.png'
import DiceList from './DiceList';
import { connect } from 'react-redux';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100vh',
    backgroundImage: `url(${bgPic})`,
}
class DiceHome extends Component {

    render() {
        return (
            <div style={containerStyle}>
                <h1>GAME ĐỔ XÚC SẮC</h1>
                <div
                    style={{
                        width: '50%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <button type="button" style={{ height: 100, width: 100, border: "3px solid green", }} className="btn btn-primary fs-3">TÀI</button>
                    <DiceList />
                    <button type="button" style={{ height: 100, width: 100, border: "3px solid green", }} className="btn btn-primary fs-3">Xỉu</button>
                </div>
                <h2>Bạn chọn: </h2>
                <h2>Số bàn thắng: </h2>
                <h2>Tổng số bàn chơi: </h2>
                <button type='button' className='btn btn-success'>Play</button>
                {/* <ul
                    style={{
                        padding: 0,
                        listStyle: 'none',
                        fontSize: '1.6rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                    }}
                >
                    <li>Your choice: <span>{userChoice ? 'Odd' : 'Even'}</span></li>
                    <li>🔥 Matches Won: <span>{won}</span></li>
                    <li>🔥 Total matches: <span>{match}</span></li>
                </ul>
                <div>
                    {!isFinished && <Button variant='contained' color='success' onClick={play}>
                        <Typography variant='h6'>PLAY GAME</Typography>
                    </Button>}
                    {isFinished && <Button variant='contained' color='primary' onClick={clearDice}>
                        <Typography variant='h6'>NEXT</Typography>
                    </Button>}
                </div> */}
            </div >
        );
    }
}
const mapDispatchToProps = (action) => {

}
export default connect(null, mapDispatchToProps)(DiceHome)