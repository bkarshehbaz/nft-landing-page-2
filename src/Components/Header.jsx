import React from "react";

export default function Header() {
  return (
    <header className="transparent scroll-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div className="de-flex-col">
                  {/* logo begin */}
                  <div id="logo">
                    <a href="03_grey-index.html">
                      {/* <img alt="" src="" /> */}
                      <h2>NFT Landing</h2>
                    </a>
                  </div>
                  {/* logo close */}
                </div>
              </div>
              <div className="de-flex-col header-col-mid">
                {/* mainmenu begin */}
                <ul id="mainmenu">
                  <li>
                    <a href="03_grey-index.html">Home</a>
                  </li>
                  <li>
                    <a href="03_grey-index.html">FAQs</a>
                  </li>
                  <li>
                    <a href="03_grey-index.html">RoadMap</a>
                  </li>
                </ul>
                {/* mainmenu close */}
                <div className="menu_side_area">
                  <a href="03_grey-wallet.html" className="btn-main">
                    <i className="icon_wallet_alt" />
                    <span>Connect Wallet</span>
                  </a>
                  <span id="menu-btn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
