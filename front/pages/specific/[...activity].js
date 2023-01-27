import * as React from 'react';
import { useScript } from "../hook";
import { useEffect } from "react";

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <div>
    <div className='foot'>
      <div className='kakao'>공유</div>
      <div className='reserve'>신청하기</div>
    </div>
    </div>
  );
}
