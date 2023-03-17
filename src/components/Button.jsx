import { Link } from "react-router-dom";

export default function Button({ label, type, icon, iconName, link, action }) {
  let buttontype = "";

  switch (type) {
    case "primary":
      buttontype =
        "bg-primaryBrand-700 hover:bg-primaryBrand-900 text-white active:bg-primaryBrand-400 text-sm";
      break;
    case "secondary":
      buttontype =
        "bg-secondaryBrand-600 hover:bg-secondaryBrand-700 text-white active:bg-secondaryBrand-400 text-sm";
      break;
    case "tertiary":
      buttontype =
        "border-2 border-secondaryBrand-600 hover:bg-secondaryBrand-100 text-secondaryBrand-600 active:bg-secondaryBrand-400 text-sm";
      break;
    case "text":
      buttontype = "text-white hover:underline decoration-1 text-md";
      break;
    case "icon":
      buttontype =
        "flex flex-row items-center bg-primaryBrand-700 hover:bg-primaryBrand-900 text-white active:bg-primaryBrand-400 text-sm py-4 px-8 rounded-lg text-center";
      break;
    default:
      throw "Button must be a type";
  }

  const buttonClasses =
    buttontype + " py-4 px-8 rounded-lg text-center font-medium max-w-max";

  if (typeof action === "string") {
    action = () => {};
  }

  if (icon === "right") {
    return (
      <button onClick={action} className={buttonClasses}>
        <div className="flex flex-row gap-2 items-center">
          <span>{label}</span>
          {iconName}
        </div>
      </button>
    );
  } else if (icon === "left") {
    return (
      <Link to={link} className={buttonClasses}>
        <div className="flex flex-row gap-2 items-center">
          {iconName}
          <span>{label}</span>
        </div>
      </Link>
    );
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
