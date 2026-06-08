import './enigma.css';
import engima from '../../assets/images/enigma-color.webp';
import arthurScherbius from '../../assets/images/arthur-scherbius.jpg';
import hugoKoch from '../../assets/images/hugo-koch.jpg';

import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import { Link } from 'react-router-dom';

export default function Enigma() {
    return (
        <div className="enigma-page">
            <Title text="The Enigma Machine" />
            <img src={engima} alt="Enigma Machine" className="enigma-image" />
            <p className='yap'>
                The Enigma machine is one of the most famous encryption devices in history, 
                playing a significant role in World War II. It was used by the German military 
                to encrypt their communications, making it difficult for the Allies to intercept 
                and understand their plans. The machine's complexity and the belief that it was unbreakable gave the 
                Germans a false sense of security, which ultimately contributed to their downfall. The efforts to break 
                the Enigma code were led by a team of British cryptanalysts at Bletchley Park, including the renowned 
                mathematician Alan Turing. Their success in deciphering Enigma messages provided crucial intelligence that helped 
                the Allies win the war.
            </p>
            <Subtitle text="The History of the Enigma Machine" />
            <div className="enigma-history">
                <div className="hugo">
                    <img src={hugoKoch} alt="Hugo Koch" className="enigma-history-image" />
                    <p className='caption hugo-caption'>Hugo Koch</p>
                </div>
                <p className='yap'>
                    In the year 1918, a Dutch engineer by the name of Hugo Koch invented the Enigma machine as a commercial product, 
                    something businesses could use to protect sensitive communications. In the following year, Koch filed for a patent, 
                    and then in 1923, a German engineer by the name of Arthur Scherbius purchased Koch's patent. In history, Scherbius 
                    is usually the name that history truly remembers, as he was the one who approached the government with the machine, 
                    but his first attempt to sell the machine to the German military didn't go in the right direction, as they passed 
                    on it. The irony in this is that the French bought a commercial version to study how it worked, while Germany 
                    quickly moved past it without giving it a second thought. That changed as the war came around, as Germany ended up 
                    adopting Enigma and putting full trust into the machine.
                </p>
                <div className="arthur">
                    <img src={arthurScherbius} alt="Arthur Scherbius" className="enigma-history-image" />
                    <p className='caption arthur-caption'>Arthur Scherbius</p>
                </div>
            </div>
            <Subtitle text="The Mechanics of the Enigma Machine" />
            <div className="enigma-mechanics">
                <p className='yap'>
                    The machine operated by routing electrical current through a series of spinning rotors, ensuring that pressing any 
                    given letter on the keyboard would light up a different letter on the output panel. Each additional rotor increased 
                    the complexity of the encryption. The machine, throughout the war, expanded in complexity from three rotors at the 
                    start of the war to five as the conflict intensified. The machine required two operators working in tandem, with 
                    one entering plaintext while the other recorded each encrypted letter as it appeared. With many configurations, 
                    German leadership considered their Enigma machine to be effectively unbreakable. This assumption proved to be a 
                    catastrophic miscalculation.
                </p>
                <div className="enigma-video-container">
                    <iframe
                        className="enigma-video"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/9kvYlEFDuSc?si=Vw9isuTrjDCPmzyr&amp;controls=0&amp;start=49"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        >
                    </iframe>
                    <p className='caption video-caption'>A demonstration of how the Enigma machine works</p>
                </div>
            </div>
            <p className='yap'>
                What the German intelligence never discovered was that their cipher had already begun to unravel during the late 
                1930s. Polish mathematicians had obtained a commercial Enigma machine, analyzed it extensively, and determined much 
                of its underlying mechanics. Before the war began, this group of mathematicians transferred their findings to British and French intelligence 
                services. The British cryptanalysts located in Bletchley Park consisted of Alan Turing and many other engineers, teachers, linguists, and 
                more who built upon that foundation and ultimately succeeded in breaking Enigma altogether, allowing them to 
                intercept and decode German military communications.
            </p>
            <div className='btn'>
                <Link className='next-btn' to='/bletchley-park'>
                    Learn more about Bletchley Park &#x003E;
                </Link>
            </div>
        </div>
    )
}