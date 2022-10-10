const FormRow = ({
  label,
  type,
  name,
  value,
  handleChange,
  placeholder,
  min,
  max,
}) => {
  return (
    <div className="mb-3">
      {label && <label>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-control"
        placeholder={placeholder}
        min={min}
        max={max}
        required
      />
    </div>
  );
};

export default FormRow;
