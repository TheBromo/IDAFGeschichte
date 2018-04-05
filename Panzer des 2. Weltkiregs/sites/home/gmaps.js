var map;
function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.232399, lng: 10.417957},
        zoom: 6,
        mapTypeId: 'terrain',
        disableDefaultUI: true,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]
    });

    var tanks = {
        panther: {
            position: new google.maps.LatLng(50.232399, 10.417957),
            icon: 'icons/panther.png',
            name: 'Panzer V - Panther',
            info: '<div class="content">'+
            '<h1 class="title">Panzer V - Panther</h1>'+
            '<span class="origin"><img src="../pictures/NSDAP_flag.png"><p>- Deutsches Reich</p></span>' +
            '<div class="body-content">' +
            '<a href="../panther/panther.html">Mehr zum <b>Panzer V - Panther<b></a>'+
            '</div>'+
            '</div>',
            usage: [
                new google.maps.LatLng(53.9377,11.10915),
                new google.maps.LatLng(54.41039,12.87678),
                new google.maps.LatLng(53.80176,14.38075),
                new google.maps.LatLng(54.74483,18.00391),
                new google.maps.LatLng(54.32431,19.27367),
                new google.maps.LatLng(55.16176,21.02217),
                new google.maps.LatLng(56.2055,20.77581),
                new google.maps.LatLng(57.58618,21.38988),
                new google.maps.LatLng(59.27749,24.06938),
                new google.maps.LatLng(59.84665,29.62613),
                new google.maps.LatLng(59.99564,31.26477),
                new google.maps.LatLng(56.72034,35.60008),
                new google.maps.LatLng(55.80997,37.24528),
                new google.maps.LatLng(54.77665,38.06908),
                new google.maps.LatLng(52.47545,39.89003),
                new google.maps.LatLng(50.30043,40.09257),
                new google.maps.LatLng(47.31093,39.54805),
                new google.maps.LatLng(45.65709,29.2305),
                new google.maps.LatLng(47.38769,25.20503),
                new google.maps.LatLng(48.22123,21.83875),
                new google.maps.LatLng(48.05939,17.87473),
                new google.maps.LatLng(47.48235,15.98918),
                new google.maps.LatLng(47.65173,12.96105),
                new google.maps.LatLng(47.2569,9.69123),
                new google.maps.LatLng(47.69943,7.80124),
                new google.maps.LatLng(47.72751,3.79105),
                new google.maps.LatLng(48.54716,-1.05409),
                new google.maps.LatLng(49.58078,-1.77953),
                new google.maps.LatLng(49.87335,0.72467),
                new google.maps.LatLng(51.0565,2.61363),
                new google.maps.LatLng(53.07707,5.61642),
                new google.maps.LatLng(53.42703,7.82819),
            ]
        },
        sherman: {
            position: new google.maps.LatLng(52.130798, -1.586160),
            icon: 'icons/sherman.png',
            name: 'Sherman Firefly',
            info: '<div class="content">'+
            '<h1 class="title">Sherman Firefly</h1>'+
            '<span class="origin"><img src="../pictures/uk_flag.png"><p>- Vereinigtes Königreich</p></span>' +
            '<div class="body-content">' +
            '<a href="../sherman/sherman.html">Mehr zum <b>Sherman Firefly<b></a>'+
            '</div>'+
            '</div>',
            usage: [
                new google.maps.LatLng(53.84706,11.3069),
                new google.maps.LatLng(53.82189,9.61836),
                new google.maps.LatLng(53.38204,6.69134),
                new google.maps.LatLng(52.93585,5.01909),
                new google.maps.LatLng(52.13573,4.55533),
                new google.maps.LatLng(51.07862,3.13977),
                new google.maps.LatLng(49.98391,4.44285),
                new google.maps.LatLng(47.89724,8.43913),
                new google.maps.LatLng(47.45933,9.81225),
                new google.maps.LatLng(46.91204,10.71034),
                new google.maps.LatLng(46.28322,11.45462),
                new google.maps.LatLng(45.93056,12.5175),
                new google.maps.LatLng(45.85179,13.44855),
                new google.maps.LatLng(47.26881,12.0859),
                new google.maps.LatLng(47.85591,12.48072),
                new google.maps.LatLng(49.15432,12.5233),
                new google.maps.LatLng(50.34146,12.01046),
                new google.maps.LatLng(52.72746,11.36578),
            ]
        },
        t34: {
            position: new google.maps.LatLng(51.345429, 24.717918),
            icon: 'icons/t34.png',
            name: 'T34-85',
            info: '<div class="content">'+
            '<h1 class="title">T34-85</h1>'+
            '<span class="origin"><img src="../pictures/soviets_flag.png"><p>- Sowjetunion</p></span>' +
            '<div class="body-content">' +
            '<a href="../t34/t34.html">Mehr zum <b>T34-85<b></a>'+
            '</div>'+
            '</div>',
            usage: [
                new google.maps.LatLng(53.88593,11.32888),
                new google.maps.LatLng(54.35921,13.09651),
                new google.maps.LatLng(53.74982,14.60047),
                new google.maps.LatLng(54.69407,18.22363),
                new google.maps.LatLng(54.27302,19.49339),
                new google.maps.LatLng(55.11152,21.24189),
                new google.maps.LatLng(56.15658,20.99554),
                new google.maps.LatLng(57.53904,21.60961),
                new google.maps.LatLng(59.23256,24.28911),
                new google.maps.LatLng(59.80247,29.84586),
                new google.maps.LatLng(59.95166,31.4845),
                new google.maps.LatLng(56.67208,35.81981),
                new google.maps.LatLng(55.76055,37.46501),
                new google.maps.LatLng(54.72592,38.28881),
                new google.maps.LatLng(52.42189,40.10975),
                new google.maps.LatLng(50.24425,40.3123),
                new google.maps.LatLng(47.25131,39.76778),
                new google.maps.LatLng(45.59563,29.45022),
                new google.maps.LatLng(47.32816,25.42476),
                new google.maps.LatLng(48.16264,22.05847),
                new google.maps.LatLng(47.85338,17.83079),
                new google.maps.LatLng(46.94505,16.03313),
                new google.maps.LatLng(45.50754,14.41125),
                new google.maps.LatLng(45.89769,13.47052),
                new google.maps.LatLng(47.31352,12.10788),
                new google.maps.LatLng(47.90012,12.5027),
                new google.maps.LatLng(49.19741,12.54527),
                new google.maps.LatLng(50.38352,12.03243),
                new google.maps.LatLng(52.76736,11.38776),
            ]
        }
    };

    var legend = document.getElementById('legend');
    for (var t in tanks) {
        var tank = tanks[t];

        // Marker
        var marker = new google.maps.Marker({
            name: tank.name,
            position: tank.position,
            icon: tank.icon,
            map: map
        });
        attachInfo(tank, marker);

        // Legend
        var name = tank.name;
        var icon = tank.icon;
        var div = document.createElement('div');
        div.innerHTML = '<img src="' + icon + '"> -<h3>' + name + '</h3>';
        attachLink(div, tank);
        legend.appendChild(div);

        addHeatMap(tank);
    }

    function attachLink(div, tank) {
        div.onclick = function () {
            map.panTo(tank.position);
            console.log(tank.name)
        };
    }

    function attachInfo(tank, marker) {
        var infowindow = new google.maps.InfoWindow({
            content: tank.info
        });

        // Info
        marker.addListener('click', function() {
            infowindow.open(map, marker);
            tank.heatmap.setMap(map);
            for (var t in tanks) {
                var temp = tanks[t];
                if (temp != tank && temp.heatmap != null) {
                    temp.heatmap.setMap(null);
                }
            }
        });
    }

    function addHeatMap(tank) {
        // Heatmap
        var heatmap = new google.maps.Polygon({
            paths: tank.usage,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: '#FF0000',
            fillOpacity: 0.35
        });
        tank.heatmap = heatmap;
    }
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(legend);
}