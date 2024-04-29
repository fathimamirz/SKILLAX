const FormRows = ({ type, name, value, handleChange, labelText }) => {
    return (
      <div className='form-row'>
        <label htmlFor={name} className='form-label'>
          {labelText || name}
        </label>
        <textarea
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          className='form-input'
          style={{ height: "60px" }} // Adjust the height as needed
        />
      </div>
    );
  };
  export default FormRows;
  