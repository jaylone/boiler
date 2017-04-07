import ol from 'openlayers/dist/ol-debug';
import mapStyle from './mapStyle';
import 'openlayers/dist/ol.css';
import './index.css';

document.getElementById('root').style.height = window.innerHeight + 'px';

const map = new ol.Map({ target: 'root' });
window.list = [];

// 图聚数据 start
list.push(() => {
  map.addLayer(new ol.layer.Vector({
    source: new ol.source.Vector({
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
  }));
  map.addLayer(new ol.layer.Vector({
    source: new ol.source.Vector({
      url: '/area',
      format: new ol.format.GeoJSON()
    }),
    style: new ol.style.Style({
      fill: new ol.style.Fill({
        color: '#fff'
      }),
      stroke: new ol.style.Stroke({
        color: '#9e9e9e',
        width: 0.5
      })
    })
  }));
  map.setView(new ol.View({
    center: [13377176.3663, 3534102.6117], // 图聚
    zoom: 20,
    // 图聚数据
    projection: new ol.proj.Projection({
      projection: 'EPSG:4326',
      units: 'm'
    })
  }));
  // 图聚地图 end
});

list.push(() => {
  // 捷泰数据 start
  map.addLayer(new ol.layer.Vector({
    source: new ol.source.Vector({
      url: '/jtframe',
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
  }));
  map.addLayer(new ol.layer.Vector({
    source: new ol.source.Vector({
      url: '/rooms',
      format: new ol.format.GeoJSON()
    }),
    style: new ol.style.Style({
      fill: new ol.style.Fill({
        color: '#fff'
      }),
      stroke: new ol.style.Stroke({
        color: '#9e9e9e',
        width: 0.5
      })
    })
  }));
  map.setView(new ol.View({
    center: [104.04677583937718, 30.68613483802708],
    zoom: 20,
    projection: 'EPSG:4326',
  }));
  // 捷泰数据 end
});

list.push(() => {
  // QGIS 导出数据 CRS-'EPSG::27700'
  map.addLayer(new ol.layer.Vector({
    source: new ol.source.Vector({
      url: '/qgis',
      format: new ol.format.GeoJSON()
    }),
    style: new ol.style.Style({
      fill: new ol.style.Fill({
        color: '#fff'
      }),
      stroke: new ol.style.Stroke({
        color: '#9e9e9e',
        width: 0.5
      })
    })
  }));
  map.setView(new ol.View({
    center: [1809053.905214813537896, -5520953.589032369665802],
    zoom: 13,
    projection: new ol.proj.Projection({
      code: 'EPSG::27700',
      units: 'm'
    }),
  }));
  // QGIS 导出数据 end
});

list[0]();
window.changeMap = () => {
  list[document.getElementById('slt-map').value]();
}
