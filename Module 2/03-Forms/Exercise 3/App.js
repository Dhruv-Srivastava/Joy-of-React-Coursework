// Acceptance Criteria:

// The range slider should be bound to the numOfLines state.
// The select control should be bound to the colorTheme state.
// The radio buttons should be bound to the shape state.
// The radio button labels should work correctly. The user should be able to click the text "Polygons" to select that option.

// The inputs should conform to HTML standards (eg. radio buttons should be grouped using the “name” attribute).

// Note: All of your changes should happen in App.js. The other files are shown in case you're curious how it works, but you can safely ignore them and focus exclusively on App.js.

import React from 'react';

import GenerativeArt from './GenerativeArt';

function App() {
  const [numOfLines, setNumOfLines] = React.useState(5);

  /*
    Accepted values:
      - basic
      - monochrome
      - froot-loops
      - spooky
  */
  const [colorTheme, setColorTheme] = React.useState('basic');

  /*
    Accepted values:
      - circles
      - polygons
  */
  const [shape, setShape] = React.useState('circles');

  return (
    <>
      <GenerativeArt
        numOfLines={numOfLines}
        colorTheme={colorTheme}
        shape={shape}
      />

      <form>
        <fieldset>
          <legend>Controls</legend>
          <div className="row">
            <div className="col">
              <label htmlFor="num-of-lines" className="control-heading">
                Number of Lines:
              </label>
              <input
                id="num-of-lines"
                type="range"
                min="1"
                max="15"
                value={numOfLines}
                onChange={(e) => setNumOfLines(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="control-heading" htmlFor="color-theme">
                Color Theme:
              </label>
              <select
                id="color-theme"
                value={colorTheme}
                onChange={(e) => setColorTheme(e.target.value)}
              >
                <option value="basic">Basic</option>
                <option value="monochrome">Monochrome</option>
                <option value="froot-loops">Froot Loops</option>
                <option value="spooky">Spooky Night</option>
              </select>
            </div>
            <div className="col">
              <div className="control-heading">Shape:</div>
              <div className="radio-wrapper">
                <div className="radio-option">
                  <input
                    type="radio"
                    id="circles"
                    name="shape"
                    value="circles"
                    checked={shape === 'circles'}
                    onChange={(e) => setShape(e.target.value)}
                  />
                  <label htmlFor="circles">Circles</label>
                </div>
                <div className="radio-option">
                  <input
                    id="polygons"
                    type="radio"
                    name="shape"
                    value="polygons"
                    checked={shape === 'polygons'}
                    onChange={(e) => setShape(e.target.value)}
                  />
                  <label htmlFor="polygons">Polygons</label>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;