function Button({ text, onClick, icon, variant = "default" }) {
  function getButtonStyles() {
    switch (variant) {
      case "confirm-order":
        return "bg-orange-500 text-white";
      case "remove-item":
        return "border-2 border-black text-white";
      default:
        return "border-2 border-black px-4 py-2";
    }
  }

  return (
    <button className={`rounded-full ${getButtonStyles()}`} onClick={onClick}>
      {icon && (
        <img
          src={icon}
          alt={`${text} icon`}
          className={`inline-block w-4 h-4 ${text && "mr-2"}`}
        />
      )}
      {text}
    </button>
  );
}

export default Button;
