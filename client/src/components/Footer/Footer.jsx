import React from 'react'
import useStyles from './styles';

function Footer() {

   const classes = useStyles();

  return (
    <div className={classes.foot}>
        <p style={{position:"relative", color:"#DDE6ED",marginTop:"60px"}}>© 2023 Memories by Shubhodaya.</p>
    </div>
  )
}

export default Footer