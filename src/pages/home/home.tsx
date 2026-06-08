import './home.css';

import HoverImage from '../../components/HoverImage/HoverImage';
import DecryptedText from '../../components/DecryptedText';

import video from '../../assets/WW2 Hero Montage.mp4';
import image from '../../assets/images/ww2-cryptography.avif';
import purple from '../../assets/images/purple.jpg';
import engima from '../../assets/images/enigma.webp';
import sigaba from '../../assets/images/Sigaba.jpg';
import bp from '../../assets/images/bletchley-park2.jpg'

export default function Home() {
    const title = "WW2 Cryptography";
    const time = 200; // animation time in ms

    return (
        <div className="home">
            <div className="hero">
                <div className="video-overlay">
                    <video className="background-video" autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className="overlay-text">
                        {title.split('').map((char, index) => (
                            <DecryptedText
                                key={index}
                                className='hero-title'
                                encryptedClassName='hero-title'
                                text={char}
                                speed={(time / title.length) * index}
                                animateOn="view"
                            />
                        ))}
                        <p className='hero-description'>Every Message Was a Weapon. Every Cipher a Battlefield.</p>
                    </div>
                </div>
            </div>
            <div className="home-content">
                <div className="stuff">
                    <p className='intro-words'>WWII was a war fought not only on land, air, and sea 
                        but also in the shadows of codes and ciphers. Cryptology, the science of 
                        creating and breaking codes, became one of the most powerful weapons of the 
                        war. Nations relied on encrypted communications to protect military plans, 
                        while teams of codebreakers worked quietly and tirelessly to intercept and 
                        decipher enemy messages. A silent, less violent war was waged in the realm of 
                        computer science and mathematics, where the stakes were just as high as on the 
                        battlefield.
                        <br /><br />
                        Imagine you are a general in the middle of the woods, and you need to 
                        warn your troops about an incoming attack. You know the enemy is 
                        listening to every radio transmission you send. What do you do? 
                        This is exactly the problem that every major nation faced in 
                        World War 2, and cryptography was their answer.
                        <br /><br />
                        As wireless communications exploded during 
                        the Second World War, so did the stakes of keeping communications 
                        secret. Battles were decided not on the battlefield but rather in 
                        quiet rooms where mathematicians raced to crack codes before the 
                        enemy could act on them.
                    </p>
                    <img src={image} alt="WWII Cryptography" />
                </div>
                <br />
                <div className="image-links">
                    <HoverImage src={purple} alt="Learn about the Purple Machine" className="machine-imgs" linkTo="/purple" />
                    <HoverImage src={engima} alt="Learn about the Enigma Machine" className="machine-imgs" linkTo="/enigma" />
                    <HoverImage src={sigaba} alt="Learn about the Sigaba Machine" className="machine-imgs" linkTo="/sigaba" />
                    <HoverImage src={bp} alt="Learn about Bletchley Park" className="machine-imgs" linkTo="/bletchley-park" />
                    {/* <img src={purple} alt="WWII Cryptography" className="machine-imgs" />
                    <img src={engima} alt="WWII Cryptography" className="machine-imgs" />
                    <img src={sigaba} alt="WWII Cryptography" className="machine-imgs" />
                    <img src={sigaba} alt="WWII Cryptography" className="machine-imgs" /> */}
                </div>
            </div>
        </div>
    );
}