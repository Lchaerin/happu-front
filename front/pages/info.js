import * as React from "react";
import { CookiesProvider,useCookies } from 'react-cookie';
import SimpleDialog from '../components/recomendation'
import TuneIcon from '@mui/icons-material/Tune';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

export default function Home() {
    const [name, setName] = React.useState("");
  const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
    };



  return (
    <div>
      <div style = {{height:"48px",display: "flex",flexWrap: "wrap", alignItems:"center"}}><a className = "categoryName"> Home </a>
      <div style={{position:"absolute", top:"12px", right:"20px",display: "flex",flexWrap: "wrap"}}><div><NotificationsNoneIcon/></div><div style={{width:"20px"}}></div><div onClick={handleClickOpen}><TuneIcon/></div></div></div>
      <div className="line"></div>
      <div>내 정보</div>
      <div className="icon-cont">
      <div className="icon">
        <div className="concon">
            <FavoriteBorderOutlinedIcon  fontSize="large"/></div>
            <div className="small-dis">찜</div>
        </div>
        <div className="icon">
        <div className="concon">
            <ArticleOutlinedIcon fontSize="large"/></div>
            <div className="small-dis">결제내역</div>
        </div>
        <div className="icon"><div className="concon">
            <LocalActivityOutlinedIcon fontSize="large"/></div>
            <div className="small-dis">쿠폰</div>
        </div>
        <div className="icon"><div  className="concon">
            <EditOutlinedIcon  fontSize="large"/></div>
            <div className="small-dis">후기</div>
        </div>
      </div>
      <div className="line" style={{height:"8px"}}></div>
      <SimpleDialog
          open={open}
          onClose={handleClose}
        />
    </div>
  )
}
