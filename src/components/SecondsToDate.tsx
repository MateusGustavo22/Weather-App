import React from "react";
import moment from "moment";

interface Props {
  seconds: number;
}

const SecondsToDate: React.FC<Props> = ({ seconds }) => {
  const date = moment(seconds * 1000); // multiplicamos por 1000 para converter de segundos para milissegundos
  const formattedDate = date.format("DD MMMM YYYY");

  return <>{formattedDate}</>; // retornamos a data formatada no formato desejado
};

export default SecondsToDate;
