export default function TextField({
  id,
  value,
  placeholder,
  label,
  type,
  size,
  onChange,
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

  const outerDivClasses = "flex flex-col gap-2 text-sm w-full " + sizeClass;

  if (typeof onChange === "string") {
    onChange = () => {};
  }

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
