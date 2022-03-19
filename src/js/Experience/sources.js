export default 
[
    {
        // texture for environment (cube hdri)
        name: 'environmentMapTexture',
        type: 'cubeTexture',
        path:
        [
            'textures/environmentMap/px.jpg',
            'textures/environmentMap/nx.jpg',
            'textures/environmentMap/py.jpg',
            'textures/environmentMap/ny.jpg',
            'textures/environmentMap/pz.jpg',
            'textures/environmentMap/nz.jpg'
        ]
    },

    {
        // ring1 alpha texture
        name: 'ring1Alpha',
        type: 'texture',
        path: 'textures/decal-name/fitri-alpha.jpg'
    },

    {
        // ring2 alpha texture
        name: 'ring2Alpha',
        type: 'texture',
        path: 'textures/decal-name/rizki-alpha.jpg'
    },

    {
        // ring1 normal texture
        name: 'ring1Normal',
        type: 'texture',
        path: 'textures/decal-name/fitri.jpg'
    },

    {
        // ring2 normal texture
        name: 'ring2Normal',
        type: 'texture',
        path: 'textures/decal-name/rizki.jpg'
    },

    {
        // decal name model
        name: 'decalRing1',
        type: 'gltfModel',
        path: 'models/rings/ring-decal-1.glb'
    },

    {
        // decal name model
        name: 'decalRing2',
        type: 'gltfModel',
        path: 'models/rings/ring-decal-2.glb'
    },

    {
        // base ring model
        name: 'baseRing1',
        type: 'gltfModel',
        path: 'models/rings/base-ring-1.glb'
    },

    {
        //  base ring model
        name: 'baseRing2',
        type: 'gltfModel',
        path: 'models/rings/base-ring-2.glb'
    },

    {
        // gate model
        name: 'gateScene',
        type: 'gltfModel',
        path: 'models/gate/GateScene.glb'
    },

    {
        // colorPalette
        name: 'flowerPalette',
        type: 'texture',
        path: 'textures/palette/FlowerPalette.jpg'
    },

    {
        //  colorPalette2
        name: 'mapColorPalette',
        type: 'texture',
        path: 'textures/palette/ColorPalette.jpg'
    },

    {
        // floor shadow
        name: 'floorShadow',
        type: 'texture',
        path: 'textures/gate-design/ShadowGate1.jpg'
    },

    {
        // floor shadow
        name: 'floorShadowAlpha',
        type: 'texture',
        path: 'textures/gate-design/ShadowGate1Alpha.jpg'
    },

    {
        // photo placeholder
        name: 'photoPlaceholder',
        type: 'texture',
        path: 'textures/gate-design/Photo.jpg'
    },

    {
        // wood texture
        name: 'wood',
        type: 'texture',
        path: 'textures/gate-design/color.jpg'
    },

    {
        // flower decoration normal
        name: 'flowerDecoAlpha',
        type: 'texture',
        path: 'textures/floral-deco/alpha.jpg'
    },

    {
        // flower decoration color / alpha
        name: 'flowerDecoColor',
        type: 'texture',
        path: 'textures/floral-deco/color.jpg'
    },

    {
        // map model
        name: 'mapScene',
        type: 'gltfModel',
        path: 'models/map/map.glb'
    },

    {
        // map environment baked
        name: 'mapEnv',
        type: 'texture',
        path: 'textures/map-design/EnvBake.jpg'
    },

    {
        // map design
        name: 'mapDesign',
        type: 'texture',
        path: 'textures/map-design/MapDesign1.png'
    },

    // {
    //     // 
    //     name: '',
    //     type: '',
    //     path: ''
    // },
    
]