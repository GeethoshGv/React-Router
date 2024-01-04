import React from "react";

import { amazonpay, rewards, recharge, bill } from "../../assets/img/img";

const RechargeContainer = () => {
  return (
    <>
      <div className="recharge_section">
        <div className="recharge">
          <div>
            <div className="circle">
              <img src={amazonpay} alt="" width={"100%"} />
            </div>
            <h5>Amazon pay</h5>
          </div>
          <div>
            <div className="circle">
              <img src={recharge} alt="" width={"100%"} />
            </div>
            <h5>Recharge</h5>
          </div>
          <div>
            <div className="circle">
              <img src={rewards} alt="" width={"100%"} />
            </div>
            <h5>Rewards</h5>
          </div>
          <div>
            <div className="circle">
              <img src={bill} alt="" width={"100%"} />
            </div>
            <h5>Pay Bills</h5>
          </div>
        </div>

        <div className="recharge">
          <div>
            <div className="circle">
              <img src={recharge} alt="" width={"100%"} />
            </div>
            <h5>Budget Buys</h5>
          </div>
          <div>
            <div className="circle">
              <img src={rewards} alt="" width={"100%"} />
            </div>
            <h5>Best Buys</h5>
          </div>
          <div>
            <div className="circle">
              <img src={bill} alt="" width={"100%"} />
            </div>
            <h5>Super Saver</h5>
          </div>
          <div>
            <div className="circle">
              <img src={amazonpay} alt="" width={"100%"} />
            </div>
            <h5>Top Picks</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default RechargeContainer;
