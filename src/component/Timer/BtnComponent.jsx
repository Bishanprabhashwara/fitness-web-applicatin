import React from 'react';
import { Button } from '@mui/material';

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0)? 
        <Button className="stopwatch-btn stopwatch-btn-gre"
        onClick={props.start}>Start</Button> : ""
      }

      {(props.status === 1)? 
        <div>
          <Button className="stopwatch-btn stopwatch-btn-red"
                  onClick={props.stop}>Stop</Button>
          <Button className="stopwatch-btn stopwatch-btn-yel"
                  onClick={props.reset}>Reset</Button>
        </div> : ""
      }

     {(props.status === 2)? 
        <div>
          <Button className="stopwatch-btn stopwatch-btn-gre"
                  onClick={props.resume}>Resume</Button>
          <Button className="stopwatch-btn stopwatch-btn-yel"
                  onClick={props.reset}>Reset</Button>
        </div> : ""
      }
     
    </div>
  );
}

export default BtnComponent;