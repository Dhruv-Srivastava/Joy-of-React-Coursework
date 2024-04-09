// Use the COUNTRIES constant to dynamically generate the set of <option> elements.

//     In order to map over an object, you'll need to use something like Object.keys() or Object.entries()

// There should be a "blank" option, selected by default. It shouldn't default to the first country in the list.
// The indicator at the bottom should update when the user changes their selected country.
// No warnings in the dev console

import React from 'react';

import { COUNTRIES } from './data';

/*
  “COUNTRIES” is a dictionary-like object
  with the following shape:

  {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
  }
*/

function App() {
  const [country, setCountry] = React.useState('');
  console.log(country);

  return (
    <form>
      <fieldset>
        <legend>Shipping Info</legend>
        <label htmlFor="country">Country:</label>
        <select
          required={true}
          id="country"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {/* TODO: Options here! */}
          <option value="">--Select Country--</option>
          <optgroup label="Countries">
            {Object.keys(COUNTRIES).map((countryCode) => (
              <option key={countryCode} value={countryCode}>
                {COUNTRIES[countryCode]}
              </option>
            ))}
          </optgroup>
        </select>
      </fieldset>

      <p className="country-display">Selected country: {COUNTRIES[country]}</p>

      <button>Submit</button>
    </form>
  );
}

export default App;