import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="홈" icon={<HomeIcon/>} />
        <BottomNavigationAction label="모아보기" icon={<GridViewIcon />} />
        <BottomNavigationAction label="내 정보" icon={<PermIdentityIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default SimpleBottomNavigation;