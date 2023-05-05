import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip ,Legend,Export} from '@syncfusion/ej2-react-charts';









export const PieChart = ({ title,nomPort, data, filterFunction}) => {
  const currentColor="black"
  const currentMode="Light"
  const legendSettingsLight={ visible:true,textStyle:{ color: 'black' }};
  const legendSettingsDark={ visible:true,textStyle:{ color: 'white' }};


  return (


      <AccumulationChartComponent
        
        legendSettings={currentMode === 'Dark' ? legendSettingsDark : legendSettingsLight}
        title={title}
        titleStyle={{color:currentColor,size: '150%'}} 
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        
      >
        
        <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip,Legend]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Pourcentage %"
            dataSource={filterFunction(data,nomPort)}
            xName="x"
            yName="pourcentage"
            innerRadius="40%"
            startAngle={0}
            endAngle={360}
            radius="70%"
            explode
            explodeOffset="10%"
            explodeIndex={2}
            dataLabel={{
              visible: true,
              name: 'text',
              position: 'Inside',
              font: {
                fontWeight: '600',
                color: 'white',
              },
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    
  );
};


