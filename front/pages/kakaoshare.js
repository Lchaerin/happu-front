import * as React from 'react';
import { useEffect } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(false);
  const ref = React.useRef(null);
  const handleLikes = () => {
    setValue(!value);
  };
  return (
    <div style={{backgroundColor : "lightgray", height:"100vh"}}>
    <div className='head'>
        <div style={{position:"fixed",left:"20px"}}><ArrowBackIcon/></div>
        <div style={{position:"fixed",right:"20px",display: "flex", flexWrap: "wrap"}}>
        <div onClick={handleLikes}>{value?<FavoriteIcon/>:<FavoriteBorderIcon/>}</div>
        <div style={{width:"10px"}}></div>
        <div><ShareIcon/></div></div>
        </div>
    <div className='foot'>
      <div className='kakao'>공유</div>
      <div style={{width:"20px"}}></div>
      <div className='reserve'>신청하기</div>
    </div>
    </div>
  );
}
