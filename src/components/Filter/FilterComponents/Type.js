import React, { useEffect, useState } from 'react'
import style from './FilterComponent.module.css'
import { List, ListItemButton, ListItemText, Checkbox, ListItem, ListItemIcon } from '@mui/material'
import { grey  } from '@mui/material/colors';
import { useItemContext } from '../../Context/ItemsContext';

export default function Type() {

  const itemContext = useItemContext()

  const items = [
    { id: 1, text: "Всі" },
    { id: 2, text: "Ножі" },
    { id: 3, text: "Гвинтівки" },
    { id: 4, text: "Снайперські рушниці" },
    { id: 5, text: "Пістолети" },
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
      2: "Knife",
      3: "Rifle", 
      4: "Sniper", 
      5: "Pistol"
    };
    return checked.map(id => rarityMapping[id]).filter(rarity => rarity);
  }

  useEffect(() => {
    const types = getSelection()
    itemContext.setTypes(types)
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
