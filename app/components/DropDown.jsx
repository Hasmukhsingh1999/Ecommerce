

const DropDown = ({handleProductChange,selectedProducts}) => {

  return (
    <div>
      <label htmlFor="productDropdown">Categories</label>
      <select
        value={selectedProducts}
        id="productDropdown"
        onChange={handleProductChange}
      >
        <option value="">None</option>
        <option value="iphone">iPhone</option>
        <option value="samsung">Samsung</option>
        <option value="sony">Sony</option>
      </select>
     
    </div>
  );
};

export default DropDown;
