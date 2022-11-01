import Image from 'next/image';

import Creator from '../public/assets/creator.png';
import Developer from '../public/assets/developer.png';
import Marketer from '../public/assets/marketer.png';

export default function Team() {
  return (
    <div className="text-center">
     

      <div className="row">
        
      <h2  style={{fontSize: "100px",marginBottom: "80px",fontFamily: "fantasy",color: "yellow",WebkitTextStroke: "4px black"}}>Team</h2>
      
  <div className="column">

    
    <div className="card">
      
    <Image
              src={Developer}
              alt="Koji Mochizuki"
              width={350}
              height={350}
              className="rounded-full"
            />
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
       
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <Image
              src={Creator}
              alt="Koji Mochizuki"
              width={350}
              height={350}
              className="rounded-full"
            />
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <Image
              src={Marketer}
              alt="Koji Mochizuki"
              width={350}
              height={350}
              className="rounded-full"
            />
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
       
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
