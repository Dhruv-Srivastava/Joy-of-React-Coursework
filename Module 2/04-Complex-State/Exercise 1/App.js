// Acceptance Criteria:

// The color inputs should work; picking a new color should update the gradient accordingly.
// Clicking “Add color” should add a new color, at the end of the array.
// Clicking "Remove color" should remove the last color in the array.
// When adding new colors, they should default to #FF0000 (bright red).
// There should always be between 2 and 5 colors. No more, no less.

// Stretch goal: When the user removes and then re-adds a color, it should be restored to the previously-set value, rather than being reset to #FF0000.


import React from 'react';
function App() {
  const [colors, setColors] = React.useState(['#FFD500', '#FF0040',"#FF0000","#FF0000","#FF0000"]);
  const [visibleColorsCount,setVisibleColorsCount] = React.useState(2)

  const colorStops = colors.slice(0,visibleColorsCount).join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  function handleRemoveColor() {
    if (visibleColorsCount === 2) return;

    setVisibleColorsCount(visibleColorsCount-1)
    
  }
  function handleAddColor() {
    if (visibleColorsCount === 5) return;
    
    setVisibleColorsCount(visibleColorsCount+1)
  }

  

  return (
    <div className="wrapper">
      <div className="actions">
        <button
          title={
            visibleColorsCount === 2
              ? "Sorry, can't remove any color below 2"
              : 'Remove the last color'
          }
          onClick={handleRemoveColor}
        >
          Remove color
        </button>
        <button
          title={
            visibleColorsCount === 5
              ? "Sorry, can't add any color above 5"
              : 'Add color to the last'
          }
          onClick={handleAddColor}
        >
          Add color
        </button>
      </div>

      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />

      <div className="colors">
        {colors.slice(0,visibleColorsCount).map((color, index) => {
          console.log("Hey!")
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>Color {index + 1}:</label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  value={color}
                  onChange={(e) => {
                    const nextColors = colors.slice();
                    nextColors[index] = e.target.value;
                    setColors(nextColors);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;