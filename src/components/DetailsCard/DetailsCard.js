import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import "../main.scss";

import {
  incrementDebtAction,
  incrementCreditAction,
} from "../../store/ducks/cards/actions";

import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import LocalAtmOutlinedIcon from "@material-ui/icons/LocalAtmOutlined";
import { dataDebts, dataCredit } from "../../service/dbCard";

const DetailsCard = ({ debt, data }) => {
  const dispatch = useDispatch();

  const handleDispach = (id) => {
    return debt ? incrementDebtAction(id) : incrementCreditAction(id);
  };

  const colorChange = () => {
    return debt ? "titleSecondary" : "titleSecondaryGreen";
  };

  return (
    <Fragment>
      {data &&
        data.map((item) => (
          <Fragment key={item.id}>
            <div className="profile-card containerCardSecondary">
              <div className={`profile-card__container ${colorChange()}`}>
                {debt ? (
                  <>
                    <ReceiptOutlinedIcon className="colorIcon" />
                    <h5>{dataDebts.title}</h5>
                  </>
                ) : (
                  <>
                    <LocalAtmOutlinedIcon className="colorIcon" />
                    <h5>{dataCredit.title}</h5>
                  </>
                )}
              </div>
              <h5 className="title">
                {debt ? dataDebts.subtitle : dataCredit.subtitle}
              </h5>

              <div className="parent">
                <span className="div1 divLeft">
                  {debt ? (
                    <img
                      src={`assets/logo-${item.name}.png`}
                      alt={`logo-${item.name}`}
                    />
                  ) : (
                    <h5>Crédito</h5>
                  )}
                </span>
                {debt ? (
                  <>
                    <span className="div2 divRight1">R${item.value},00</span>
                    <span className="div3 divRight2">
                      R${Math.floor(item.value * 0.6)},00
                    </span>
                  </>
                ) : (
                  <>
                    <span className="div2 divRight1-1">
                      {dataCredit.valueInitial}
                    </span>
                    <span className="div3 divRight2">R${item.value},00</span>
                  </>
                )}
              </div>

              <button
                className="containerButton"
                onClick={() => dispatch(handleDispach(item.id))}
              >
                {debt ? dataDebts.buttonTitle : dataCredit.buttonTitle}
              </button>
            </div>
          </Fragment>
        ))}
    </Fragment>
  );
};

export default DetailsCard;
