import React, { Fragment } from "react";
import { useDispatch } from "react-redux";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";

import { incrementPromoAction } from "../../store/ducks/cards/actions";

const PromotionCard = ({ vip, data }) => {
  const dispatch = useDispatch();

  return (
    <>
      {data &&
        data.map((item) => (
          <Fragment key={item.id}>
            <div className="profile-card containerCardSecondary">
              <div className="profile-card__container titleSecondaryGreen">
                <LockOutlinedIcon className="colorIcon" />

                <h5>Proteção para seus documentos</h5>
              </div>
              <h5 className="title">Encontramos uma oferta para você!</h5>

              <div className="parent">
                <span className="div1 divLeft">
                  <AccountBalanceWalletOutlinedIcon className="colorIcon" />
                  <h5>Proteja seu RG</h5>
                </span>
                {vip ? (
                  <>
                    <span className="div2 divRight1">R${item.value},00</span>
                    <span className="div3 divRight2">
                      R${Math.floor(item.value * 0.7)},00
                    </span>
                  </>
                ) : (
                  <span className="div4">R${item.value},00</span>
                )}
              </div>

              <button
                className="containerButton"
                onClick={() => dispatch(incrementPromoAction(item.id))}
              >
                Ver oferta
              </button>
            </div>
          </Fragment>
        ))}
    </>
  );
};

export default PromotionCard;
