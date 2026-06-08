import Title from '../../components/Title/Title'
import bletchleyPark from '../../assets/images/bletchley-park2.jpg'
import redMessage from '../../assets/images/red-message.jpg'
import alanTuring from '../../assets/video-media/alan-turing.jpg'
import './bletchley.css'
import Subtitle from '../../components/Subtitle/Subtitle'

export default function() {
    return(
        <div className='bletchley-page'>
            <Title text='Bletchley Park' />
            <div className='idek-anymore'>
                <img src={bletchleyPark} alt='Bletchley Park' className='blet-img'/>
                <div className='colum-thing'>
                    <p className='yap blet-yap'>
                        During World War II, Bletchley Park served as Britain's secret codebreaking headquarters and became one of the most important 
                        intelligence centers of the Allied war effort. Located in Buckinghamshire, England, it brought together mathematicians, linguists, 
                        and engineers to decipher encrypted enemy communications. What began as a small operation before the war quickly expanded into a 
                        massive organization employing thousands of people. Working in strict secrecy, these teams analyzed intercepted messages and 
                        developed new methods for breaking increasingly complex German codes.
                    </p>
                    <p className='yap blet-yap'>
                        Bletchley Park is best known for its success against the German Enigma cipher. German military forces relied on Enigma machines to 
                        encrypt communications, believing them to be unbreakable. Codebreakers at Bletchley Park, including mathematician Alan Turing, 
                        helped develop electromechanical machines known as Bombes that dramatically sped up the process of deciphering Enigma messages. 
                        The intelligence gained from these decrypts, known as Ultra, provided the Allies with critical information about German military 
                        operations. This intelligence proved especially valuable during the Battle of the Atlantic, where it helped Allied forces counter 
                        German U-boat attacks on shipping routes.
                    </p>
                </div>
            </div>
            <br />
            <div className='red'>
                <p className='yap'>
                    In addition to standard Enigma traffic, Bletchley Park achieved success in deciphering highly secret German naval and diplomatic 
                    communications, including the so-called "Red" messages. These messages were encrypted using a separate machine employed by German 
                    naval attachés and commanders. Information gathered from Red decrypts offered insight into German military strategy and diplomatic 
                    activities around the world, giving Allied leaders access to information that would otherwise have remained hidden. Through a 
                    combination of mathematical skill, technological innovation, and teamwork, Bletchley Park's codebreakers made a major contribution 
                    to Allied victory and demonstrated the growing importance of intelligence and cryptography in modern warfare.
                </p>
                <img src={redMessage} alt='Example of a Red Message' className='red-message'/>
            </div>
            <Subtitle text='Alan Turing' />
            <div className='at'>
                <img src={alanTuring} alt='Alan Turing' className='at-img' />
                <div className='uhh'>
                    <p className='yap uhh-yap'>
                        Alan Turing was a British mathematician drafted by the British Secret Intelligence Service (MI6) to decrypt Enigma. He is the most 
                        accredited figure in the team involved in Bletchley Park, however his contributions do not fully live up to expectations. The MI6 
                        had an emergency list of potential recruits for times of crisis, Turing being one of 24 from Cambridge. Because of the severity of 
                        the war, the MI6 determined it was time to hit their reserve, and called upon the extra staff they kept on hold. Turing was 
                        recruited in 1938 and sent to a training course to learn about cryptography in early 1939. Despite the fact that he was not a 
                        professional code breaker, Turing learned quickly and became an important figure in designing the Bombe machine used to decrypt 
                        Enigma. 
                    </p>
                    <p className='yap uhh-yap'>
                        However, after the Bombe was built, there was not much for Turing to do as the machine was mainly mechanized. So he was sent to 
                        America to help with the development of their own Bombe machines. He also inspected different encryption devices that were being 
                        built in the United States for calls and other forms of communication. 
                    </p>
                </div>
            </div>
            <p className='yap'>
                After his time in America, Turing rarely came to Bletchley Park. His time on this team grew his own affinity for cryptography. 
                Instead of coming to work, Turing spent his time creating his own communication encryption algorithm for his own personal 
                entertainment.
                <br /><br />
                In 1952, Turing was convicted of charges regarding his homosexual relationship. During his trial, many of his former coworkers from 
                Bletchley Park spoke in his defense. At the time, homosexuality was treated less as a crime and more as a disease, leading Alan 
                Turing to receive experimental hormonal treatment as a way to avoid jail time.
                <br /><br />
                In 1954, Turing’s housekeeper found him lying on his bed, not breathing and unconscious. The official cause of death was cyanide 
                poisoning though the circumstances of his death are still unknown. Many speculate he committed suicide, intentionally eating an 
                apple laced with cyanide, while others theorize he inhaled cyanide from an experiment he was conducting. Despite which camp people 
                think in regarding Turing’s death, his contributions in giving the Allied powers an advantage in the War were undeniably crucial.
            </p>
        </div>
    )
}
/*
Alan Turing was a British mathematician drafted by the British Secret Intelligence Service (MI6) to decrypt Enigma. He is the most 
accredited figure in the team involved in Bletchley Park, however his contributions do not fully live up to expectations. The MI6 
had an emergency list of potential recruits for times of crisis, Turing being one of 24 from Cambridge. Because of the severity of 
the war, the MI6 determined it was time to hit their reserve, and called upon the extra staff they kept on hold. Turing was 
recruited in 1938 and sent to a training course to learn about cryptography in early 1939. Despite the fact that he was not a 
professional code breaker, Turing learned quickly and became an important figure in designing the Bombe machine used to decrypt 
Enigma. 

However, after the Bombe was built, there was not much for Turing to do as the machine was mainly mechanized. So he was sent to 
America to help with the development of their own Bombe machines. He also inspected different encryption devices that were being 
built in the United States for calls and other forms of communication. 

After his time in America, Turing rarely came to Bletchley Park. His time on this team grew his own affinity for cryptography. 
Instead of coming to work, Turing spent his time creating his own communication encryption algorithm for his own personal 
entertainment.

In 1952, Turing was convicted of charges regarding his homosexual relationship. During his trial, many of his former coworkers from 
Bletchley Park spoke in his defense. At the time, homosexuality was treated less as a crime and more as a disease, leading Alan 
Turing to receive experimental hormonal treatment as a way to avoid jail time.

In 1954, Turing’s housekeeper found him lying on his bed, not breathing and unconscious. The official cause of death was cyanide 
poisoning though the circumstances of his death are still unknown. Many speculate he committed suicide, intentionally eating an 
apple laced with cyanide, while others theorize he inhaled cyanide from an experiment he was conducting. Despite which camp people 
think in regarding Turing’s death, his contributions in giving the Allied powers an advantage in the War were undeniably crucial.


*/