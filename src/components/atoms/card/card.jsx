import classNames from "classnames";

import "./card.css";

function Card(props) {
  const classes = classNames("card", props.className);

  return <div className={classes}>{props.children}</div>;
}

export default Card;
