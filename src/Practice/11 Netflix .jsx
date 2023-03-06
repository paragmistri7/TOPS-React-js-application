import React, { Component } from 'react';
import Card from './08 cardprops ';
import sdata from './09 cardprops ';

class Netflix  extends Component {
    render() {
        return (
            <>
                
            <Card  key = {sdata.id}                             
            image01={sdata[0].image01}
            cardtitle={sdata[0].cardtitle}
            slink={sdata[0].slink}
            name = { sdata[0].name }
            />
            </>
        );
    }
}

export default Netflix ;