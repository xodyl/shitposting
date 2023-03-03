// create a new hydra-synth instance
var hydra = new Hydra({
  canvas: document.getElementById("myCanvas"),
  detectAudio: false,
  enableStreamCapture: false,
})
noise(999, 8, .2)
.colorama(.25)
.saturate( () => Math.sin(time) * 10 )
.mult(osc(), 1)
.modulateKaleid(osc(4,0.5,0),35)
.layer(shape(4)
  .color(.05,.4,.1,()=>Math.sin(time*1.5))
  .modulateScrollX(noise(.1), .3, .25)
  .colorama(.1)
  .saturate(3.5))
.scale(1,()=>window.innerHeight/window.innerWidth)
.out()
