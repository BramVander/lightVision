function Button({
  text = "btnText",
  bg = "#0055FF",
  color = "white",
  borderBottomLeftRadius = "5px",
  borderBottomRightRadius = "5px",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        color: color,
        backgroundColor: bg,
        padding: "10px",
        border: bg,
        borderRadius: "5px",
        borderBottomLeftRadius: borderBottomLeftRadius,
        borderBottomRightRadius: borderBottomRightRadius,
        textTransform: "uppercase",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

export default Button;
