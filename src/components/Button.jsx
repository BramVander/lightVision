function Button({
  text = "btnText",
  borderBottomLeftRadius = "5px",
  borderBottomRightRadius = "5px",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        color: "white",
        backgroundColor: "#0055FF",
        padding: "10px",
        border: "#0055FF",
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
