import React from 'react';
import { render } from 'react-dom';
import ToggleGroup from './ToggleGroup.jsx'; //@react-geo@
import ToggleButton from '../ToggleButton/ToggleButton.jsx'; //@react-geo@

render(
  <div>
    <div className="example-block">
      <span>Just a ToggleGroup:</span>

      <ToggleGroup
        allowDeselect={true}
        selectedName="one"
      >
        <ToggleButton
          name="one"
          icon="frown-o"
          pressedIcon="smile-o"
        />
        <ToggleButton
          name="two"
          icon="smile-o"
          pressedIcon="frown-o"
        />
      </ToggleGroup>

    </div>

  </div>,
  document.getElementById('exampleContainer')
);
