function Button({ text = "btnText", bg = "#00c56a", color = "#242424" }) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: bg,
        padding: "10px",
        border: bg,
        borderRadius: "5px",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

export default Button;
