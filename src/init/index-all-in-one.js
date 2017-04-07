import ol from 'openlayers/dist/ol-debug';
import mapStyle from './mapStyle';
import 'openlayers/dist/ol.css';
import './index.css';

document.getElementById('root').style.height = window.innerHeight + 'px';

const map = new ol.Map({
  // 设置地图图层
  layers: [
    new ol.layer.Vector({
      source: new ol.source.Vector({
        // features: jsondata,
        url: '/frame',
        format: new ol.format.GeoJSON()
      }),
      style: new ol.style.Style({
        fill: new ol.style.Fill({
          color: '#e9e9e9'
        }),
        stroke: new ol.style.Stroke({
          color: '#ab893e',
          width: 3
        })
      })
    })
  ],
  view: new ol.View({
    center: [13377176.3663, 3534102.6117], // 图聚
    // center: [1803747.6161779910326, -5521182.08649673499167], // QGIS
    zoom: 20,
    // projection: 'EPSG::27700'
    // projection: 'EPSG:4326'
    // qgis 数据
    // projection: new ol.proj.Projection({
    //   code: 'EPSG::27700',
    //   units: 'm'
    // })
    // 图聚数据
    projection: new ol.proj.Projection({
      projection: 'EPSG:4326',
      units: 'm'
    })
  }),
  // 让id为map的div作为地图的容器
  target: 'root'
});

// const rooms = new ol.layer.Vector({
//   source: new ol.source.Vector({
//     url: '/rooms',
//     format: new ol.format.GeoJSON()
//   }),
//   style: new ol.style.Style({
//     fill: new ol.style.Fill({
//       color: '#fff'
//     }),
//     stroke: new ol.style.Stroke({
//       color: '#9e9e9e',
//       width: 0.5
//     })
//   })
// });
// map.addLayer(rooms);

// const doors = new ol.layer.Vector({
//   source: new ol.source.Vector({
//     url: '/doors',
//     format: new ol.format.GeoJSON()
//   }),
//   style: (feature, resolution) => {
//     return new ol.style.Style({
//       image: new ol.style.Circle({
//         radius: 10,
//         fill: new ol.style.Fill({color: 'rgba(255, 0, 0, 0.1)'}),
//         stroke: new ol.style.Stroke({color: 'red', width: 1})
//       }),
//       text: (feature) => new ol.style.Text({
//         text: feature.get('door_to')
//       })
//     });
//   }
// });
// map.addLayer(doors);
