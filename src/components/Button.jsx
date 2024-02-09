function Button({
  text = "btnText",
  bg = "#00c56a",
  color = "#242424",
  borderBottomLeftRadius = "5px",
  borderBottomRightRadius = "5px",
}) {
  return (
    <button
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
