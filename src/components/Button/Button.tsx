import classes from "./button.module.css";

export const Button = () => {
  return (
    <a href={"#"} className={classes[`btn`]}>
      Go somewhere
    </a>
  );
};
