import React from 'react';
import T from 'prop-types';

import Seat from 'components/Seat';
import Spinner from 'components/Spinner';

import './styles.css';

const View = ({ seats, loading, choosingList, choose, total, zoomIn, zoomOut }) => (
  <div className="container">
    <div className="flex">
      <div className="item">
        {loading && <Spinner />}
        {!loading && <div className="cinema-wrapper">
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
                <div>
                  <div className="choosed-guide" /> Đã đặt
              </div>
                <div>
                  <div className="choosing-guide" /> Đang đặt
              </div>
              </div>
              <div className="guide">
                <div>
                  <div className="standard-guide" /> Standard - 60.000 VND
              </div>
                <div>
                  <div className="vip-guide" /> Vip - 90.000 VND
              </div>
                <div>
                  <div className="deluxe-guide" /> Deluxe - 110.000 VND
              </div>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
      <div className="item total">
        <button onClick={zoomOut}>+</button>
        <button onClick={zoomIn}>-</button>
        <div>* Nhấn vào ghế còn trống để chọn, nhấn lần nữa để xoá ghế chọn.</div>
        {choosingList.length === 0 && <div>Bạn đang không chọn ghế nào</div>}
        {choosingList.length > 0 && <div>Bạn đang chọn ghế: {choosingList.join(', ')}</div>}
        <div>
          Tổng cộng: {total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
        </div>
        <button>Thanh toán</button>
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
};

export default View;
