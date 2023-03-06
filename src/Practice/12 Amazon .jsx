import React, { Component } from 'react';
import sdata from './09 cardprops ';
import Card from './08 cardprops ';

class Amazon  extends Component {
    render() {
        return (
            <>
                
            <Card  key = {sdata.id}                           
            image01={sdata[2].image01}
            cardtitle={sdata[2].cardtitle}
            slink={sdata[2].slink}
            name = { sdata[2].name }
            />  
            </>
        );
    }
}

export default Amazon ;