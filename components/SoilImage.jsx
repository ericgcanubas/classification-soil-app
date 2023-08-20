import React, { useEffect, useState } from 'react'
import { View} from 'react-native';
import ClayLoam from './ClayLoam';
import ClaySoil from './ClaySoil';
import Loam from './Loam';
import LoamySand from './LoamySand';
import Sand from './Sand';
import SandyClayLoam from './SandyClayLoam';
import SandyClay from './SandyClay';
import SandyLoam from './SandyLoam';
import Silt from './Silt';
import SiltyClayLoam from './SiltyClayLoam';
import SiltyClay from './SiltyClay';
import SiltyLoam from './SiltyLoam';

function SoilImage(props) {
    const [soil, setSoil] = useState("");

    useEffect(() => {
        setSoil(props.data);
    }, [props.data]);

    return (
        <View>
            {soil === "LOAM" ? <Loam /> : null}
            {soil === "CLAY" ? <ClaySoil /> : null}
            {soil === "CLAY LOAM" ? <ClayLoam /> : null}
            {soil === "LOAMY SAND" ? <LoamySand /> : null}
            {soil === "SAND" ? <Sand /> : null}
            {soil === "SANDY CLAY LOAM" ? <SandyClayLoam /> : null}
            {soil === "SANDY CLAY" ? <SandyClay /> : null}
            {soil === "SANDY LOAM" ? <SandyLoam /> : null}
            {soil === "SILT" ? <Silt /> : null}
            {soil === "SILTY CLAY LOAM" ? <SiltyClayLoam /> : null}
            {soil === "SILTY CLAY" ? <SiltyClay /> : null}
            {soil === "SILT LOAM" ? <SiltyLoam /> : null}
        </View>



    )
}

export default SoilImage