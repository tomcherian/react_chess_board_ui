import "./index.css";

type CheckBoxProps = {
  color: string;
};

const CheckBox = ({ color }: CheckBoxProps) => {
  return (
    <div
      className={`check-box ${
        color === "white" ? "color-white" : "color-black"
      }`}
    ></div>
  );
};

export default CheckBox;
