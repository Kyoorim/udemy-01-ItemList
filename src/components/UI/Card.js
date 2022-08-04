import "./Card.css";

const Card = (props) => {
  // className이 card 말고 다른 해당 className도 이용할 수 있게 해줌
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
  // props.children은 예약어. ExpenseItem.js의 <Card></Card> 사이에 있는 내용들을 받음
};

export default Card;
