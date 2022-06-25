import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import EventEmitter from "./EventEmitter";

export default class Resources extends EventEmitter
{
    constructor(sources)
    {
        super()

        // sources
        this.sources =  sources

        // setup
        this.items = {}

        // how many asset to load
        this.toLoad = this.sources.length

        // items loaded
        this.loaded = 0

        // setting the loader
        this.setLoaders()

        // start loading assets
        this.startLoading()

        // console.log(this.items)
    }

    setLoaders()
    {
        this.loaders = {}
        this.loaders.gltfLoader = new GLTFLoader()
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
        this.loaders.textureLoader = new THREE.TextureLoader()
        this.loaders.audioLoader = new THREE.AudioLoader()
    }

    startLoading()
    {
        // load each sources
        this.sources.forEach((source) => 
        {

            switch(source.type)
            {

                // getting gltf models
                case 'gltfModel': 
                    this.loaders.gltfLoader.load(
                        source.path,
                        (file) =>
                        {
                            this.sourceLoaded(source, file)
                        }
                    )
                break

                // getting cube texture
                case 'cubeTexture': 
                    this.loaders.cubeTextureLoader.load(
                        source.path,
                        (file) =>
                        {
                            this.sourceLoaded(source, file)
                        }
                    )
                break

                // getting texture
                case 'texture': 
                    this.loaders.textureLoader.load(
                        source.path,
                        (file) =>
                        {
                            this.sourceLoaded(source, file)
                        }
                    )
                break

                // getting audio
                case 'audio': 
                    this.loaders.audioLoader.load(
                        source.path,
                        (file) =>
                        {
                            this.sourceLoaded(source, file)
                        }
                    )
                break

                default:
                    console.log(`Sources or assests are empty`)

            }
        })
    }

    sourceLoaded(source, file)
    {
        this.items[source.name] = file

        this.loaded++

        const percentageText = document.querySelector(`.count-load`)
        const progress = Math.trunc((this.loaded / this.toLoad) * 100)
        percentageText.innerText = `${progress}%`

        if(this.loaded === this.toLoad && progress === 100)
        {
            document.querySelector(`.preload`).style.zIndex = -99
            document.querySelector(`.preload`).style.opacity = 0
            this.trigger(`ready`)
        }
    }
}