import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import GraphData from './GraphData'

function MetrixChart(props) {

    const [leftNumber, setLeftNumber] = useState(0);
    const [topNumber, setTopNumber] = useState(0);

    useEffect(() => {
        
        var clayNumber = props.clay === null || props.clay === '' ? 0 : props.clay;
        var siltNumber = props.silt === null || props.silt === '' ? 0 : props.silt;
        var sandNumber = props.sand === null || props.sand === '' ? 0 : props.sand;

        if( (clayNumber + siltNumber + sandNumber) === 0 ) {
            return;
        }


        const claynum = 200 * (props.clay / 100)
        const siltnum = 100 * (props.silt / 100) 
        const sandnum = 100 * (props.sand / 100) 

        const newClay = 200 - claynum;
        const newSand = 100- sandnum;
        const siltsand = (newSand+siltnum) +77

        setTopNumber(newClay)
        setLeftNumber(siltsand)

    }, [props.sand, props.silt, props.clay]);

    return (
        <View>

            <GraphData
                topline={topNumber}
                leftline={leftNumber}


            />


        </View>
    )
}

export default MetrixChart