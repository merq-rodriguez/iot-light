import React, { useCallback, useState } from "react";
import { changeStateLight } from '../../api';
import "./LightBulbToggle.css";


export const LightBulbToggle = () => {
  const [turnOn, setTurnOn] = useState(false);

  const onSwitchLight = useCallback(async (status) => {
    const result = await changeStateLight(status || !turnOn)
      .catch(err => console.error(err));
    console.log(result)
    if(result.data && result.data.status === 'On')
      setTurnOn(true);
    else if(result.data && result.data.status === 'Off')
      setTurnOn(false);
  });


  return (
    <div class="switch">
      <input type="checkbox" name="toggle" checked={turnOn} onChange={() => onSwitchLight()}/>
      <label for="toggle">
        <i class="bulb">
          <span class="bulb-center"></span>
          <span class="filament-1"></span>
          <span class="filament-2"></span>
          <span class="reflections">
            <span></span>
          </span>
          <span class="sparks">
            <i class="spark1"></i>
            <i class="spark2"></i>
            <i class="spark3"></i>
            <i class="spark4"></i>
          </span>
        </i>
      </label>
    </div>
  );
};
