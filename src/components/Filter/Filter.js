import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Input } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Price from './FilterComponents/Price';
import Quality from './FilterComponents/Quality';
import Lock from './FilterComponents/Lock';
import Type from './FilterComponents/Type';
import Rarity from './FilterComponents/Rarity';
import style from './Filter.module.css'
import Float from './FilterComponents/Float';

export default function Filter() {
  const [openPrice, setOpenPrice] = useState(false);
  const [openLock, setOpenLock] = useState(false);
  const [openQuality, setOpenQuality] = useState(false);
  const [openFloat, setOpenFloat] = useState(false);
  const [openRarity, setOpenRarity] = useState(false);
  const [openType, setOpenType] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.header}>Фільтр</div>
      <div className={style.body}>
        <Accordion expanded={openPrice} onChange={() => setOpenPrice(!openPrice)} sx={{ width: "100%" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} aria-controls="panel1a-content" id="panel1a-header" sx={{ backgroundColor: '#232527', color: 'white' }}>
            Ціна
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: '#232527' }}>
            <Price/>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={openLock} onChange={() => setOpenLock(!openLock)} sx={{ width: "100%" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} aria-controls="panel2a-content" id="panel2a-header" sx={{ backgroundColor: '#232527', color: 'white' }}>
            Трейд лок
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: '#232527' }}>
            <Lock/>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={openQuality} onChange={() => setOpenQuality(!openQuality)} sx={{ width: "100%" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} aria-controls="panel3a-content" id="panel3a-header" sx={{ backgroundColor: '#232527', color: 'white' }}>
            Зовнішній вигляд
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: '#232527' }}>
            <Quality/>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={openFloat} onChange={() => setOpenFloat(!openFloat)} sx={{ width: "100%" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} aria-controls="panel4a-content" id="panel4a-header" sx={{ backgroundColor: '#232527', color: 'white' }}>
            Флот
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: '#232527' }}>
            <Float/>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={openRarity} onChange={() => setOpenRarity(!openRarity)} sx={{ width: "100%" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} aria-controls="panel5a-content" id="panel5a-header" sx={{ backgroundColor: '#232527', color: 'white' }}>
            Категорія предметів
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: '#232527' }}>
            <Type/>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={openType} onChange={() => setOpenType(!openType)} sx={{ width: "100%" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} aria-controls="panel5a-content" id="panel5a-header" sx={{ backgroundColor: '#232527', color: 'white' }}>
            Якість
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: '#232527' }}>
            <Rarity/>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
