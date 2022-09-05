import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

export default function Modal({open, children, onClose, imgData}) {
  const classes = useStyles();
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: ''})
  var color = 'black';
  var canvas = null;

  useEffect(() => {
    if (open) {
      canvas = document.getElementById('sketchBoard');
      var container = document.getElementById('container');
      canvas.width = 256;
      canvas.height = 256;

      // get canvas 2D context and set him correct size
      var ctx = canvas.getContext('2d');
      ctx.canvas.width = canvas.width;
      ctx.canvas.height = canvas.height;
      var img = new Image;
      img.src = imgData;

      ctx.drawImage(img, 0, 0);



      // last known position
      var pos = { x: 0, y: 0 };

      ctx.lineWidth = 1;
      ctx.lineCap = 'round';

      canvas.addEventListener('mousedown', setPosition);
      canvas.addEventListener('mouseenter', setPosition);

      canvas.addEventListener('mousemove', draw);

      // new position from mouse event
      function setPosition(e) {
          var rect = canvas.getBoundingClientRect();
          pos.x = (e.clientX - canvas.offsetLeft) * (canvas.width / rect.width);
          pos.y = (e.clientY - (canvas.offsetTop + container.offsetTop) + container.scrollTop) * (canvas.height / rect.height);
      }

      function draw(e) {
          if (e.buttons !== 1) return;
          if (color == 'white') {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.lineWidth = 3;
          }
          else {
            ctx.globalCompositeOperation = 'source-over';
            ctx.lineWidth = 1;

          }

          ctx.strokeStyle = color;

          ctx.beginPath(); // begin

          ctx.moveTo(pos.x, pos.y); // from
          setPosition(e);
          ctx.lineTo(pos.x, pos.y); // to 

          ctx.stroke(); // draw
      }


  }

  }, [open])

  if (!open) return null

  function changeColor(c) {
    color = c;
  }

  function getImg() {
    if (canvas) {
      return canvas.toDataURL("image/png"); 

    }
    return null
  }

  function exitCanvas() {
    onClose(getImg());

  }


  return ReactDom.createPortal(
    <>
    <div className={classes.overlay}></div>
    <div className={classes.modal}>
      <div id="container" className={classes.container}>
        <canvas id="sketchBoard" className={classes.canvas}></canvas>
      </div>
      <div className={classes.toolBar}>
        <div className={classes.colorBar}>
          <button className={classes.circle + ' ' + classes.black} onClick={() => changeColor('black')}></button>
          <button className={classes.circle + ' ' + classes.white} onClick={() => changeColor('white')}></button>
          <button className={classes.circle + ' ' + classes.blue} onClick={() => changeColor('#42a5f5')}></button>
          <button className={classes.circle + ' ' + classes.red} onClick={() => changeColor('#ef5350')}></button>
          <button className={classes.circle + ' ' + classes.green} onClick={() => changeColor('#66bb6a')}></button>
          <button className={classes.circle + ' ' + classes.yellow} onClick={() => changeColor('#fdd835')}></button>
          <button className={classes.circle + ' ' + classes.orange} onClick={() => changeColor('#ff9800')}></button>
          <button className={classes.circle + ' ' + classes.purple} onClick={() => changeColor('#ba68c8')}></button>





        </div>
        <Button className={classes.exitButton} onClick={exitCanvas} variant="contained" color="secondary" size="small">Close Modal</Button>
      </div>
      {children}
    </div>
    </>,
    document.getElementById('portal')
  )
}
