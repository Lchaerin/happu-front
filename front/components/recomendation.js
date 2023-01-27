import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import ClearIcon from '@mui/icons-material/Clear';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { CookiesProvider,useCookies } from 'react-cookie';
const drawerBleeding = 56;

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };

  export default function SimpleDialog(props) {
    const [cookies, setCookies] = useCookies(['id']);
    const[learning,setLearning]=React.useState(0);
    const[travel,setTravel]=React.useState(0);
    const[art,setArt]=React.useState(0);
    const[sports,setSports]=React.useState(0);
    const[foods,setFoods]=React.useState(0);
    const[walk,setWalk]=React.useState(0);
    const[chronic,setChronic]=React.useState(0);
    const[breathe,setBreathe]=React.useState(0);
    const[surprised,setSurprised]=React.useState(0);
    const[people,setPeople]=React.useState(0);
    const[diet,setDiet]=React.useState(0);
    const[fin,setFin]=React.useState(0);
    const [chan, setChan] = React.useState(false);
  const { onClose, selectedValue, open } = props;
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleListItemClick = (value) => {
    onClose(value);
  };
  const toggleDrawer = (newOpen) => () => {
    setOpen2(newOpen);
  };
  const toggleDrawer2 = (newOpen) => () => {
    setOpen3(newOpen);
  };
  React.useEffect(function () {
    fetch("http://localhost:8080/activity/preference", {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({login_id: cookies.id}),
              }).then(async (response) => {
                const data = await response.json()
                setLearning(data.learn)
                setTravel(data.travel)
                setArt(data.art)
                setSports(data.sports)
                setFoods(data.foods)
                setWalk(data.walk)
                setChronic(data.chronic)
                setBreathe(data.breathe)
                setSurprised(data.surprised)
                setPeople(data.people)
                setDiet(data.diet)
                setFin(1)
                console.log(diet)
              })
  }, [chan])
  return (
    <div>
        <SwipeableDrawer
        anchor="bottom"
        open={open2}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div className='boarding'>
            <div style={{paddingTop:"40px"}}>
            <div className='graynum'>
                1/2
            </div>
            <div className='plzslect'>{cookies.name}님,<br/><b style={{color:"#FF31DE"}}>좋아하는 활동</b>을 골라주세요</div>
            <div className='bubblelist'>
            <div
        key="0"
        onClick={
        function(){
            fetch("http://localhost:8080/alter/changing", {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({id:cookies.id, column : "learn" }),
              }).then(async (res) => {
                const data = await res.json()
                setLearning(data["learn"])
                setChan(!chan)
              })

            learning?setLearning(0):setLearning(1)
        }}
        className={'likebox-'+(learning?"yes":"no")}
        >
            새로운 걸 배우기
        </div>
        <div
        key="1"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "travel" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setTravel(data["travel"])
                    setChan(!chan)
                  })
    
                travel?setTravel(0):setTravel(1)
            }}
        className={'likebox-'+(travel?"yes":"no")}
        >여행하기
        </div>
        <div
        key="2"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "art" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setArt(data["art"])
                    setChan(!chan)
                  })
    
                art?setArt(0):setArt(1)
            }}
        className={'likebox-'+(art?"yes":"no")}
        >예술 감상하기
        </div>
        <div
        key="3"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "sports" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setSports(data["sports"])
                    setChan(!chan)
                  })
    
                sports?setSports(0):setSports(1)
            }}
        className={'likebox-'+(sports?"yes":"no")}
        >운동하기
        </div>
        <div
        key="4"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "foods" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setFoods(data["foods"])
                    setChan(!chan)
                  })
    
                foods?setFoods(0):setFoods(1)
            }}
        className={'likebox-'+(foods?"yes":"no")}
        >맛있는 음식 먹기
        </div>
            </div>
            <div className='next' onClick={toggleDrawer2(true)}>다음</div>
            </div>
        </div>
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor="bottom"
        open={open3}
        onClose={toggleDrawer2(false)}
        onOpen={toggleDrawer2(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div className='boarding'>
            <div style={{paddingTop:"40px"}}>
            <div className='graynum'>
                2/2
            </div>
            <div className='plzslect'>{cookies.name}님,<br/><b style={{color:"#FF31DE"}}>해당사항</b>을 골라주세요</div>
            <div className='bubblelist'>
            <div
        key="5"
        onClick={
        function(){
            fetch("http://localhost:8080/alter/changing", {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({id:cookies.id, column : "walk" }),
              }).then(async (res) => {
                const data = await res.json()
                setWalk(data["walk"])
                setChan(!chan)
              })

            walk?setWalk(0):setWalk(1)
        }}
        className={'likebox-'+(walk?"yes":"no")}
        >
            걷기 힘들어요
        </div>
        <div
        key="6"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "chronic" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setChronic(data["chronic"])
                    setChan(!chan)
                  })
    
                chronic?setChronic(0):setChronic(1)
            }}
        className={'likebox-'+(chronic?"yes":"no")}
        >만성질환이 있어요
        </div>
        <div
        key="7"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "diet" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setDiet(data["diet"])
                    setChan(!chan)
                  })
    
                diet?setDiet(0):setDiet(1)
            }}
        className={'likebox-'+(diet?"yes":"no")}
        >식이조절이 필요해요
        </div>
        <div
        key="8"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "breathe" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setBreathe(data["breathe"])
                    setChan(!chan)
                  })
    
                breathe?setBreathe(0):setBreathe(1)
            }}
        className={'likebox-'+(breathe?"yes":"no")}
        >숨이 금방 차요
        </div>
        <div
        key="9"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "surprised" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setSurprised(data["surprised"])
                    setChan(!chan)
                  })
    
                surprised?setSurprised(0):setSurprised(1)
            }}
        className={'likebox-'+(surprised?"yes":"no")}
        >놀라면 안돼요
        </div>
        <div
        key="10"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "people" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setPeople(data["people"])
                    setChan(!chan)
                  })
    
                people?setPeople(0):setPeople(1)
            }}
        className={'likebox-'+(people?"yes":"no")}
        >새로운 사람과의 만남은 부담스러워요
        </div>
            </div>
            <div className='pre_next'>
            <div className='pre' onClick={toggleDrawer2(false)}>이전</div>
            <div style={{width:"10px"}}></div>
            <div className='next2' onClick={()=>{
                setOpen2(false)
                setOpen3(false)
            }}>확인</div>
            </div>
            </div>
        </div>
      </SwipeableDrawer>
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        <div className='wouldDialog'>
        <div style={{position:"absolute",right:"15px"}} onClick={handleListItemClick}><ClearIcon/></div>
        <div className='wouldyou'>
            <b>{cookies.name}</b>님 맞춤으로
            <br/>
             추천 받으시겠어요?
        </div>
        <div style={{width:"75vw", height:"35vw", backgroundColor:"#D9D9D9", marginTop:"20px", marginBottom:"20px"}}></div>
        <div className='wouldno'><div>아니요</div></div>
        <div className='wouldyes'
        onClick={()=>{
            
                onClose(selectedValue);
                setOpen2(true)
        }}>네!</div>
        </div>
        </DialogTitle>
    </Dialog>
    </div>
  );
}
