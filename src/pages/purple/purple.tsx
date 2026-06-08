import './purple.css'
import purple from '../../assets/images/purple.jpg'
import Title from '../../components/Title/Title'
import magic from '../../assets/video-media/magic intelligence.jpg'
import Subtitle from '../../components/Subtitle/Subtitle'

export default function Purple() {
    return(
        <div className='purple-page'>
            <Title text='The Purple Machine' />
            <div className='first-yap'>
                <img src={purple} alt='picture of the Purple machine' className='purple-img'/>
                <p className='yap'>
                    Japan's primary encryption device was known as Purple, representing the most advanced technology that the country of Japan 
                    possessed. The machine operated on the same basis as the Enigma. The machine operated electricity utilizing a plugboard, a 
                    keyboard, four rotors, and a control wheel that controlled the movement-these rotor. To encrypt a message, an operator would first 
                    plug in the appropriate cable, configure the coding wheel to the designated setting, and then enter plaintext into the keyboard. 
                    Then the machine would produce the encrypted output on a strip of paper. That was it, you had an encrypted message. During the war, 
                    Japan heavily relied on purple, usually exclusively for the highest level of diplomatic communication, which meant that breaking 
                    encryption wouldn't yield military intelligence, but it would provide direct access to Japan's most sensitive political and 
                    strategic decisions.
                </p>
            </div>
            <Subtitle text='The Magic Team' />
            <div className='second-yap'>
                <div className='col-yaps'>
                    <p className='yap'>
                        American cryptanalysts devoted approximately eighteen months to analyzing the machine before finally succeeding in breaking it. The 
                        resulting intelligence program was named Magic, which operated in close coordination with the British Ultra program throughout the 
                        war.
                        <br /><br />
                        The consequence of breaking purple extended far beyond the walls of any intelligence office. The reason is that when Japan began 
                        planning a major attack against Midway Island, American commanders were already alarmed about the operation as they had intercepted 
                        and decoded the relevant communications. Due to this, the United States was able to position its focus accordingly, and Japan 
                        suffered a devastating defeat, losing four aircraft carriers in a single engagement. Due to this attack, the balance of power 
                        greatly shifted.
                    </p>
                </div>
                <div className='magic'>
                    <img src={magic} alt='Picture of the Magic team' className='magic-img' />
                    <p className='caption'>Magic Team</p>
                </div>
            </div>
            <p className='yap last-yap'>
                Additionally, a more consequential thing was the death of Admiral Isoroku Yamamoto, who was the architect of the attack in Pearl 
                Harbor and was the most strategically significant figure in the Japanese military. During the war, the American intelligence 
                intercepted a message detailing the precise flight itinerary of Yamamoto's aircraft. As a result, the United States dispatched its 
                fighter pilots to intercept it, and they were successful. His plane was shot down, and he was killed in the attack. This was very 
                impactful for Japan, as the most important Japanese military leader at the time was eliminated due to the United States' ability to 
                decrypt Purple. 
            </p>
        </div>
    )
}

/* 
Japan's primary encryption device was known as Purple, representing the most advanced technology that the country of Japan 
possessed. The machine operated on the same basis as the Enigma. The machine operated electricity utilizing a plugboard, a 
keyboard, four rotors, and a control wheel that controlled the movement-these rotor. To encrypt a message, an operator would first 
plug in the appropriate cable, configure the coding wheel to the designated setting, and then enter plaintext into the keyboard. 
Then the machine would produce the encrypted output on a strip of paper. That was it, you had an encrypted message. During the war, 
Japan heavily relied on purple, usually exclusively for the highest level of diplomatic communication, which meant that breaking 
encryption wouldn't yield military intelligence, but it would provide direct access to Japan's most sensitive political and 
strategic decisions.

American cryptanalysts devoted approximately eighteen months to analyzing the machine before finally succeeding in breaking it. The 
resulting intelligence program was named Magic, which operated in close coordination with the British Ultra program throughout the 
war.

The consequence of breaking purple extended far beyond the walls of any intelligence office. The reason is that when Japan began 
planning a major attack against Midway Island, American commanders were already alarmed about the operation as they had intercepted 
and decoded the relevant communications. Due to this, the United States was able to position its focus accordingly, and Japan 
suffered a devastating defeat, losing four aircraft carriers in a single engagement. Due to this attack, the balance of power 
greatly shifted.

Additionally, a more consequential thing was the death of Admiral Isoroku Yamamoto, who was the architect of the attack in Pearl 
Harbor and was the most strategically significant figure in the Japanese military. During the war, the American intelligence 
intercepted a message detailing the precise flight itinerary of Yamamoto's aircraft. As a result, the United States dispatched its 
fighter pilots to intercept it, and they were successful. His plane was shot down, and he was killed in the attack. This was very 
impactful for Japan, as the most important Japanese military leader at the time was eliminated due to the United States' ability to 
decrypt Purple. 

*/