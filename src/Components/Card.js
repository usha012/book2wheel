import React, { useState } from "react";
import DummyProduct from "../Assets/Images/dummy_product.png";
import Van from "../Assets/Images/van.svg";
import Light from "../Assets/Images/light.svg";
import LocationIcon from "../Assets/Images/location_icon.svg";
import Star from "../Assets/Images/star.svg";
import GrayStar from "../Assets/Images/gray_star.svg";
import HeartOutline from "../Assets/Images/heart_outline.svg";
import BlueHeart from "../Assets/Images/blue_heart.svg";

export default function Card() {
  const [fav, setFav] = useState(false)
  return (
    <div class="card product_card_wrapper">
      <img src={DummyProduct} class="card-img-top" />
      <div class="card-body px-0">
        <div className="d-flex justify-content-between mb-2">
          <div className="d-flex align-items-center product_card_name">
            <div className="border-end-dark-blue-400 pe-3 ps-0">
              <p className="mb-0 fs_19 fw_600">Yamaha Mio</p>
            </div>
            <div className="pe-3 ps-3">
              <p className="mb-0 fs_19 fw_500"> 150 CC</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <img src={Van} className="me-2" />
            <img src={Light} />
          </div>
        </div>

        <div className="row mb-2">
          <div className="d-flex align-items-center">
            <div className="badge rounded-pill cstm-round-pill me-3">
              <div className="d-flex align-items-center">
                <div className="location_icon">
                  <img src={LocationIcon} className="me-1" />
                </div>
                <div className="border-end-dark-blue-400 pe-2 me-2">
                  <p className="mb-0 fw_400 fs_13 line_height_11"> Manila</p>
                </div>
                <div>
                  <p className="mb-0 fw_400 fs_13 line_height_11"> 13.1 km </p>
                </div>
              </div>
            </div>
            <div className="badge rounded-pill cstm-round-pill me-3">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0 fw_400 fs_13 line_height_11">
                    {" "}
                    Minimum 1 day{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-2">
          <ul className="d-flex align-items-end mb-0 review_list">
            <li className="pe-4">
              <div className="rating">
                <ul className="d-flex align-items-center px-0 star_list_none">
                  <li className="me-2 rating_active">
                    <img src={Star} className="d-none yellow_star" />
                    <img src={GrayStar} className="gray_star" />
                  </li>
                  <li className="me-2 rating_active">
                    <img src={Star} className="d-none yellow_star" />
                    <img src={GrayStar} className="gray_star" />
                  </li>
                  <li className="me-2">
                    <img src={Star} className="d-none yellow_star" />
                    <img src={GrayStar} className="gray_star" />
                  </li>
                  <li className="me-2 ">
                    <img src={Star} className="d-none yellow_star" />
                    <img src={GrayStar} className="gray_star" />
                  </li>
                </ul>
              </div>
            </li>
            <li className="pe-4">
              <div className="rental">
                <p className="fs_15 fw_400 mb-0 line_height_14">3 rentals</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center amount justify-content-between">
          <ul className="d-flex align-items-center list-none px-0">
            <li className="me-3">
              <div>
                <p className="s mb-0 fs_15 fs_md_15 fw_400">₱2,500</p>
              </div>
            </li>
            <li className="me-3">
              <div>
                <p className="mb-0 fs_15 fs_md_15 "><span className="current_price fw_700">₱2,500</span>/day</p>
              </div>
            </li>
          </ul>
          <div>
            <p className="fw_bold fs_15 fs_md_15 fw_700">Total: ₱25,000</p>
          </div>
        </div>
      </div>
      <div className="fav_wrapper position-absolute rounded-circle p-2 cusor-pointer" onClick={() => setFav(!fav)} >
        {fav ?<div className="pr-20-contain"><img src={BlueHeart} className="active" /></div>  : <div className="pr-20-contain "><img src={HeartOutline} /></div>}
      </div>
    </div>
  );
}
