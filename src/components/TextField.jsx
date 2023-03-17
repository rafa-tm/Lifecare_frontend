export default function TextField({
  id,
  value,
  placeholder,
  label,
  type,
  size,
  onChange,
  icon,
  required,
}) {
  let sizeClass = null;

  switch (size) {
    case "full":
      sizeClass = "";
      break;
    case "half":
      sizeClass = "sm:w-[48%]";
      break;
    default:
      throw "Size must be full or half";
  }

  const outerDivClasses = "flex flex-col gap-2 text-md w-full " + sizeClass;

  if (typeof onChange === "string") {
    onChange = () => {};
  }

  if (icon) {
    return (
      <div className={outerDivClasses}>
        <div className="flex flex-row items-center w-full">
          <span className="absolute p-4 text-secondaryBrand-500">{icon}</span>
          <input
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            id={id}
            type={type}
            className="p-2 rounded-lg border-2 border-primaryBrand-300 focus:border-primaryBrand-400 w-full text-center"
          />
        </div>
      </div>
    );
  }

  if (required) {
    return (
      <div className={outerDivClasses}>
        <label htmlFor={id} className="mt-2">
          {label}
        </label>
        <input
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          id={id}
          type={type}
          required
          className="p-2 rounded-lg border-2 border-primaryBrand-300 focus:border-primaryBrand-400"
        />
      </div>
    );
  } else {
    return (
      <div className={outerDivClasses}>
        <label htmlFor={id} className="mt-2">
          {label}
        </label>
        <input
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          id={id}
          type={type}
          className="p-2 rounded-lg border-2 border-primaryBrand-300 focus:border-primaryBrand-400"
        />
      </div>
    );
  }
}
