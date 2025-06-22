export default function Sticker({ img, label, onClick }) {
  return (
    <>
      <div onClick={() => onClick(label)} className="sticker">
        <img src={img} alt={label} />
      </div>
    </>
  );
}
