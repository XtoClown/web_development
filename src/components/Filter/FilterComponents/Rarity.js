import React, { useEffect, useState } from 'react'
import style from './FilterComponent.module.css'
import { List, ListItemButton, ListItemText, Checkbox, ListItem, ListItemIcon } from '@mui/material'
import { grey  } from '@mui/material/colors';
import { useItemContext } from '../../Context/ItemsContext';

export default function Rarity() {

  const itemContext = useItemContext()

  const items = [
    { id: 1, text: "Всі" },
    { id: 2, text: "Роздрібленого гатунку" },
    { id: 3, text: "Армійського гатунку" },
    { id: 4, text: "Промислового гатунку" },
    { id: 5, text: "Зброя спецслужб" },
    { id: 6, text: "Секретна зброя" },
    { id: 7, text: "Надсекретна зброя" },
    { id: 8, text: "Контрабанда" }
  ]

  const [checked, setChecked] = useState([])

  function handleToggle(id) {
    setChecked((prevChecked) => {
      const currentIndex = prevChecked.indexOf(id);
      const newChecked = [...prevChecked];

      if (currentIndex === -1) {
        newChecked.push(id); // Добавляем id в массив, если оно отсутствует
      } else {
        newChecked.splice(currentIndex, 1); // Удаляем id, если оно естьa
      }

      return newChecked; });
  }

    function getSelection(){
      const rarityMapping = {
        1: "All", 
        2: "Consumer Grade",
        3: "Mil-Spec", 
        4: "Industrial Grade", 
        5: "Restricted", 
        6: "Classified", 
        7: "Covert", 
        8: "Contraband"
      };
      return checked.map(id => rarityMapping[id]).filter(rarity => rarity);
    }

    useEffect(() => {
      const rarities = getSelection()
      itemContext.setRarities(rarities)
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
