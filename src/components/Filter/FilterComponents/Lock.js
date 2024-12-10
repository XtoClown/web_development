import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import style from './FilterComponent.module.css'
import { useItemContext } from '../../Context/ItemsContext';

export default function Lock() {

  const itemContext = useItemContext()

  const [sliderValue, setsSliderValue] = React.useState([0, 7]);

  function valuetext(value) {
    return `${value}`;
  }
  
  const minDistance = 1;

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
        const newMin = Math.min(newValue[0], sliderValue[1] - minDistance)
        setsSliderValue([Math.min(newValue[0], sliderValue[1] - minDistance), sliderValue[1]]);
        itemContext.setMinLock(newMin)
    } else {
        const newMax = Math.max(newValue[1], sliderValue[0] + minDistance)
        setsSliderValue([sliderValue[0], Math.max(newValue[1], sliderValue[0] + minDistance)]);
        itemContext.setMaxLock(newMax)
    }
  };

  const points = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' }
  ];

  return (
    <div className={style.slider}>
        <Box sx={{ height: "50%", width: "80%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Slider
                value={sliderValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={7}
                valueLabelFormat={(value) => `${value}`}
                disableSwap
                marks={points}
                sx={{ color: 'white', '& .MuiSlider-markLabel': { color: 'white' } }}
            />
        </Box>
    </div>
  );
}
