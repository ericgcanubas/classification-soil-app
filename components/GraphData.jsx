import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
function GraphData(props) {
    return (
        <View>
            <View style={styles.a1}>

            </View>
            <View style={styles.a1}>

            {/* top = clay left=slit or sand */}
            <View style={css.topsm} top={Number.parseInt(props.topline)} left={Number.parseInt(props.leftline)} ></View>

               
                {/* 100 */}
             
                <View style={styles.stext} left={150} ><Text style={styles.ftext} >100</Text></View>
                <View style={[styles.triangle, styles.clayColor]} left={175} />
                <View style={styles.stext} left={200}><Text style={styles.ftext} >0</Text></View>



            </View>
            <View style={styles.a1}>
              
                {/* 95 */}
                <View style={styles.stext} left={145}><Text style={styles.ftext} ></Text></View>
                <View style={[styles.triangle, styles.clayColor]} left={170} />
                <View style={[styles.triangleDown, styles.clayColor]} left={175} />
                <View style={[styles.triangle, styles.clayColor]} left={180} />
                <View style={styles.stext} left={205}><Text style={styles.ftext} ></Text></View>
            </View>

            <View style={styles.a1}>
         
                {/* 90 */}
                <View style={styles.stext} left={140}><Text style={styles.ftext} >90</Text></View>
                <View style={[styles.triangle, styles.clayColor]} left={165} />
                <View style={[styles.triangleDown, styles.clayColor]} left={170} />
                <View style={[styles.triangle, styles.clayColor]} left={175} />
                <View style={[styles.triangleDown, styles.clayColor]} left={180} />
                <View style={[styles.triangle, styles.clayColor]} left={185} />
                <View style={styles.stext} left={210}><Text style={styles.ftext} >10</Text></View>
            </View>

            <View style={styles.a1}>
              
                {/* 85 */}
                <View style={styles.stext} left={135}><Text style={styles.ftext} ></Text></View>
                <View style={[styles.triangle, styles.clayColor]} left={160} />
                <View style={[styles.triangleDown, styles.clayColor]} left={165} />
                <View style={[styles.triangle, styles.clayColor]} left={170} />
                <View style={[styles.triangleDown, styles.clayColor]} left={175} />
                <View style={[styles.triangle, styles.clayColor]} left={180} />
                <View style={[styles.triangleDown, styles.clayColor]} left={185} />
                <View style={[styles.triangle, styles.clayColor]} left={190} />
                <View style={styles.stext} left={215}><Text style={styles.ftext} ></Text></View>
            </View>

            <View style={styles.a1}>
               
                {/* 80 */}
                <View style={styles.stext} left={130}><Text style={styles.ftext} >80</Text></View>
                <View style={[styles.triangle, styles.clayColor]} left={155} />
                <View style={[styles.triangleDown, styles.clayColor]} left={160} />
                <View style={[styles.triangle, styles.clayColor]} left={165} />
                <View style={[styles.triangleDown, styles.clayColor]} left={170} />
                <View style={[styles.triangle, styles.clayColor]} left={175} />
                <View style={[styles.triangleDown, styles.clayColor]} left={180} />
                <View style={[styles.triangle, styles.clayColor]} left={185} />
                <View style={[styles.triangleDown, styles.clayColor]} left={190} />
                <View style={[styles.triangle, styles.clayColor]} left={195} />
                <View style={styles.stext} left={220}><Text style={styles.ftext} >20</Text></View>
            </View>

            <View style={styles.a1}>
             
                {/* 75 */}
                <View style={styles.stext} left={125}><Text style={styles.ftext} ></Text></View>
                <View style={[styles.triangle, styles.clayColor]} left={150} />
                <View style={[styles.triangleDown, styles.clayColor]} left={155} />
                <View style={[styles.triangle, styles.clayColor]} left={160} />
                <View style={[styles.triangleDown, styles.clayColor]} left={165} />
                <View style={[styles.triangle, styles.clayColor]} left={170} />
                <View style={[styles.triangleDown, styles.clayColor]} left={175} />
                <View style={[styles.triangle, styles.clayColor]} left={180} />
                <View style={[styles.triangleDown, styles.clayColor]} left={185} />
                <View style={[styles.triangle, styles.clayColor]} left={190} />
                <View style={[styles.triangleDown, styles.clayColor]} left={195} />
                <View style={[styles.triangle, styles.clayColor]} left={200} />
                <View style={styles.stext} left={225}><Text style={styles.ftext} ></Text></View>
            </View>

            <View style={styles.a1}>
               
                {/* 70 */}

                <View style={styles.stext} left={120}><Text style={styles.ftext} >70</Text></View>
                <View style={styles.stext} zIndex={5} left={170} ><Text style={styles.ftext} >Clay</Text></View>
                <View style={[styles.triangle, styles.clayColor]} left={145} />
                <View style={[styles.triangleDown, styles.clayColor]} left={150} />
                <View style={[styles.triangle, styles.clayColor]} left={155} />
                <View style={[styles.triangleDown, styles.clayColor]} left={160} />
                <View style={[styles.triangle, styles.clayColor]} left={165} />
                <View style={[styles.triangleDown, styles.clayColor]} left={170} />
                <View style={[styles.triangle, styles.clayColor]} left={175} />
                <View style={[styles.triangleDown, styles.clayColor]} left={180} />
                <View style={[styles.triangle, styles.clayColor]} left={185} />
                <View style={[styles.triangleDown, styles.clayColor]} left={190} />
                <View style={[styles.triangle, styles.clayColor]} left={195} />
                <View style={[styles.triangleDown, styles.clayColor]} left={200} />
                <View style={[styles.triangle, styles.clayColor]} left={205} />
                <View style={styles.stext} left={230}><Text style={styles.ftext} >30</Text></View>
            </View>

            <View style={styles.a1}>
      
                {/* 65 */}
                <View style={styles.stext} left={115}><Text style={styles.ftext} ></Text></View>
                <View style={[styles.triangle, styles.clayColor]} left={140} />
                <View style={[styles.triangleDown, styles.clayColor]} left={145} />
                <View style={[styles.triangle, styles.clayColor]} left={150} />
                <View style={[styles.triangleDown, styles.clayColor]} left={155} />
                <View style={[styles.triangle, styles.clayColor]} left={160} />
                <View style={[styles.triangleDown, styles.clayColor]} left={165} />
                <View style={[styles.triangle, styles.clayColor]} left={170} />
                <View style={[styles.triangleDown, styles.clayColor]} left={175}/>
                <View style={[styles.triangle, styles.clayColor]} left={180} />
                <View style={[styles.triangleDown, styles.clayColor]} left={185} />
                <View style={[styles.triangle, styles.clayColor]} left={190} />
                <View style={[styles.triangleDown, styles.clayColor]} left={195} />
                <View style={[styles.triangle, styles.clayColor]} left={200} />
                <View style={[styles.triangleDown, styles.clayColor]} left={205} />
                <View style={[styles.triangle, styles.clayColor]} left={210} />
                <View style={styles.stext} left={235}><Text style={styles.ftext} ></Text></View>
            </View>

            <View style={styles.a1}>
   
                {/* 60 */}
                <View style={styles.stext} left={110}><Text style={styles.ftext} >60</Text></View>
                <View style={[styles.triangle, styles.clayColor]} left={135} />
                <View style={[styles.triangleDown, styles.clayColor]} left={140} />
                <View style={[styles.triangle, styles.clayColor]} left={145} />
                <View style={[styles.triangleDown, styles.clayColor]} left={150} />
                <View style={[styles.triangle, styles.clayColor]} left={155} />
                <View style={[styles.triangleDown, , styles.clayColor]} left={160} />
                <View style={[styles.triangle, styles.clayColor]} left={165} />
                <View style={[styles.triangleDown, , styles.clayColor]} left={170} />
                <View style={[styles.triangle, styles.clayColor]} left={175} />
                <View style={[styles.triangleDown, styles.clayColor]} left={180} />
                <View style={[styles.triangle, styles.clayColor]} left={185} />
                <View style={[styles.triangleDown, styles.clayColor]} left={190} />
                <View style={[styles.triangle, styles.clayColor]} left={195} />
                <View style={[styles.triangleDown, styles.clayColor]} left={200} />
                <View style={[styles.triangle, styles.clayColor]} left={205} />
                <View style={[styles.triangleDown, styles.clayColor]} left={210} />
                <View style={[styles.triangle, styles.siltyClayColor]} left={215} />
                <View style={styles.stext} left={240}><Text style={styles.ftext} >40</Text></View>
            </View>

            <View style={styles.a1}>
          
                {/* 55 */}
                <View style={styles.stext} left={105}><Text style={styles.ftext} ></Text></View>
                <View style={[styles.triangle, styles.sandyClayColor ]} left={130} />
                <View style={[styles.triangleDown, styles.clayColor]} left={135} />
                <View style={[styles.triangle, styles.clayColor]} left={140} />
                <View style={[styles.triangleDown, styles.clayColor]} left={145} />
                <View style={[styles.triangle, styles.clayColor]} left={150} />
                <View style={[styles.triangleDown, styles.clayColor]} left={155} />
                <View style={[styles.triangle, styles.clayColor]} left={160} />
                <View style={[styles.triangleDown, styles.clayColor]} left={165} />
                <View style={[styles.triangle, styles.clayColor]} left={170} />
                <View style={[styles.triangleDown, styles.clayColor]} left={175}/>
                <View style={[styles.triangle, styles.clayColor]} left={180} />
                <View style={[styles.triangleDown, styles.clayColor]} left={185} />
                <View style={[styles.triangle, styles.clayColor]} left={190} />
                <View style={[styles.triangleDown, styles.clayColor]} left={195} />
                <View style={[styles.triangle, styles.clayColor]} left={200} />
                <View style={[styles.triangleDown, styles.clayColor]} left={205} />
                <View style={[styles.triangle, styles.siltyClayColor]} left={210} />
                <View style={[styles.triangleDown, styles.siltyClayColor]} left={215} />
                <View style={[styles.triangle, styles.siltyClayColor]} left={220} />
                <View style={styles.stext} left={245}><Text style={styles.ftext} ></Text></View>
            </View>

            <View style={styles.a1}>

                {/* 50 */}
                <View style={styles.stext} left={100}><Text style={styles.ftext} >50</Text></View>
                <View style={[styles.triangle, styles.sandyClayColor ]} left={125} />
                <View style={[styles.triangleDown,styles.sandyClayColor ]} left={130} />
                <View style={[styles.triangle,styles.sandyClayColor ]} left={135} />
                <View style={[styles.triangleDown,styles.clayColor]} left={140} />
                <View style={[styles.triangle, styles.clayColor]} left={145} />
                <View style={[styles.triangleDown, styles.clayColor]} left={150} />
                <View style={[styles.triangle, styles.clayColor]} left={155} />
                <View style={[styles.triangleDown, styles.clayColor]} left={160} />
                <View style={[styles.triangle, styles.clayColor]} left={165} />
                <View style={[styles.triangleDown, styles.clayColor]} left={170} />
                <View style={[styles.triangle, styles.clayColor]} left={175}/>
                <View style={[styles.triangleDown, styles.clayColor]} left={180} />
                <View style={[styles.triangle, styles.clayColor]} left={185} />
                <View style={[styles.triangleDown, styles.clayColor]} left={190} />
                <View style={[styles.triangle, styles.clayColor]} left={195} />
                <View style={[styles.triangleDown, styles.clayColor]} left={200} />
                <View style={[styles.triangle, styles.siltyClayColor]} left={205} />
                <View style={[styles.triangleDown, styles.siltyClayColor]} left={210} />
                <View style={[styles.triangle,styles.siltyClayColor]} left={215} />
                <View style={[styles.triangleDown,styles.siltyClayColor]} left={220} />
                <View style={[styles.triangle,styles.siltyClayColor]} left={225} />
                <View style={styles.stext} left={250}><Text style={styles.ftext} >50</Text></View>
            </View>

            <View style={styles.a1}>
     
                {/* 45 */}
                <View style={styles.stext} left={95}><Text style={styles.ftext} ></Text></View>
                <View style={[styles.triangle,styles.sandyClayColor ]} left={120} />
                <View style={[styles.triangleDown,styles.sandyClayColor ]} left={125} />
                <View style={[styles.triangle,styles.sandyClayColor ]} left={130} />
                <View style={[styles.triangleDown,styles.sandyClayColor ]} left={135} />
                <View style={[styles.triangle, styles.sandyClayColor]} left={140} />
                <View style={[styles.triangleDown, styles.clayColor]} left={145} />
                <View style={[styles.triangle, styles.clayColor]} left={150} />
                <View style={[styles.triangleDown, styles.clayColor]} left={155} />
                <View style={[styles.triangle, styles.clayColor]} left={160} />
                <View style={[styles.triangleDown, styles.clayColor]} left={165} />
                <View style={[styles.triangle, styles.clayColor]} left={170} />
                <View style={[styles.triangleDown, styles.clayColor]} left={175}/>
                <View style={[styles.triangle, styles.clayColor]} left={180} />
                <View style={[styles.triangleDown, styles.clayColor]} left={185} />
                <View style={[styles.triangle, styles.clayColor]} left={190} />
                <View style={[styles.triangleDown, styles.clayColor]} left={195} />
                <View style={[styles.triangle, styles.siltyClayColor]} left={200} />
                <View style={[styles.triangleDown, styles.siltyClayColor]} left={205} />
                <View style={[styles.triangle,styles.siltyClayColor]} left={210} />
                <View style={[styles.triangleDown,styles.siltyClayColor]} left={215} />
                <View style={[styles.triangle,styles.siltyClayColor]} left={220} />
                <View style={[styles.triangleDown,styles.siltyClayColor]} left={225} />
                <View style={[styles.triangle,styles.siltyClayColor]} left={230} />
                <View style={styles.stext} zIndex={5} left={212} top={-5} ><Text style={styles.ftext} >Silty{'\n'}Clay</Text></View>
                <View style={styles.stext} left={255}><Text style={styles.ftext} ></Text></View>
            </View>

            <View style={styles.a1}>
  
                {/* 40 */}
                <View style={styles.stext} zIndex={5} left={120} top={-5} ><Text style={styles.ftext} >Sandy {'\n'}Clay</Text></View>
                <View style={styles.stext} left={90}><Text style={styles.ftext} >40</Text></View>
                <View style={[styles.triangle,styles.sandyClayColor ]} left={115} />
                <View style={[styles.triangleDown,styles.sandyClayColor ]} left={120} />
                <View style={[styles.triangle,styles.sandyClayColor ]} left={125} />
                <View style={[styles.triangleDown, styles.sandyClayColor]} left={130} />
                <View style={[styles.triangle,styles.sandyClayColor ]} left={135} />
                <View style={[styles.triangleDown,styles.sandyClayColor ]} left={140} />
                <View style={[styles.triangle, styles.sandyClayColor]} left={145} />
                <View style={[styles.triangleDown, styles.clayLoamColor]} left={150} />
                <View style={[styles.triangle, styles.clayLoamColor]} left={155} />
                <View style={[styles.triangleDown, , styles.clayLoamColor]} left={160} />
                <View style={[styles.triangle, styles.clayLoamColor]} left={165} />
                <View style={[styles.triangleDown, , styles.clayLoamColor]} left={170} />
                <View style={[styles.triangle, styles.clayLoamColor]} left={175}/>
                <View style={[styles.triangleDown, styles.clayLoamColor]} left={180} />
                <View style={[styles.triangle, styles.clayLoamColor]} left={185} />
                <View style={[styles.triangleDown, , styles.clayLoamColor]} left={190} />
                <View style={[styles.triangle, , styles.clayLoamColor]} left={195} />
                <View style={[styles.triangleDown, styles.silyClayLoamColor]} left={200} />
                <View style={[styles.triangle,styles.silyClayLoamColor]} left={205} />
                <View style={[styles.triangleDown,styles.silyClayLoamColor]} left={210} />
                <View style={[styles.triangle,styles.silyClayLoamColor]} left={215} />
                <View style={[styles.triangleDown,styles.silyClayLoamColor]} left={220} />
                <View style={[styles.triangle,styles.silyClayLoamColor]} left={225} />
                <View style={[styles.triangleDown,styles.silyClayLoamColor]} left={230} />
                <View style={[styles.triangle,styles.silyClayLoamColor]} left={235} />
                <View style={styles.stext} left={260}><Text style={styles.ftext} >60</Text></View>
            </View>


            <View style={styles.a1}>
           
                {/* 35 */}
                <View style={styles.stext} left={85}><Text style={styles.ftext} ></Text></View>
                <View style={[styles.triangle,styles.sandyClayLoamColor  ]} left={110} />
                <View style={[styles.triangleDown, styles.sandyClayLoamColor ]} left={115} />
                <View style={[styles.triangle,styles.sandyClayLoamColor  ]} left={120} />
                <View style={[styles.triangleDown, styles.sandyClayLoamColor ]} left={125} />
                <View style={[styles.triangle,styles.sandyClayLoamColor  ]} left={130} />
                <View style={[styles.triangleDown,styles.sandyClayLoamColor  ]} left={135} />
                <View style={[styles.triangle, styles.sandyClayLoamColor ]} left={140} />
                <View style={[styles.triangleDown,styles.sandyClayLoamColor  ]} left={145} />
                <View style={[styles.triangle, styles.sandyClayLoamColor ]} left={150} />
                <View style={[styles.triangleDown,styles.clayLoamColor ]} left={155} />
                <View style={[styles.triangle,styles.clayLoamColor ]} left={160} />
                <View style={[styles.triangleDown,styles.clayLoamColor ]} left={165} />
                <View style={[styles.triangle,styles.clayLoamColor ]} left={170} />
                <View style={[styles.triangleDown, styles.clayLoamColor]} left={175}/>
                <View style={[styles.triangle, styles.clayLoamColor]} left={180} />
                <View style={[styles.triangleDown, styles.clayLoamColor]} left={185} />
                <View style={[styles.triangle,styles.clayLoamColor ]} left={190} />
                <View style={[styles.triangleDown,styles.clayLoamColor ]} left={195} />
                <View style={[styles.triangle,styles.clayLoamColor ]} left={200} />
                <View style={[styles.triangleDown, styles.silyClayLoamColor]} left={205} />
                <View style={[styles.triangle, styles.silyClayLoamColor]} left={210} />
                <View style={[styles.triangleDown,styles.silyClayLoamColor ]} left={215} />
                <View style={[styles.triangle,styles.silyClayLoamColor ]} left={220} />
                <View style={[styles.triangleDown,styles.silyClayLoamColor ]} left={225} />
                <View style={[styles.triangle,styles.silyClayLoamColor ]} left={230} />
                <View style={[styles.triangleDown,styles.silyClayLoamColor ]} left={235} />
                <View style={[styles.triangle, styles.silyClayLoamColor]} left={240} />
                <View style={styles.stext} left={265}><Text style={styles.ftext}></Text></View>
            </View>

            <View style={styles.a1}>
              
                {/* 30 */}
                <View style={styles.stext} left={80}><Text style={styles.ftext} >30</Text></View>
                <View style={styles.stext} zIndex={5} left={175} top={-10} ><Text style={styles.ftext} >Clay{'\n'}Loam</Text></View>
                <View style={[styles.triangle, styles.sandyClayLoamColor ]} left={105} />
                <View style={[styles.triangleDown,styles.sandyClayLoamColor  ]} left={110} />
                <View style={[styles.triangle, styles.sandyClayLoamColor ]} left={115} />
                <View style={[styles.triangleDown, styles.sandyClayLoamColor ]} left={120} />
                <View style={[styles.triangle, styles.sandyClayLoamColor ]} left={125} />
                <View style={[styles.triangleDown,styles.sandyClayLoamColor  ]} left={130} />
                <View style={[styles.triangle,styles.sandyClayLoamColor  ]} left={135} />
                <View style={[styles.triangleDown,styles.sandyClayLoamColor  ]} left={140} />
                <View style={[styles.triangle, styles.sandyClayLoamColor ]} left={145} />
                <View style={[styles.triangleDown,styles.sandyClayLoamColor  ]} left={150} />
                <View style={[styles.triangle, styles.loamColor]} left={155} />
                <View style={[styles.triangle10, styles.sandyClayLoamColor]} zIndex={30} left={157} />
                <View style={[styles.triangleDown,styles.loamColor ]} left={160} />
                <View style={[styles.triangle,styles.loamColor ]} left={165} />
                <View style={[styles.triangleDown, styles.loamColor]} left={170} />
                <View style={[styles.triangle, styles.loamColor]}  left={175}/>
                <View style={[styles.triangleDown, styles.loamColor]} left={180} />
                <View style={[styles.triangle,styles.loamColor ]} left={185} />
                <View style={[styles.triangleDown, styles.loamColor]} left={190} />
                <View style={[styles.triangle, styles.loamColor]} left={195} /> 
                <View style={[styles.triangleDown, styles.loamColor]} left={200} />
                <View style={[styles.triangle, styles.siltLoamColor]} left={205} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={210} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={215} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={220} />
                <View style={[styles.triangle, styles.siltLoamColor]} left={225} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={230} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={235} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={240} />
                <View style={[styles.triangle, styles.siltLoamColor]} left={245} />  
                
                  <View style={[styles.triangle10, styles.silyClayLoamColor]} left={247} />
                  <View style={[styles.triangleDown10, styles.silyClayLoamColor]} left={245} />
                  <View style={[styles.triangle10, styles.silyClayLoamColor]} left={243} />
                  <View style={[styles.triangleDown10, styles.silyClayLoamColor]} left={241} />
                  <View style={[styles.triangle10, styles.silyClayLoamColor]} left={239} />
                  <View style={[styles.triangleDown10, styles.silyClayLoamColor]} left={237} />
                  <View style={[styles.triangle10, styles.silyClayLoamColor]} left={235} />
                  <View style={[styles.triangleDown10, styles.silyClayLoamColor]} left={233} />
                  <View style={[styles.triangle10, styles.silyClayLoamColor]} left={231} />
                  <View style={[styles.triangleDown10, styles.silyClayLoamColor]} left={229} />
                  <View style={[styles.triangle10, styles.silyClayLoamColor]} left={227} />
                  <View style={[styles.triangleDown10, styles.silyClayLoamColor]} left={225} />
                  <View style={[styles.triangle10, styles.silyClayLoamColor]} left={223} />
                  <View style={[styles.triangleDown10, styles.silyClayLoamColor]} left={221} />
                  <View style={[styles.triangle10, styles.silyClayLoamColor]} left={219} />
                  <View style={[styles.triangleDown10, styles.silyClayLoamColor]} left={217} />
                  <View style={[styles.triangle10, styles.silyClayLoamColor]} left={215} />
                  <View style={[styles.triangleDown10, styles.silyClayLoamColor]} left={213} />
                  <View style={[styles.triangle10, styles.silyClayLoamColor]} left={211} />
                  <View style={[styles.triangleDown10, styles.silyClayLoamColor]} left={209} />
                  
                  <View style={[styles.triangle10, styles.clayLoamColor]} left={207} />
                  <View style={[styles.triangleDown10, styles.clayLoamColor]} left={205} />
                  <View style={[styles.triangle10, styles.clayLoamColor]} left={203} />
                  <View style={[styles.triangleDown10, styles.clayLoamColor]} left={201} />
                  <View style={[styles.triangle10, styles.clayLoamColor]} left={199} />
                  <View style={[styles.triangleDown10, styles.clayLoamColor]} left={197} />
                  <View style={[styles.triangle10, styles.clayLoamColor]} left={195} />
                  <View style={[styles.triangleDown10, styles.clayLoamColor]} left={193} />
                  <View style={[styles.triangle10, styles.clayLoamColor]} left={191} />
                  <View style={[styles.triangleDown10, styles.clayLoamColor]} left={189} />
                  <View style={[styles.triangle10, styles.clayLoamColor]} left={187} />
                  <View style={[styles.triangleDown10, styles.clayLoamColor]} left={185} />
                  <View style={[styles.triangle10, styles.clayLoamColor]} left={183} />
                  <View style={[styles.triangleDown10, styles.clayLoamColor]} left={181} />
                  <View style={[styles.triangle10, styles.clayLoamColor]} left={179} />
                  <View style={[styles.triangleDown10, styles.clayLoamColor]} left={177} />

                  <View style={[styles.triangle10, styles.clayLoamColor]} left={175} />
                  <View style={[styles.triangleDown10, styles.clayLoamColor]} left={173} />
                  <View style={[styles.triangle10, styles.clayLoamColor]} left={171} />
                  <View style={[styles.triangleDown10, styles.clayLoamColor]} left={169} />
                  <View style={[styles.triangle10, styles.clayLoamColor]} left={167} />
                  <View style={[styles.triangleDown10, styles.clayLoamColor]} left={165} />
                  <View style={[styles.triangle10, styles.clayLoamColor]} left={163} />
                  <View style={[styles.triangleDown10, styles.clayLoamColor]} left={161} />
             
            
            

             




                <View style={styles.stext} left={265}><Text style={styles.ftext} >70</Text></View>
                <View style={styles.stext} zIndex={5} left={210} top={-10} ><Text style={styles.ftext} >Silty Clay{'\n'}Loam</Text></View>
            </View>

            <View style={styles.a1}>
              
                {/* 25 */}
                <View style={styles.stext} left={75}><Text style={styles.ftext} ></Text></View>
                <View style={styles.stext} zIndex={5} left={110} top={-10} ><Text style={styles.ftext} >Sandy Clay{'\n'}Loam</Text></View>
                <View style={[styles.triangle,styles.sandyClayLoamColor  ]} left={100} />
                <View style={[styles.triangleDown,styles.sandyClayLoamColor  ]} left={105} />
                <View style={[styles.triangle,styles.sandyClayLoamColor  ]} left={110} />
                <View style={[styles.triangleDown,styles.sandyClayLoamColor  ]} left={115} />
                <View style={[styles.triangle,styles.sandyClayLoamColor  ]} left={120} />
                <View style={[styles.triangleDown, styles.sandyClayLoamColor ]} left={125} />
                <View style={[styles.triangle,styles.sandyClayLoamColor  ]} left={130} />
                <View style={[styles.triangleDown,styles.sandyClayLoamColor  ]} left={135} />
                <View style={[styles.triangle,styles.sandyClayLoamColor  ]} left={140} />
                <View style={[styles.triangleDown, styles.sandyClayLoamColor ]} left={145} />
                <View style={[styles.triangleDown, styles.sandyClayLoamColor]} zIndex={30} top={-5} left={151} />
                <View style={[styles.triangle,styles.loamColor ]} left={150} />
                <View style={[styles.triangleDown,styles.loamColor ]} left={155} />
                <View style={[styles.triangle, styles.loamColor]} left={160} />
                <View style={[styles.triangleDown,styles.loamColor ]} left={165} />
                <View style={[styles.triangle,styles.loamColor ]} left={170} />
                <View style={[styles.triangleDown, styles.loamColor]} left={175} />
                <View style={[styles.triangle, styles.loamColor]} left={180} />
                <View style={[styles.triangleDown,styles.loamColor ]} left={185} />
                <View style={[styles.triangle, styles.loamColor ]} left={190} />
                <View style={[styles.triangleDown,styles.loamColor ]} left={195} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={200} />
                <View style={[styles.triangleDown, styles.siltLoamColor]} left={205} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={210} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={215} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={220} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={225} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={230} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={235} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={240} />
                <View style={[styles.triangleDown, styles.siltLoamColor]} left={245} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={250} />
                <View style={styles.stext} left={270}><Text style={styles.ftext} ></Text></View>
            </View>

            <View style={styles.a1}>
     
                {/* 20 */}
                <View style={styles.stext} left={70}><Text style={styles.ftext} >20</Text></View>
                <View style={styles.stext} zIndex={5} left={170} top={5} ><Text style={styles.ftext} >Loam</Text></View>
                <View style={[styles.triangle, styles.sandyLoamColor ]} left={95} />
                <View style={[styles.triangleDown, styles.sandyLoamColor ]} left={100} />
                <View style={[styles.triangle,styles.sandyLoamColor  ]} left={105} />
                <View style={[styles.triangleDown, styles.sandyLoamColor ]} left={110} />
                <View style={[styles.triangle, styles.sandyLoamColor ]} left={115} />
                <View style={[styles.triangleDown, styles.sandyLoamColor ]} left={120} />
                <View style={[styles.triangle, styles.sandyLoamColor ]} left={125} />
                <View style={[styles.triangleDown, styles.sandyLoamColor ]} left={130} />
                <View style={[styles.triangle, styles.sandyLoamColor ]} left={135} />
                <View style={[styles.triangleDown, styles.sandyLoamColor ]} left={140} />
                <View style={[styles.triangle, styles.sandyLoamColor ]} left={145} />
                <View style={[styles.triangleDown,styles.loamColor ]} left={150} />
                <View style={[styles.triangleDown, styles.sandyClayLoamColor]} zIndex={30} top={-10} left={148} />
                <View style={[styles.triangleDown10, styles.sandyClayLoamColor]} zIndex={30} top={-3.5} left={149} />
                <View style={[styles.triangle, styles.loamColor]} left={155} />
                <View style={[styles.triangleDown, styles.loamColor]} left={160} />
                <View style={[styles.triangle,styles.loamColor ]} left={165} />
                <View style={[styles.triangleDown,  styles.loamColor , ]} left={170} />
                <View style={[styles.triangle, styles.loamColor]} left={175}/>
                <View style={[styles.triangleDown,styles.loamColor ]} left={180} />
                <View style={[styles.triangle, styles.loamColor]} left={185} />
                <View style={[styles.triangleDown,styles.loamColor ]} left={190} />
                <View style={[styles.triangle, styles.siltLoamColor]} left={195}  zIndex={10} />
                <View style={[styles.triangleDown, styles.siltLoamColor]} left={200} />
                <View style={[styles.triangle, styles.siltLoamColor]} left={205} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={210} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={215} />
                <View style={[styles.triangleDown, styles.siltLoamColor]} left={220} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={225} />
                <View style={[styles.triangleDown, styles.siltLoamColor]} left={230} />
                <View style={[styles.triangle, styles.siltLoamColor]} left={235} />
                <View style={[styles.triangleDown, styles.siltLoamColor]} left={240} />
                <View style={[styles.triangle, styles.siltLoamColor]} left={245} />
                <View style={[styles.triangleDown, styles.siltLoamColor]} left={250} />
                <View style={[styles.triangle, styles.siltLoamColor]} left={255} />
                <View style={styles.stext} left={275}><Text style={styles.ftext} >80</Text></View>
            </View>

            <View style={styles.a1}>
                
                {/* 15 */}
                <View style={styles.stext} left={65}><Text style={styles.ftext} ></Text></View>
                <View style={[styles.triangle,styles.loamysandColor,styles.rotate_120  ]} zIndex={99} top={5} left={93} />
                <View style={[styles.triangle, styles.loamysandColor ]} left={90} />
                <View style={[styles.triangleDown,styles.sandyLoamColor  ]} left={95} />
                <View style={[styles.triangle, styles.sandyLoamColor ]} left={100} />
                <View style={[styles.triangleDown, styles.sandyLoamColor ]} left={105} />
                <View style={[styles.triangle,styles.sandyLoamColor  ]} left={110} />
                <View style={[styles.triangleDown, styles.sandyLoamColor ]} left={115} />
                <View style={[styles.triangle,styles.sandyLoamColor  ]} left={120} />
                <View style={[styles.triangleDown,styles.sandyLoamColor  ]} left={125} />
                <View style={[styles.triangle,styles.sandyLoamColor  ]} left={130} />
                <View style={[styles.triangleDown, styles.sandyLoamColor ]} left={135} />
                <View style={[styles.triangle, styles.sandyLoamColor ]} left={140} />
                <View style={[styles.triangleDown, styles.sandyLoamColor ]} left={145} />
                <View style={[styles.triangle, styles.sandyLoamColor ]} left={150} />
                <View style={[styles.triangleDown,styles.loamColor ]} left={155} />
                <View style={[styles.triangle, styles.loamColor]} left={160} />
                <View style={[styles.triangleDown, styles.loamColor]} left={165} />
                <View style={[styles.triangle,styles.loamColor ]} left={170} />
                <View style={[styles.triangleDown,styles.loamColor  ]} left={175} />
                <View style={[styles.triangle,styles.loamColor ]} left={180} />
         
                <View style={[styles.triangleDown,styles.loamColor ]} left={185} />
                <View style={[styles.triangleDown,styles.loamColor ]} left={183} top={5}  zIndex={5} />
                <View style={[styles.triangle,styles.loamColor ]} left={180} top={5}  zIndex={5} />
                <View style={[styles.triangleDown,styles.loamColor ]} left={175} top={5}  zIndex={5} />
                <View style={[styles.triangle,styles.loamColor ]} left={170} top={5}  zIndex={5} />
                <View style={[styles.triangleDown,styles.loamColor ]} left={165} top={5}  zIndex={5} />
                <View style={[styles.triangle,styles.loamColor ]} left={163} top={5}  zIndex={5} />
                <View style={[styles.triangleDown,styles.loamColor ]} left={158} top={5}  zIndex={5} />

                <View style={[styles.triangle, styles.siltLoamColor]} left={190} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={195} />
                <View style={[styles.triangle, styles.siltLoamColor]} left={200} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={205} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={210} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={215} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={220} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={225} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={230} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={235} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={240} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={245} />
                <View style={[styles.triangle, styles.siltLoamColor]} left={250} />
                <View style={[styles.triangleDown, styles.siltLoamColor]} left={255} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={260} />
                <View style={styles.stext} zIndex={5} left={210} top={5} ><Text style={styles.ftext} >Silt Loam</Text></View>
                <View style={styles.stext} left={280}><Text style={styles.ftext} ></Text></View>
            </View>

            <View style={styles.a1}>
              
                {/* 10 */}
                <View style={styles.stext} left={60}><Text style={styles.ftext} >10</Text></View>
                <View style={[styles.triangle,styles.loamysandColor,styles.rotate_120  ]} zIndex={99} top={-2} left={95} />
                <View style={[styles.triangle,styles.loamysandColor,styles.rotate_120  ]} zIndex={99} top={-2} left={99} />
                <View style={[styles.triangle,styles.loamysandColor,styles.rotate_120  ]} zIndex={99} top={1} left={102} />
                <View style={[styles.triangle,styles.loamysandColor,styles.rotate_120  ]} zIndex={99} top={3} left={107} />
                <View style={[styles.triangle,styles.loamysandColor,styles.rotate_120  ]} zIndex={99} top={3} left={110} />
                <View style={[styles.triangle,styles.loamysandColor,styles.rotate_120  ]} zIndex={99} top={6} left={114} />
                <View style={[styles.triangle,styles.loamysandColor,styles.rotate_120  ]} zIndex={99} top={13} left={125} />
                <View style={[styles.triangle,styles.loamysandColor,styles.rotate_120  ]} zIndex={99} top={13} left={128} />
                <View style={[styles.stext]} zIndex={5} left={100} top={-7} ><Text style={styles.ftext} >Sandy Loam</Text></View>
                <View style={[styles.stext, styles.loamyside]} zIndex={999} left={82} top={10} ><Text style={styles.ftext} >Loamy Sand</Text></View>
                <View style={[styles.triangle, styles.sandColor]} left={85} />
     
                <View style={[styles.triangleDown, styles.loamysandColor]} left={90} />
                <View style={[styles.triangle,styles.loamysandColor]} left={95} />
                <View style={[styles.triangleDown, styles.sandyLoamColor]} left={100} />
                <View style={[styles.triangle,styles.sandyLoamColor ]} left={105} />
                <View style={[styles.triangleDown,styles.sandyLoamColor ]} left={110} />
                <View style={[styles.triangle, styles.sandyLoamColor ]} left={115} />
                <View style={[styles.triangleDown,styles.sandyLoamColor ]} left={120} />
                <View style={[styles.triangle, styles.sandyLoamColor]} left={125} />
                <View style={[styles.triangleDown, styles.sandyLoamColor]} left={130} />
                <View style={[styles.triangle,styles.sandyLoamColor ]} left={135} />
                <View style={[styles.triangleDown,styles.sandyLoamColor ]} left={140} />
                <View style={[styles.triangle, styles.sandyLoamColor]} left={145} />
                <View style={[styles.triangleDown,styles.sandyLoamColor ]} left={150} />
                <View style={[styles.triangle, styles.sandyLoamColor]} left={155} />
                <View style={[styles.triangleDown, styles.sandyLoamColor]} left={160} />
                <View style={[styles.triangle, styles.sandyLoamColor]} left={165} />
                <View style={[styles.triangleDown, styles.sandyLoamColor]} left={170} />
                <View style={[styles.triangle, styles.sandyLoamColor]}  left={175}/>
                <View style={[styles.triangleDown,styles.sandyLoamColor ]} left={180}  />
                <View style={[styles.triangle, styles.siltLoamColor]} left={185}  zIndex={21}/>
                <View style={[styles.triangleDown, styles.siltLoamColor]} left={190}  zIndex={21}/>
                <View style={[styles.triangle,styles.siltLoamColor ]} left={195}  zIndex={21} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={200}  zIndex={21} />
                <View style={[styles.triangle, styles.siltLoamColor]} left={205} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={210} />
                <View style={[styles.triangle, styles.siltLoamColor]} left={215} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={220} />
                <View style={[styles.triangle, styles.siltLoamColor]} left={225} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={230} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={235} />
                <View style={[styles.triangleDown, styles.siltLoamColor]} left={240} />

                <View style={[styles.triangle,styles.siltColor ]} left={247} top={-5} />
                <View style={[styles.triangleDown,styles.siltColor ]} left={252} top={-5} />
                <View style={[styles.triangle,styles.siltColor ]} left={255} top={-5} />
                <View style={[styles.triangleDown,styles.siltColor ]} left={257} top={-5} />
                <View style={[styles.triangle,styles.siltColor ]} left={262} top={-5} />

                <View style={[styles.triangle,styles.siltColor ]} left={245} />
                <View style={[styles.triangleDown, styles.siltColor]} left={250} />
                <View style={[styles.triangle, styles.siltColor]} left={255} />
                <View style={[styles.triangleDown, styles.siltColor]} left={260} />
                <View style={[styles.triangle,styles.siltColor ]} left={265} />
                <View style={styles.stext} left={285}><Text style={styles.ftext} >90</Text></View>
            </View>

            <View style={styles.a1}>
               
                {/* 5 */}
                <View style={styles.stext} left={55}><Text style={styles.ftext} ></Text></View>
                <View style={styles.stext} zIndex={5} left={82} top={7} ><Text style={styles.ftext} >Sand</Text></View>
                <View style={[styles.triangle, styles.sandColor]} left={80} />
                <View style={[styles.triangleDown,styles.sandColor]} left={85} />
                <View style={[styles.triangle,styles.sandColor]} left={90} />
                <View style={[styles.triangleDown,styles.loamysandColor]} left={95} />
               
                <View style={[styles.triangle,styles.loamysandColor ]} left={100} />  
                <View style={[styles.triangleDown,styles.loamysandColor  ]} left={105} />
                <View style={[styles.triangle,styles.loamysandColor ]} left={110} />


                <View style={[styles.triangleDown,styles.loamysandColor ]} left={115} />
                <View style={[styles.triangle,styles.loamysandColor ]} left={120} />
                <View style={[styles.triangleDown, styles.sandyLoamColor]} left={125} />
                <View style={[styles.triangle, styles.sandyLoamColor]} left={130} />
                <View style={[styles.triangleDown, styles.sandyLoamColor]} left={135} />
                <View style={[styles.triangle,styles.sandyLoamColor ]} left={140} />
                <View style={[styles.triangleDown, styles.sandyLoamColor]} left={145} />
                <View style={[styles.triangle, styles.sandyLoamColor]} left={150} />
                <View style={[styles.triangleDown, styles.sandyLoamColor]} left={155} />
                <View style={[styles.triangle, styles.sandyLoamColor]} left={160} />
                <View style={[styles.triangleDown, styles.sandyLoamColor]} left={165} />
                <View style={[styles.triangle,styles.sandyLoamColor ]} left={170} />
                <View style={[styles.triangleDown,styles.sandyLoamColor ]} left={175}/>
                <View style={[styles.triangle, styles.siltLoamColor]} left={180} />
                <View style={[styles.triangleDown, styles.siltLoamColor]} left={185} />
                <View style={[styles.triangle, styles.siltLoamColor]} left={190} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={195} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={200} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={205} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={210} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={215} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={220} />
                <View style={[styles.triangleDown,styles.siltLoamColor ]} left={225} />
                <View style={[styles.triangle,styles.siltLoamColor ]} left={230} />
                <View style={[styles.triangleDown, styles.siltLoamColor]} left={235} />
                <View style={[styles.triangle, styles.siltColor ]} left={240} />
                <View style={[styles.triangleDown, styles.siltColor]} left={245} />
                <View style={[styles.triangle,styles.siltColor]} left={250} />
                <View style={[styles.triangleDown,styles.siltColor]} left={255} />
                <View style={[styles.triangle,styles.siltColor]} left={260} />
                <View style={[styles.triangleDown,styles.siltColor]} left={265} />
                <View style={[styles.triangle,styles.siltColor]} left={270} />
                <View style={styles.stext} zIndex={5} left={255} top={7} ><Text style={styles.ftext} >Silt</Text></View>
              
            </View>

            <View style={styles.a1}>
            <View style={styles.stext} left={50}><Text style={styles.ftext} >0</Text></View>
                {/* 0 */}
              
                <View style={styles.stext} left={290}><Text style={styles.ftext} >100</Text></View>
            </View>

            <View style={styles.a1}>
            
                <View style={[styles.btext]} left={70} ><Text style={styles.ftext} >100</Text></View>
                <View style={[styles.btext]} left={0} ><Text style={styles.ftext} ></Text></View>
                <View style={[styles.btext]} left={95} ><Text style={styles.ftext} >90</Text></View>
                <View style={[styles.btext]} left={0} ><Text style={styles.ftext} ></Text></View>
                <View style={[styles.btext]} left={115} ><Text style={styles.ftext} >80</Text></View>
                <View style={[styles.btext]} left={0} ><Text style={styles.ftext} ></Text></View>
                <View style={[styles.btext]} left={135} ><Text style={styles.ftext} >70</Text></View>
                <View style={[styles.btext]} left={0} ><Text style={styles.ftext} ></Text></View>
                <View style={[styles.btext]} left={155} ><Text style={styles.ftext} >60</Text></View>
                <View style={[styles.btext]} left={0} ><Text style={styles.ftext} ></Text></View>
                <View style={[styles.btext]} left={175} ><Text style={styles.ftext} >50</Text></View>
                <View style={[styles.btext]} left={0} ><Text style={styles.ftext} ></Text></View>
                <View style={[styles.btext]} left={195} ><Text style={styles.ftext} >40</Text></View>
                <View style={[styles.btext]} left={0} ><Text style={styles.ftext} ></Text></View>
                <View style={[styles.btext]} left={215} ><Text style={styles.ftext} >30</Text></View>
                <View style={[styles.btext]} left={0} ><Text style={styles.ftext} ></Text></View>
                <View style={[styles.btext]} left={235} ><Text style={styles.ftext} >20</Text></View>
                <View style={[styles.btext]} left={0} ><Text style={styles.ftext} ></Text></View>
                <View style={[styles.btext]} left={255} ><Text style={styles.ftext} >10</Text></View>
                <View style={[styles.btext]} left={0} ><Text style={styles.ftext} ></Text></View>
                <View style={[styles.btext]} left={275} ><Text style={styles.ftext} >0</Text></View>


            </View>
            <View style={styles.a1}>

            </View>

        </View>
    )
}
const css = StyleSheet.create({
    topsm: {
        height: 4,
        width: 4,
        borderRadius: 15,
        backgroundColor: "darkblue",
        position: "absolute",
        zIndex: 99,

    },

});

const styles = StyleSheet.create({
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#ccc",
        position: "absolute",


    }, triangleDown: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#ccc",
        transform: [{ rotate: "180deg" }],
        position: "absolute",
    }, triangle10: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 2.5,
        borderRightWidth: 2.5,
        borderBottomWidth: 5,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#ccc",
        position: "absolute",


    }, triangleDown10: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 2.5,
        borderRightWidth: 2.5,
        borderBottomWidth: 5,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#ccc",
        transform: [{ rotate: "180deg" }],
        position: "absolute",
    },


    td: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "transparent",
        transform: [{ rotate: "180deg" }],

    },
    loamyside: {
        transform: [{ rotate: "30deg" }],
    },


    a1: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
    },
    stext: {
        color: "black",
        position: "absolute",
    },
    btext: {
        color: "black",
        transform: [{ rotate: "0deg" }],
        marginTop: 3,
        position: "absolute",
    },
    ftext: {
        fontSize: 9,
        top:-10,
        zIndex:399,
    },

    viewObject: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 1,
        borderRightWidth: 200,
        borderBottomWidth: 1,

        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        position: "absolute",
        zIndex: 250,
        transform: [{ rotate: "60deg" }],
        left: 50,
        top: 70,

    },
    clayColor: {
        borderBottomColor: "#B0F1FF",
    },
    sandyClayColor: {
        borderBottomColor: "#a3d8cd",
    },
    siltyClayColor: {
        borderBottomColor: "#b1c8c8"
    },
    clayLoamColor: {
        borderBottomColor: "#b6c4a8"
    },
    loamColor: {
        borderBottomColor: "#d8c38f",
    },
    sandyLoamColor: {
        borderBottomColor: "#d5e487",
    },
    sandyClayLoamColor: {
        borderBottomColor: "#b8dda5",
    },
    silyClayLoamColor: {
        borderBottomColor: "#cdb4b4",
    },
    siltLoamColor: {
        borderBottomColor: "#e1a39a",
    },
    loamysandColor: {
        borderBottomColor: "#f2ed59",
    },
    sandColor: {
        borderBottomColor: "#fadd00",
    },
    siltColor: {
        borderBottomColor: "#f78e83",
    },
    triangleTopRight: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 0,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "red",
        position: "absolute",
    },
    triangleTopLeft: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 5,
        borderRightWidth: 0,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "red",
        position: "absolute",
    },
    triangleBottomRight: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 0,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "red",
        transform: [{ rotate: "180deg" }],
        position: "absolute",
    },
    triangleBottomLeft: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 5,
        borderRightWidth: 0,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "red",
        transform: [{ rotate: "180deg" }],
        position: "absolute",
        zIndex: 2,
    },

    triangleTopRight10: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 0,
        borderRightWidth: 15,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "red",
        position: "absolute",
        zIndex: 2,
    },
    triangleTopLeft10: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 10,
        borderRightWidth: 0,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "red",
        position: "absolute",
        zIndex: 2,
    },
    triangleBottomRight10: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 0,
        borderRightWidth: 10,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "red",
        transform: [{ rotate: "180deg" }],
        position: "absolute",
        zIndex: 2,
    },
    triangleBottomLeft10: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 10,
        borderRightWidth: 0,
        borderBottomWidth: 10,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "red",
        transform: [{ rotate: "180deg" }],
        position: "absolute",
        zIndex: 2,
    },
    rotate_60: {
        transform: [{ rotate: "60deg" }],
    },
    rotate_70: {
        transform: [{ rotate: "70deg" }],
    },
    rotate_80: {
        transform: [{ rotate: "80deg" }],
    },
    rotate_120: {
        transform: [{ rotate: "105deg" }],
    }

});

export default GraphData