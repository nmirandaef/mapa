var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 0.400000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_osm_1 = new ol.format.GeoJSON();
var features_osm_1 = format_osm_1.readFeatures(json_osm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_osm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_osm_1.addFeatures(features_osm_1);
var lyr_osm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_osm_1, 
                style: style_osm_1,
                popuplayertitle: "osm",
                interactive: true,
                title: '<img src="styles/legend/osm_1.png" /> osm'
            });
var format_Casas_ruta_2 = new ol.format.GeoJSON();
var features_Casas_ruta_2 = format_Casas_ruta_2.readFeatures(json_Casas_ruta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casas_ruta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casas_ruta_2.addFeatures(features_Casas_ruta_2);
var lyr_Casas_ruta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casas_ruta_2, 
                style: style_Casas_ruta_2,
                popuplayertitle: "Casas_ruta",
                interactive: true,
                title: '<img src="styles/legend/Casas_ruta_2.png" /> Casas_ruta'
            });
var format_osm_3 = new ol.format.GeoJSON();
var features_osm_3 = format_osm_3.readFeatures(json_osm_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_osm_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_osm_3.addFeatures(features_osm_3);
var lyr_osm_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_osm_3, 
                style: style_osm_3,
                popuplayertitle: "osm",
                interactive: true,
                title: 'osm'
            });
var format_osm_4 = new ol.format.GeoJSON();
var features_osm_4 = format_osm_4.readFeatures(json_osm_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_osm_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_osm_4.addFeatures(features_osm_4);
var lyr_osm_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_osm_4, 
                style: style_osm_4,
                popuplayertitle: "osm",
                interactive: true,
                title: 'osm'
            });
var format_RoutingResult_5 = new ol.format.GeoJSON();
var features_RoutingResult_5 = format_RoutingResult_5.readFeatures(json_RoutingResult_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoutingResult_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutingResult_5.addFeatures(features_RoutingResult_5);
var lyr_RoutingResult_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoutingResult_5, 
                style: style_RoutingResult_5,
                popuplayertitle: "Routing Result",
                interactive: true,
                title: '<img src="styles/legend/RoutingResult_5.png" /> Routing Result'
            });
var format_RoutingResult_6 = new ol.format.GeoJSON();
var features_RoutingResult_6 = format_RoutingResult_6.readFeatures(json_RoutingResult_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoutingResult_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutingResult_6.addFeatures(features_RoutingResult_6);
var lyr_RoutingResult_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoutingResult_6, 
                style: style_RoutingResult_6,
                popuplayertitle: "Routing Result",
                interactive: true,
                title: '<img src="styles/legend/RoutingResult_6.png" /> Routing Result'
            });
var format_CASAS_7 = new ol.format.GeoJSON();
var features_CASAS_7 = format_CASAS_7.readFeatures(json_CASAS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASAS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASAS_7.addFeatures(features_CASAS_7);
var lyr_CASAS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASAS_7, 
                style: style_CASAS_7,
                popuplayertitle: "CASAS",
                interactive: true,
                title: '<img src="styles/legend/CASAS_7.png" /> CASAS'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_osm_1.setVisible(true);lyr_Casas_ruta_2.setVisible(true);lyr_osm_3.setVisible(true);lyr_osm_4.setVisible(true);lyr_RoutingResult_5.setVisible(true);lyr_RoutingResult_6.setVisible(true);lyr_CASAS_7.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_osm_1,lyr_Casas_ruta_2,lyr_osm_3,lyr_osm_4,lyr_RoutingResult_5,lyr_RoutingResult_6,lyr_CASAS_7];
lyr_osm_1.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_Casas_ruta_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_osm_3.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_osm_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_RoutingResult_5.set('fieldAliases', {'fid': 'fid', });
lyr_RoutingResult_6.set('fieldAliases', {'fid': 'fid', });
lyr_CASAS_7.set('fieldAliases', {'fid': 'fid', 'No. Casa': 'No. Casa', 'Area': 'Area', 'Desde hace cuánto tiempo reside en la zona limítrofe del río?': 'Zona limítrofe', '¿Cual considera que es la principal causa del comportamiento del río?  
': 'Comportamiento rio', '¿Ha notado algún cambio en el comportamiento del río o arroyo en los últimos años?': 'Cambio rio', '¿Con qué frecuencia ha experimentado inundaciones en su área?': 'Inundaciones_Área', '¿Qué nivel alcanzaron las aguas en su vivienda durante la última inundación?': 'Nivel aguas', '¿Qué impacto han tenido las inundaciones en la salud de su familia?
': 'Salud familia', '¿Cuál ha sido el impacto de las inundaciones en su vivienda?': 'Impacto vivienda', '¿Ha recibido ayuda del gobierno o de organizaciones comunitarias durante las inundaciones?': 'Ayuda gobierno', });
lyr_osm_1.set('fieldImages', {'fid': '', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'Range', 'other_tags': 'TextEdit', });
lyr_Casas_ruta_2.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_osm_3.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_osm_4.set('fieldImages', {'fid': '', 'osm_id': '', 'name': '', 'type': '', 'other_tags': '', });
lyr_RoutingResult_5.set('fieldImages', {'fid': '', });
lyr_RoutingResult_6.set('fieldImages', {'fid': '', });
lyr_CASAS_7.set('fieldImages', {'fid': 'TextEdit', 'No. Casa': 'TextEdit', 'Area': 'TextEdit', 'Desde hace cuánto tiempo reside en la zona limítrofe del río?': 'TextEdit', '¿Cual considera que es la principal causa del comportamiento del río?  
': 'TextEdit', '¿Ha notado algún cambio en el comportamiento del río o arroyo en los últimos años?': 'TextEdit', '¿Con qué frecuencia ha experimentado inundaciones en su área?': 'TextEdit', '¿Qué nivel alcanzaron las aguas en su vivienda durante la última inundación?': 'TextEdit', '¿Qué impacto han tenido las inundaciones en la salud de su familia?
': 'TextEdit', '¿Cuál ha sido el impacto de las inundaciones en su vivienda?': 'TextEdit', '¿Ha recibido ayuda del gobierno o de organizaciones comunitarias durante las inundaciones?': 'TextEdit', });
lyr_osm_1.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_Casas_ruta_2.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'inline label - always visible', });
lyr_osm_3.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_osm_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'other_tags': 'no label', });
lyr_RoutingResult_5.set('fieldLabels', {'fid': 'inline label - always visible', });
lyr_RoutingResult_6.set('fieldLabels', {'fid': 'inline label - always visible', });
lyr_CASAS_7.set('fieldLabels', {'fid': 'inline label - always visible', 'No. Casa': 'inline label - always visible', 'Area': 'inline label - always visible', 'Desde hace cuánto tiempo reside en la zona limítrofe del río?': 'inline label - always visible', '¿Cual considera que es la principal causa del comportamiento del río?  
': 'inline label - always visible', '¿Ha notado algún cambio en el comportamiento del río o arroyo en los últimos años?': 'inline label - always visible', '¿Con qué frecuencia ha experimentado inundaciones en su área?': 'inline label - always visible', '¿Qué nivel alcanzaron las aguas en su vivienda durante la última inundación?': 'inline label - always visible', '¿Qué impacto han tenido las inundaciones en la salud de su familia?
': 'inline label - always visible', '¿Cuál ha sido el impacto de las inundaciones en su vivienda?': 'inline label - always visible', '¿Ha recibido ayuda del gobierno o de organizaciones comunitarias durante las inundaciones?': 'inline label - always visible', });
lyr_CASAS_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});