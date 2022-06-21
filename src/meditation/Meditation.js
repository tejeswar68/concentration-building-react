import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import './Med.css'
import img1 from './pic1.png'
import img2 from './pic2.png'
import img3 from './pic3.png'
import img4 from './pic4.png'
import img5 from './pic5.png'
import img6 from './pic6.png'
import img7 from './pic7.png'
import img8 from './pic8.jpeg'
import giphy1 from './giphy1.gif'
import giphy2 from './giphy2.gif'
import song1 from './song1.mp3'
import song2 from './song2.mp3'
import song3 from './song3.mp3'
function Meditation() {
  return (
    <div className='container'>
      
      <img src={img1} className="mx-auto d-block med"alt="Not found" style={{width:"80%"}}></img>  
      
        <h1 className='med_head1 text-center text-danger'>LIFE IS TOO SHORT</h1>
        <h1 className='med_head2 text-light'>NOT TO FEEL.</h1>
        <h1 class='surya_nama text-light'>WE MAKE YOU FEEL BETTER THAN EVER...</h1>
       
       <div className='row'>
              <div className='col-6 p-5 box1'>
              <h1 className='h_head text-center'>Focused attention</h1>
              <p className='h_text text-center p-3'>This form of meditation is fairly straightforward because it uses the object of our breath to focus attention, to anchor the mind and maintain awareness. Notice your mind starting to wander? Simply return to the breath.</p>
              <img src={img2} className="mx-auto d-block"alt="Not found" style={{width:"50%"}}></img>  
              </div>
            
              <div className='col-6 p-5 box2'>
              <h1 className='h_head text-center'>Body scan</h1>
              <p className='h_text text-center p-3'> Often, our body is doing one thing while our mind is elsewhere. This technique is designed to sync body and mind by performing a mental scan, from the top of the head to the end of your toes. Imagine a photocopier light slowly moving over your body, bringing attention to any discomfort, sensations, tensions, or aches that exist</p>
              <img src={img3} className="mx-auto d-block"alt="Not found" style={{width:"25%"}}></img>  
              </div>
       </div>
       <div className='row '>
       <div className='col-6 p-5 box3'>
       <h1 className='h_head text-center'>Noting</h1>
       <p className='h_text text-center p-3'>Whether you are focusing on the breath or simply sitting in quiet, this technique involves specifically “noting” what’s distracting the mind, to the extent that we are so caught up in a thought or emotion that we’ve lost our awareness of the breath (or whatever the object of focus is). We “note” the thought or feeling to restore awareness, create a bit of space, as a way of letting go, and to learn more about our thought patterns, tendencies, and conditioning.</p>
       <img src={img5} className="mx-auto d-block"alt="Not found" style={{width:"50%"}}></img>  
       </div>
       <div className='col-6 p-5 box4'>
       <h1 className='h_head text-center'>Visualization</h1>
       <p className='h_text text-center p-3'>This type of meditation invites you to picture something or someone in your mind — we are essentially replacing the breath with a mental image as the object of focus. It can feel challenging to some, but it’s really no different than vividly recalling the face of an old friend naturally, without effort. And so it is with meditation. By conjuring a specific visualization, we not only get to observe the mind, but we also get to focus on any physical sensations.</p>
       <img src={img4} className="mx-auto d-block"alt="Not found" style={{width:"50%"}}></img>  
       </div>
       </div>
       <div className='row '>
       <div className='col-6 p-5 box5'>
       <h1 className='h_head text-center'>Skillful compassion.</h1>
       <p className='h_text text-center p-3'> Similar to the loving kindness meditation technique, this one involves focusing on a person you know or love and paying attention to the sensations arising from the heart. By opening our hearts and minds for the benefit of other people, we have the opportunity to foster a feeling of happiness in our own mind.</p>
       <img src={img6} className="mx-auto d-block"alt="Not found" style={{width:"60%"}}></img>  
       </div>
       <div className='col-6 p-5 box6'>
       <h1 className='h_head text-center'>Resting awareness</h1>
       <p className='h_text text-center p-3'>Rather than focusing on the breath or a visualization, this technique involves letting the mind truly rest; thoughts may enter, but instead of distracting you and pulling you away from the present moment, they simply drift away.</p>
       <img src={img7} className="mx-auto d-block"alt="Not found" style={{width:"50%"}}></img>  
       </div>
       </div>
          <img src={img8} className='mx-auto d-block' width={{width:"100%"}}></img>
          <div className='songs'>

          </div>
          <div className='row music1'>
         
          <div className='col-4 p-5 '>
                  <h1 className='text-center motivational'>Motivational</h1>
                  <p className='text-center p-3'>Music is a very powerful neurological tool that helps us change our mindset and mood, so listening to your favorite tunes while performing different activities is a great motivational exercise. Moreover, music is able to change the way we perceive the world, making it more positive and outgoing.</p>
                  <img src={giphy1} className="mx-auto d-block" style={{width:"250px",height:"250px",borderRadius:"100%"}}></img>
                  <ReactAudioPlayer className='mx-auto d-block mt-4 zoom1'
                  src={song2}
                  autoPlay
                  controls
                />
          </div>
          <div className='col-4 p-5 ' >
          <h1 className='text-center motivational box11'>Work</h1>
          <p className='text-center p-3'>Relaxing music optimizes our cognitive processes. We concentrate and process information better, and retain new information more quickly and efficiently. As we said, our brain loves balanced, harmonic musical stimulation. There are actually frequencies that can help our brain work better.</p>
          <img src={giphy1} className="mx-auto d-block" style={{width:"250px",height:"250px",borderRadius:"100%"}}></img>
          <ReactAudioPlayer className='mx-auto d-block mt-4 zoom1'
                  src={song1}
                  autoPlay
                  controls
                />
  </div>
  <div className='col-4 p-5 '>
  <h1 className='text-center motivational'>Rest</h1>
  <p className='text-center p-3'> Not only will the melody help soothe and relax you, but the routinized aspect of playing songs right before bed will signal your body that it’s time to rest. You may find yourself able to fall asleep effortlessly, simply because you’ve trained your body that it’s time to go to bed.</p>
  <img src={giphy1} className="mx-auto d-block" style={{width:"250px",height:"250px",borderRadius:"100%"}}></img>
  <ReactAudioPlayer className='mx-auto d-block mt-5 zoom1'
                  src={song3}
                  autoPlay
                  controls
                />
</div>
         
          </div>
      </div>
      

  )
}

export default Meditation;

