import classes from "./cards.module.css";
import { Card } from "../Card";
import { Button } from "../Button";

export const Cards = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["wrapper"]}>
        <Card img="https://placehold.it/300x200/" title="Card title">
          <p>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
          <Button />
        </Card>
        <Card title="Special title treatment">
          <p>With supporting text below as a natural lead-in to additional content.</p>
          <Button />
        </Card>
      </div>
    </div>
  );
};
