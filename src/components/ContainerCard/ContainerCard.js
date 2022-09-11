import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import DetailsCard from "../DetailsCard/DetailsCard";
import PromotionCard from "../PromotionCard/PromotionCard";
import "../main.scss";

const ContainerCard = () => {
  const { debts, credit, promotions, score } = useSelector(
    (state) => state.reducer
  );

  return (
    <>
      {score <= 30 && <DetailsCard debt data={debts} />}
      {score > 30 && score <= 60 && <DetailsCard data={credit} />}
      {score > 50 && score <= 90 && (
        <PromotionCard vip={false} data={promotions} />
      )}
      {score > 90 && <PromotionCard vip data={promotions} />}
    </>
  );
};

export default ContainerCard;
