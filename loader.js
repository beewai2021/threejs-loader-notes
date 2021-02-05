// ================================================================================
// Model loader
// --------------------------------------------------------------------------------

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"

const gltfLoader = new GLTFLoader()

// the DRACOLoader is only responsible for decompressing an already compressed file from a 3D software like Blender.
// if a non compressed file is passed into the DRACOLoader, it will be passed into the GLTFLoader as a normal 3D model
const dracoLoader = new DRACOLoader()

// copy DRACO files from three in node modules into static folder
dracoLoader.setDecoderPath("/draco/")
gltfLoader.setDRACOLoader(dracoLoader)

gltfLoader.load(
  "model.glb",
  (gltf) => {
    const model = gltf.scene
    scene.add(model)
  },
  ({ loaded, total }) => console.log(`${(loaded / total) * 100}% loaded`),
  (error) => console.log(`${error} encountered while loading model`)
)

// ================================================================================
