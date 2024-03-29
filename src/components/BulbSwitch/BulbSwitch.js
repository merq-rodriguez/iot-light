import React, { useCallback, useState } from 'react'
import { changeStateLight } from '../../api';
import './BulbSwitch.css';

export const BulbSwitch = () => {
  const [turnOn, setTurnOn] = useState(false);

  const onSwitchLight = useCallback(async (status) => {
    const result = await changeStateLight(status || !turnOn)
      .catch(err => console.error(err));
    console.log(result)
    if(result.data && result.data.status == 'On')
      setTurnOn(true);
    else if(result.data && result.data.status == 'Off')
      setTurnOn(false);
  });

  return (
    <main>
	    <input className="l" type="checkbox" checked={turnOn} onChange={() => onSwitchLight()} />
    </main>
  );
}
