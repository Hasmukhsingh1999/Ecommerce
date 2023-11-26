

const DropDown = ({handleProductChange,selectedProducts}) => {

  return (
    <div className="text-sm">
      <label htmlFor="productDropdown" ></label> 
      <span className="font-bold">Categories </span>
      <select
      className="outline-none  "
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
