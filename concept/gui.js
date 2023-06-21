const gui=new dat.GUI();

const world={
  plane:{
    width:10,
    height:10,

  }  
}

//world.plane is path for object
//width is the element that needs to be changed
//1 and 20 are min and max values
//discarding previous geometry of mesh
//adding new geometry
gui.add(world.plane,'width',1,20).onChange(()=>
{
  planeMesh.geometry.dispose()
  planeMesh.geometry = new THREE.PlaneGeometry(world.plane.width, world.plane.height, 10, 10);
  const { array } = planeMesh.geometry.attributes.position;
  for (let i = 0; i < array.length; i += 3) {
  const x = array[i];
  const y = array[i + 1];
  const z = array[i + 2];
  array[i + 2] = z + Math.random();
}

})

gui.add(world.plane,'height',1,20).onChange(()=>{
  planeMesh.geometry.dispose()
  planeMesh.geometry = new THREE.PlaneGeometry(world.plane.width, world.plane.height, 10, 10);
  const { array } = planeMesh.geometry.attributes.position;
  for (let i = 0; i < array.length; i += 3) {
  const x = array[i];
  const y = array[i + 1];
  const z = array[i + 2];
  array[i + 2] = z + Math.random();

}
})

