import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';
import Creator from '../public/assets/creator.png';
import Layout from '../components/Layout';
import Prose from '../components/Prose';
import Mint from '../components/Mint';
import Faq from '../components/Faq';
import Team from '../components/Team';
import Roadmap from '../components/Roadmap';
import topImage from '../public/assets/1920x600.png';
import contractConfig from '../config/contract-config.json';
import sumo from '../public/assets/sumo.png';
import Marketer from '../public/assets/i.jpeg';



const Home: NextPage = () => {
  const { nftName } = contractConfig;

  return (
    <Layout>
      <Head>
        <title>{nftName}</title>
      </Head>

      <Image src={topImage} alt={nftName} />
      
      <div className="tom" style={{border: "6px solid blueviolet", borderRadius: "40px",marginTop: "50px"}}>
        <Prose>
         
        
          <div className="section">
		<div className="container">
			<div className="content-section">
				<div className="title">
					<h1 style={{fontSize: "70px", fontFamily:"fantasy",color: "yellow",WebkitTextStroke: "3px black"}}>About Us</h1>
				</div>
				<div className="content">
					<h3></h3>
					<p>Whuups NFT is liquide Decentralized social media app Whuups. The concept is to let Whuups social  & media .
           app let multiple series of NFT’s to get public direct access and own part of Whuups social media. 
app partial unfollow sequences code . & We wanted to instead of going Stockmarket go Blockchain . 
Whuups ins’t the actual social media but a Multiverse concept that will combine web 2.0 and web 3.0 .
using Blockchain payement and also to capitalize the fallowing step of dev.
The first NFT seri is on sale with full & right and flexible , People who own can use Code is & the value of .
shares of Whuups seri B .
         </p>

         
				
				</div>
				<div className="social">
					<a href=""><i className="fab fa-facebook-f"></i></a>
					<a href=""><i className="fab fa-twitter"></i></a>
					<a href=""><i className="fab fa-instagram"></i></a>
				</div>
			</div>
		
		</div>
	</div>

        </Prose>
      </div>

      <div className="py-16">
        <Prose>
          <Mint />
        </Prose>
      </div>


      <div className="class">
        <Prose>
          <Faq />
        </Prose>
      </div>

      <div className="py-16">
        <Prose>
          <Roadmap />
        </Prose>
      </div>

      <div className="uta">
        <Prose>
          <Team />
        </Prose>
      </div>
    </Layout>
  );
};

export default Home;
