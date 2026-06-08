import './Title.css';

interface TitleProps {
    text: string;
    className?: string;
}

export default function Title({ text, className }: TitleProps) {
    return (
        <div className="title-container">
            <div className="title-lines" />
            <h1 className={`${className ? className : ''}`}>
                {text}
            </h1>
            <div className="title-lines" />
        </div>
    );
}