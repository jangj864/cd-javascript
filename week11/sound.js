// Small synthesized vocal / rattle / water gestures. No sound before a user click.
export class EarthSound {
 constructor(){this.enabled=false;this.context=null;this.last={heat:-Infinity,shake:-Infinity,tears:-Infinity};}
 async toggle(){
  if(this.enabled){this.enabled=false;this.master.gain.cancelScheduledValues(this.context.currentTime);this.master.gain.setTargetAtTime(0,this.context.currentTime,0.015);return false;}
  const Audio=window.AudioContext||window.webkitAudioContext;
  if(!Audio)throw new Error('Audio unavailable');
  if(!this.context){this.context=new Audio();this.master=this.context.createGain();this.master.gain.value=0;this.master.connect(this.context.destination);}
  await this.context.resume();
  this.enabled=true;this.master.gain.cancelScheduledValues(this.context.currentTime);this.master.gain.setTargetAtTime(0.09,this.context.currentTime,0.03);
  this.last={heat:-Infinity,shake:-Infinity,tears:-Infinity};return true;
 }
 tick(reaction,time){
  if(!this.enabled||document.hidden||this.context.state!=='running')return;
  if(reaction.scream&&time-this.last.heat>12000){this.scream(reaction.heat);this.last.heat=time;}
  if(reaction.shake>0&&time-this.last.shake>6500){this.rattle(reaction.shake);this.last.shake=time;}
  if(reaction.tears>.66&&time-(this.last.sob??-Infinity)>6500){this.sob();this.last.sob=time;}
  if(reaction.tears>0.1&&time-this.last.tears>3000/(0.5+reaction.tears)){this.drop(reaction.tears);this.last.tears=time;}
 }
 scream(intensity){
  const ctx=this.context,t=ctx.currentTime;
  const voice=ctx.createOscillator();voice.type='sawtooth';voice.frequency.setValueAtTime(190,t);voice.frequency.linearRampToValueAtTime(280,t+0.3);voice.frequency.linearRampToValueAtTime(210,t+1.25);
  const wobble=ctx.createOscillator(),depth=ctx.createGain();wobble.frequency.value=6;depth.gain.value=7;wobble.connect(depth).connect(voice.frequency);
  const envelope=ctx.createGain();envelope.gain.setValueAtTime(0,t);envelope.gain.linearRampToValueAtTime(0.2+intensity*0.3,t+0.15);envelope.gain.setValueAtTime(0.2+intensity*0.3,t+0.8);envelope.gain.linearRampToValueAtTime(0,t+1.5);envelope.connect(this.master);
  const filters=[720,1250,2600].map((frequency,index)=>{const filter=ctx.createBiquadFilter();filter.type='bandpass';filter.frequency.value=frequency;filter.Q.value=5;const gain=ctx.createGain();gain.gain.value=[1,.5,.15][index];voice.connect(filter).connect(gain).connect(envelope);return [filter,gain];});
  voice.start(t);wobble.start(t);voice.stop(t+1.55);wobble.stop(t+1.55);
  voice.onended=()=>{voice.disconnect();wobble.disconnect();depth.disconnect();envelope.disconnect();filters.flat().forEach(node=>node.disconnect());};
 }
 rattle(intensity=1){
  const ctx=this.context,t=ctx.currentTime;const buffer=ctx.createBuffer(1,Math.floor(ctx.sampleRate*.45),ctx.sampleRate),samples=buffer.getChannelData(0);
  for(let i=0;i<samples.length;i++)samples[i]=(Math.random()*2-1)*Math.exp(-i/samples.length*5);
  const source=ctx.createBufferSource();source.buffer=buffer;const filter=ctx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=280;const gain=ctx.createGain();gain.gain.value=.15+intensity*.3;source.connect(filter).connect(gain).connect(this.master);source.start(t);source.onended=()=>{source.disconnect();filter.disconnect();gain.disconnect();};
 }
 drop(intensity=1){
  const ctx=this.context,t=ctx.currentTime,oscillator=ctx.createOscillator(),gain=ctx.createGain();oscillator.type='sine';oscillator.frequency.setValueAtTime(1050+intensity*300,t);oscillator.frequency.exponentialRampToValueAtTime(480,t+.13);gain.gain.setValueAtTime(0,t);gain.gain.linearRampToValueAtTime(.22,t+.008);gain.gain.exponentialRampToValueAtTime(.001,t+.22);oscillator.connect(gain).connect(this.master);oscillator.start(t);oscillator.stop(t+.23);oscillator.onended=()=>{oscillator.disconnect();gain.disconnect();};
 }
 sob(){
  const ctx=this.context,t=ctx.currentTime,voice=ctx.createOscillator(),filter=ctx.createBiquadFilter(),gain=ctx.createGain();
  voice.type='triangle';filter.type='lowpass';filter.frequency.value=650;
  voice.frequency.setValueAtTime(240,t);voice.frequency.linearRampToValueAtTime(150,t+.9);
  gain.gain.setValueAtTime(0,t);
  for(let i=0;i<3;i++){const at=t+i*.3;gain.gain.linearRampToValueAtTime(.18,at+.05);gain.gain.exponentialRampToValueAtTime(.001,at+.24);}
  voice.connect(filter).connect(gain).connect(this.master);voice.start(t);voice.stop(t+1);voice.onended=()=>{voice.disconnect();filter.disconnect();gain.disconnect();};
 }
 async visibility(hidden){if(!this.context)return;if(hidden)await this.context.suspend();else if(this.enabled)await this.context.resume();}
}
