import React from 'react';

function AddNewItemForm({shoppingItems, setShoppingItems}) {
  const [item,setItem] = React.useState('')

  function handleSubmit(e){
    e.preventDefault()
    setShoppingItems([...shoppingItems,{name:item,id:crypto.randomUUID()}])
    setItem("")
  }
  
  return (
    <div className="new-list-item-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-list-form-input">
          New item:
        </label>
        
        <div className="row">
          <input
            required={true}
            id="new-list-form-input"
            type="text"
            value={item}
            onChange={e=>setItem(e.target.value)}
          />
          <button>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewItemForm;