import React, { useState, useEffect } from 'react'
import style from './FilterComponent.module.css'
import { List, ListItemButton, ListItemText, Checkbox, ListItem, ListItemIcon } from '@mui/material'
import { grey  } from '@mui/material/colors';
import { useItemContext } from '../../Context/ItemsContext';

export default function Quality() {

  const itemContext = useItemContext()

    const items = [
        { id: 1, text: "Всі" },
        { id: 2, text: "Щойно з фабрики" },
        { id: 3, text: "Майже без подряпин" },
        { id: 4, text: "Після бойових випробувань" },
        { id: 5, text: "Із численними подряпинами" },
        { id: 6, text: "Загартований у боях" }
    ]

    const [checked, setChecked] = useState([])

    function handleToggle(id) {
        setChecked((prevChecked) => {
          const currentIndex = prevChecked.indexOf(id);
          const newChecked = [...prevChecked];
    
          if (currentIndex === -1) {
            newChecked.push(id); 
          } else {
            newChecked.splice(currentIndex, 1); 
          }
    
          return newChecked;
        });
      }

      function getSelection(){
        const rarityMapping = {
          1: "All", 
          2: "FN",
          3: "MW", 
          4: "FT", 
          5: "WW", 
          6: "BS", 
        };
        return checked.map(id => rarityMapping[id]).filter(rarity => rarity);
      }
  
      useEffect(() => {
        const qualities = getSelection()
        itemContext.setQualities(qualities)
      }, [checked])

  return (
    <div className={style.quality}>
        <List>
            {items.map((item) => {
                const labelId = `checkbox-list-label-${item.id}`;
                return (
                <ListItem key={item.id} disablePadding>
                    <ListItemButton role={undefined} onClick={() => handleToggle(item.id)} dense>
                        <ListItemIcon>
                            <Checkbox edge="start" checked={checked.includes(item.id)} tabIndex={-1} disableRipple inputProps={{ 'aria-labelledby': labelId }} sx={{ color: 'white', borderColor: 'white','&.Mui-checked': {color: grey[50]} }}/>
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={item.text} sx={{ color: 'white' }}/>
                    </ListItemButton>
                </ListItem>
                )})}
        </List>
    </div>
  )
}
