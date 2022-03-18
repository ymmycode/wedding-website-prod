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
        path: '/models/rings/ring-decal-1.glb'
    },

    {
        // decal name model
        name: 'decalRing2',
        type: 'gltfModel',
        path: '/models/rings/ring-decal-2.glb'
    },

    {
        // base ring model
        name: 'baseRing1',
        type: 'gltfModel',
        path: '/models/rings/base-ring-1.glb'
    },

    {
        //  base ring model
        name: 'baseRing2',
        type: 'gltfModel',
        path: '/models/rings/base-ring-2.glb'
    },

    // {
    //     // 
    //     name: '',
    //     type: '',
    //     path: ''
    // },

]