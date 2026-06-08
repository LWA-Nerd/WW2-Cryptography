import './credit.css'
import bibliography from '../../assets/images/bibliography.png';
import Title from '../../components/Title/Title';

export default function Credit() {
    return(
        <div className='credit-page'>
            <Title text='Bibliography' />
            <div className='credit-content'>
                <section className='credit-panel'>
                    <div className='credit-copy'>
                        <p className='credit-label'>Image Credits</p>
                        <p className='credit-txt'>Images from Google</p>
                    </div>
                    <a className='source-code' href='https://github.com/LWA-Nerd/WW2-Cryptography'>
                        Source Code
                    </a>
                </section>
                <a>
                    <img src={bibliography} alt='Bibliography page' className='credit-img'/>
                </a>
            </div>
        </div>
    )
}
