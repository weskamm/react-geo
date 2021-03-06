import React from 'react';
import { render } from 'react-dom';

import OlMap from 'ol/map';
import OlView from 'ol/view';
import OlLayerGroup from 'ol/layer/group';
import OlLayerTile from 'ol/layer/tile';
import OlSourceTileJson from 'ol/source/tilejson';
import OlSourceOsm from 'ol/source/osm';
import olProj from 'ol/proj';

import LayerTree from './LayerTree.jsx'; //@react-geo@


//
// ***************************** SETUP *****************************************
//
const layerGroup = new OlLayerGroup({
  name: 'Layergroup',
  layers: [
    new OlLayerTile({
      name: 'Food insecurity layer',
      source: new OlSourceTileJson({
        url: 'https://api.tiles.mapbox.com/v3/mapbox.20110804-hoa-foodinsecurity-3month.json?secure',
        crossOrigin: 'anonymous'
      })
    }),
    new OlLayerTile({
      name: 'World borders layer',
      source: new OlSourceTileJson({
        url: 'https://api.tiles.mapbox.com/v3/mapbox.world-borders-light.json?secure',
        crossOrigin: 'anonymous'
      })
    })
  ]
});

const map = new OlMap({
  layers: [
    new OlLayerTile({
      name: 'OSM',
      source: new OlSourceOsm()
    }),
    layerGroup
  ],
  view: new OlView({
    center: olProj.fromLonLat([37.40570, 8.81566]),
    zoom: 4
  })
});

//
// ***************************** SETUP END *************************************
//

render(
  <div>
    <div id="map" style={{
      width: '400px',
      height: '400px',
      right: '0px',
      position: 'absolute'
    }} />

    <div className="example-block">
      <span>{'Configured with \'map.getLayerGroup()\':'}</span>

      <LayerTree
        layerGroup={map.getLayerGroup()}
        map={map}
      />

    </div>

    <div className="example-block">
      <span>{'A LayerTree configured with concrete layerGroup:'}</span>

      <LayerTree
        layerGroup={layerGroup}
        map={map}
      />

    </div>

  </div>,

  // Target
  document.getElementById('exampleContainer'),

  // Callback
  () => {
    map.setTarget('map');
  }
);
