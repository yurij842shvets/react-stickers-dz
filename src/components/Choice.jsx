export default function Choice({ selectedSticker }) {
  return (
    <>
      <div>
        {selectedSticker ? (
          <p style={{ fontSize: "32px" }}>
            Seleted sticker is
            <span
              style={{
                color: "#fff",
                background: "#0078d4",
                padding: "6px 12px",
                borderRadius: "20px",
                marginLeft: "10px",
              }}
            >
              {selectedSticker}
            </span>
          </p>
        ) : (
          <p style={{ fontSize: "32px" }}>No sticker selected</p>
        )}
      </div>
    </>
  );
}
