import React from 'react';
import T from 'prop-types';

import Seat from 'components/Seat';
import Spinner from 'components/Spinner';
import Zoom from 'components/Zoom';

import './styles.css';

const View = ({ seats, loading, choosingList, choose, total, zoomIn, zoomOut, scale, pay, seatType }) => (
  <div className="container">
    <div className="flex">
      <div className="item">
        {loading && <Spinner />}
        {!loading &&
          <div className="cinema-wrapper">
            <Zoom scale={scale}>
              <div className="cinema">
                <div className="screen">Screen here</div>
                {seats.map((row, index) => (
                  <div key={index}>
                    {row.map(cell => (
                      <Seat {...cell} key={cell.position}
                        choosing={choosingList.indexOf(cell.position) > -1}
                        choose={choose}
                      />
                    ))}
                  </div>
                ))}
                <div className="guide-wrapper">
                  <div className="guide">
                    <div><div className="choosed-guide" /> Đã đặt</div>
                    <div><div className="choosing-guide" /> Đang đặt</div>
                  </div>
                  <div className="guide">
                    <div><div className="standard-guide" /> Standard - 60.000 VND</div>
                    <div><div className="vip-guide" /> Vip - 90.000 VND</div>
                    <div><div className="deluxe-guide" /> Deluxe - 110.000 VND</div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        }
      </div>
      <div className="item total">
        <div>* Nhấn vào ghế còn trống để chọn, nhấn lần nữa để xoá ghế chọn.</div>
        <div>* Tải lại trang sẽ lấy lại dữ liệu default.</div>
        <div>* Click vào bất kì đâu trên cinema để kéo.</div>
        <br />
        {choosingList.length === 0 && <div>Bạn đang không chọn ghế nào</div>}
        {choosingList.length > 0 && <div>Bạn đang chọn ghế: {choosingList.join(', ')}</div>}
        {choosingList.length > 0 && (
          <>
            <div>Tổng ghế: {choosingList.length} ghế</div>
            <div>Loại ghế:</div>
            <div>Standard: {seatType.standard || 0} vé (60.000/vé)</div>
            <div>Vip: {seatType.vip || 0} vé (90.000/vé)</div>
            <div>Deluxe: {seatType.deluxe || 0} vé (110.000/vé)</div>
          </>
        )}
        <div><button className="btn-zoom" onClick={zoomOut}>&#43;</button> Phóng to</div>
        <div><button className="btn-zoom" onClick={zoomIn}>&#8722;</button> Thu nhỏ</div>
        <div>
          Tổng cộng: {total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
        </div>
        <button className="pay" onClick={pay}>Thanh toán</button>
      </div>
    </div>
  </div>
);

View.propTypes = {
  seats: T.arrayOf(T.arrayOf(T.shape({}))).isRequired,
  loading: T.bool.isRequired,
  choosingList: T.arrayOf(T.string).isRequired,
  choose: T.func.isRequired,
  total: T.number.isRequired,
  scale: T.number.isRequired,
  zoomIn: T.func.isRequired,
  zoomOut: T.func.isRequired,
  pay: T.func.isRequired,
  seatType: T.shape({
    standard: T.number,
    vip: T.number,
    deluxe: T.number,
  }).isRequired
};

export default View;
