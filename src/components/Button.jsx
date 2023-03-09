import { Link } from "react-router-dom";

export default function Button({ label, type, link, action }) {
  let buttontype = "";

  switch (type) {
    case "primary":
      buttontype =
        "bg-primaryBrand-700 hover:bg-primaryBrand-900 text-white active:bg-primaryBrand-400";
      break;
    case "secondary":
      buttontype =
        "bg-secondaryBrand-600 hover:bg-secondaryBrand-700 text-white active:bg-secondaryBrand-400";
      break;
    case "tertiary":
      buttontype =
        "border-2 border-secondaryBrand-600 hover:bg-secondaryBrand-100 text-secondaryBrand-600 active:bg-red-400";
      break;
    default:
      throw "Button must have a type";
  }

  const buttonClasses =
    buttontype + " py-4 px-8 rounded-lg text-center text-sm";

  if (typeof action === "string") {
    action = () => {};
  }

  if (link) {
    return (
      <Link to={link} className={buttonClasses}>
        {label}
      </Link>
    );
  } else if (action) {
    return (
      <button onClick={action} className={buttonClasses}>
        {label}
      </button>
    );
  } else {
    throw "Button must have either link or action property defined";
  }
}
