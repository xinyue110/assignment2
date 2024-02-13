var config = {
    style: 'mapbox://styles/wangxinyue0110/clsk3t0gd00c401qucxz53f0x',
    accessToken: 'pk.eyJ1Ijoid2FuZ3hpbnl1ZTAxMTAiLCJhIjoiY2xsaTR1aGlqMWdmZTNncXZlazUxOHV2aiJ9.LKzyKDL8VCLNXRQk0vWQSA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Future planning for community education land in Yishun, Singapore',
    subtitle: 'Sustainable development blueprint from 2030 to 2070',
    byline: 'By Wang Xinyue',
    footer: 'Source: HDB and URA. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Yishun Community Location Map in Singapore',
            image: './location1.jpg',
            description: 'Yishun is a large residential community located in the northern part of Singapore, and it serves as the site for planning research undertaken by MUPyear1 students this semester. Covering an area of approximately 23km², it is comprised of 9 subzones, with the majority of the area designated for residential purposes, except for three subzones in the south and a portion of industrial land in the north. Let us now take a brief look at the current status of educational land in Yishun, its existing plans, and the potential challenges it may face in the future!',
            location: {
                center: [103.83561, 1.41751],
                zoom: 12.95,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'subzones',
                    opacity: 0.3,
                    duration: 300
                },
                {
                    layer: 'subzones copy',
                    opacity: 1,
                    duration: 300              
                }, 
                {
                    layer: 'education-land-now',
                    opacity: 0,
                    duration: 300              
                }, 
                {
                    layer: 'education-land-2019',
                    opacity: 0,
                    duration: 300              
                }, 
                {
                    layer: 'buffered',
                    opacity: 0,
                    duration: 300              
                }, 
                {
                    layer: 'buffered copy',
                    opacity: 0,
                    duration: 300              
                }, 
                {
                    layer: 'uncoveraged3',
                    opacity: 0,
                    duration: 300              
                }, 
            ],
            onChapterExit: [
                {
                    layer: 'subzones',
                    opacity: 0
                },
                {
                    layer: 'subzones copy',
                    opacity: 1                
                },
                {
                    layer: 'education-land-now',
                    opacity: 1                
                },
                {
                    layer: 'education-land-2019',
                    opacity: 0               
                },
                {
                    layer: 'buffered',
                    opacity: 0                
                },
                {
                    layer: 'buffered copy',
                    opacity: 0                
                },
                {
                    layer: 'uncoveraged3',
                    opacity: 0                
                },
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Current Distribution of Educational Land in Yishun',
            description: 'It can be observed that educational land in Yishun is primarily distributed across 5 subzones. There is no educational land in the three southern subzones as they are uninhabited by residents. The image above depicts one of the primary schools in Yishun.',
            image: './quantitative.png',
            location: {
                center: [103.83561, 1.41751],
                zoom: 12.95,
                pitch: 0,
                bearing: 0,
                speed: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'subzones',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'subzones copy',
                    opacity: 1,
                    duration: 300              
                }, 
                {
                    layer: 'education-land-now',
                    opacity: 1,
                    duration: 300              
                }, 
                {
                    layer: 'education-land-2019',
                    opacity: 0,
                    duration: 300              
                }, 
                {
                    layer: 'buffered',
                    opacity: 0,
                    duration: 300              
                }, 
                {
                    layer: 'buffered copy',
                    opacity: 0,
                    duration: 300              
                }, 
                {
                    layer: 'uncoveraged3',
                    opacity: 0,
                    duration: 300              
                }, 
            ],
            onChapterExit: [
                {
                    layer: 'subzones',
                    opacity: 0
                },
                {
                    layer: 'subzones copy',
                    opacity: 1                
                },
                {
                    layer: 'education-land-now',
                    opacity: 1                
                },
                {
                    layer: 'education-land-2019',
                    opacity: 1               
                },
                {
                    layer: 'buffered',
                    opacity: 0                
                },
                {
                    layer: 'buffered copy',
                    opacity: 0                
                },
                {
                    layer: 'uncoveraged3',
                    opacity: 0                
                },
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: '2019 Master Plan: Yishun New Educational Land Allocation',
            description: 'The 2019 Master Plan is the latest planning initiative issued by the URA. It designates two new parcels of educational land in Yishun (highlighted in blue on the map). It is noteworthy that these newly allocated educational lands are all situated in the southern region of Yishun.',
            location: {
                center: [103.83561, 1.41751],
                zoom: 12.95,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'subzones',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'subzones copy',
                    opacity: 1,
                    duration: 300              
                }, 
                {
                    layer: 'education-land-now',
                    opacity: 1,
                    duration: 300              
                }, 
                {
                    layer: 'education-land-2019',
                    opacity: 1,
                    duration: 300              
                }, 
                {
                    layer: 'buffered',
                    opacity: 0,
                    duration: 300              
                }, 
                {
                    layer: 'buffered copy',
                    opacity: 0,
                    duration: 300              
                }, 
                {
                    layer: 'uncoveraged3',
                    opacity: 0,
                    duration: 300              
                }, 
            ],
            onChapterExit: [
                {
                    layer: 'subzones',
                    opacity: 0
                },
                {
                    layer: 'subzones copy',
                    opacity: 1                
                },
                {
                    layer: 'education-land-now',
                    opacity: 1                
                },
                {
                    layer: 'education-land-2019',
                    opacity: 1               
                },
                {
                    layer: 'buffered',
                    opacity: 0.5                
                },
                {
                    layer: 'buffered copy',
                    opacity: 1                
                },
                {
                    layer: 'uncoveraged3',
                    opacity: 0.5                
                },
            ]
        },
        {
            id: 'fourth-container',
            alignment: 'left',
            hidden: false,
            title: 'Yishun Education Land Planning: Coverage of 400m Catchment (5-minute Walk)',
            description: 'It can be observed that within the primary residential areas of Yishun, as well as in Yishun Central, Yishun East, and some areas in the southwest of Yishun, there are portions that are not covered by the 400m catchment radius for educational land. Future planning considerations may involve the addition of educational land in these three areas.',
            location: {
                center: [103.83561, 1.41751],
                zoom: 12.95,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'subzones',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'subzones copy',
                    opacity: 1,
                    duration: 300              
                }, 
                {
                    layer: 'education-land-now',
                    opacity: 1,
                    duration: 300              
                }, 
                {
                    layer: 'education-land-2019',
                    opacity: 1,
                    duration: 300              
                }, 
                {
                    layer: 'buffered',
                    opacity: 0.5,
                    duration: 300              
                }, 
                {
                    layer: 'buffered copy',
                    opacity: 1,
                    duration: 300              
                }, 
                {
                    layer: 'uncoveraged3',
                    opacity: 0.5,
                    duration: 2500              
                }, 
            ],
            onChapterExit: [
                {
                    layer: 'subzones',
                    opacity: 0
                },
                {
                    layer: 'subzones copy',
                    opacity: 0               
                },
                {
                    layer: 'education-land-now',
                    opacity: 0                
                },
                {
                    layer: 'education-land-2019',
                    opacity: 0               
                },
                {
                    layer: 'buffered',
                    opacity: 0                
                },
                {
                    layer: 'buffered copy',
                    opacity: 0                
                },
                {
                    layer: 'uncoveraged3',
                    opacity: 0                
                },
            ]
        }
    ]
};