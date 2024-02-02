import React from "react";
import { Button, Card } from "antd";
const { Meta } = Card;
const PCard = () => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={
      <img
        alt="example"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZzaWIurz61-z7qn4pmhtXp-yAydWOmvP0A&usqp=CAU"
      />
    }
  >
    {" "}
    <Button>Follow</Button>
  </Card>
);
export default PCard;
