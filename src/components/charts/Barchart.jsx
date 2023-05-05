import * as React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel, Highlight } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';


const xaxis = { labelIntersectAction: Browser.isDevice ? 'None' : 'Trim', labelRotation: Browser.isDevice ? -45 : 0, valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, majorTickLines: { width: 0 }, edgeLabelPlacement: 'Shift' }
const yaxis = { title: 'Medal Count', majorTickLines: { width: 0 }, lineStyle: { width: 0 } }


export const BarChart = ({title, nomPort, data, filterFunction,id}) => {
    const currentColor="black"
    const currentMode="Light"
    
    return (


        <ChartComponent  id={id} titleStyle={{color:currentColor,size: '150%'}} legendSettings={{visible:true,nableHighlight: true}} style={{ textAlign: "center" }} background={currentMode === 'Dark' ? '#33373E' : '#fff'} primaryXAxis={xaxis} primaryYAxis={yaxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, header: "<b>${point.tooltip}</b>", shared: true }} width={"100%"} title={title} >
            <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel, Highlight]} />
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={filterFunction(data, nomPort)} tooltipMappingName='x' xName='x' columnSpacing={0.1} yName='y' type='Column'>
                </SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>

    );


}
