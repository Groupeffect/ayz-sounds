samples('github:eddyflux/crate')
setcps(.56)
const syntKit_1 = register('syntKit_1',(pat)=>pat
.sound("gm_synth_bass_1").lpf(slider(4420,10,6000,10))
)
const syntKit_2 = register('syntKit_2',(pat)=>pat
  .scale("C4:minor")
.sound("gm_synth_strings_1").lpf(slider(5910,10,6000,100))
)
const drumKit = register('drumKit',(pat)=>pat
//.bank("RolandTR909")
.bank("RolandTR808")
)
$: note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>").syntKit_1()

$: n(`<
 [~ 0] 2 [0 2] [~ 2]
 [~ 0] 1 [0 1] [~ 1]
 [~ 0] 3 [0 3] [~ 3]
 [~ 0] 2 [0 2] [~ 2]>*4`)
.syntKit_2()

$: sound("bd*4, [~ <sd cp>]*2, [~ hh]*4").drumKit()
