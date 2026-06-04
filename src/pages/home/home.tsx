import video from '../../assets/WW2 Hero Montage.mp4';
import './home.css';
import DecryptedText from '../../components/DecryptedText';

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
                        <p className='hero-description'>Description stuff?</p>
                    </div>
                </div>
            </div>
            <div className="home-content">
                <div className="stuff">
                    <p className='intro-stuff'>WWII was a war fought not only on land, air, and sea 
                        but also in the shadows of code and ciphers. Cryptology, the science of 
                        creating and breaking codes, became one of the most powerful weapons of the 
                        war. Nations relied on encrypted communications to protect military plans, 
                        while teams of codebreakers worked quietly and tirelessly to intercept and 
                        decipher enemy messages.</p>
                    <img />
                </div>
                <p>Some more text</p>
                <p>Some more text</p>
                <p>Some more text</p>
                <p>Some more text</p>
                <p>Some more text</p>
                <p>Some more text</p>
                <p>Some more text</p>
                <p>Some more text</p>
            </div>
        </div>
    );
}