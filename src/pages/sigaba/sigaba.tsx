import "./sigaba.css"
import sigaba from '../../assets/images/Sigaba.jpg'
import Title from "../../components/Title/Title"

export default function Sigaba() {
    return(
        <div className='sigaba-page'>
            <Title text='The SIGABA Machine' />
            <div className='sigaba-yap'>
                <img alt='SIGABA' className='sigaba-img' src={sigaba} />
                <p className='yap'>
                    While Germany had the Enigma machine and Japan had Purple, the United States protected its own communication with a machine 
                    called SIGABA. The SIGABA Machine used 15 rotors compared to Enigma's three, which made it far more complex. It worked on the 
                    same basic idea as Enigma by sending electrical current through spinning rotors to scramble messages, but neither machine was 
                    actually a computer, even though people sometimes think of them that way. But the big difference between Enigma and Sigaba was 
                    that Sigaba was never broken. No enemy was ever successful in cracking an American SIGABA message during the Second World War, 
                    making it the most secure cryptographic machine of its time.
                </p>
            </div>
            <iframe 
                className='sigaba-video'
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/8UYA9xJKNB8?si=mbUAodI2sylUh6VV" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
        </div>
    )
}

/*
  While Germany had the Enigma machine and Japan had Purple, the United States protected its own communication with a machine 
  called SIGABA. The SIGABA Machine used 15 rotors compared to Enigma's three, which made it far more complex. It worked on the 
  same basic idea as Enigma by sending electrical current through spinning rotors to scramble messages, but neither machine was 
  actually a computer, even though people sometimes think of them that way. But the big difference between Enigma and Sigaba was 
  that Sigaba was never broken. No enemy was ever successful in cracking an American SIGABA message during the Second World War, 
  making it the most secure cryptographic machine of its time.
 */