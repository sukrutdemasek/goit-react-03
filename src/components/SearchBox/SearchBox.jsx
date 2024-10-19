import "./SearchBox.css";
export default function SearchBox({ value, onChange }) {
  return (
    <input
      className="searchBox"
      type="text"
      placeholder="Search contacts"
      value={value}
      onChange={onChange}
    />
  );
}
