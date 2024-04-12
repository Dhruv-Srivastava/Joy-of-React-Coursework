// Acceptance Criteria:

// The shown list of items should be driven from React state. We can remove the placeholder foods, and start with an empty list
// Submitting the form should add a new item to the list, and show it in the UI
// When submitting the form, the text input should be reset, so that it's empty. This way, users can easily add multiple items without having to erase their previous entry.
// There should be no “key” warnings in the console. Ideally, you shouldn't use the index for the key.

import React from 'react';

import AddNewItemForm from './AddNewItemForm';

function App() {
  const [shoppingItems, setShoppingItems] = React.useState([]);
  return (
    <div className="wrapper">
      <div className="list-wrapper">
        <ol className="shopping-list">
          {
            shoppingItems.map(item=><li key={item.id}>{item.name}</li>)
          }
        </ol>
      </div>
      <AddNewItemForm
        shoppingItems={shoppingItems}
        setShoppingItems={setShoppingItems}
      />
    </div>
  );
}

export default App;