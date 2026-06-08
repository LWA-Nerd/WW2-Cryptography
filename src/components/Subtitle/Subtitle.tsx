import './Subtitle.css';

interface SubtitleProps {
    text: string;
    className?: string;
}

export default function Subtitle({ text, className }: SubtitleProps) {
    return (
        <div className="subtitle-container">
            <div className="subtitle-lines" />
            <h2 className={`subtitle ${className ? className : ''}`}>
                {text}
            </h2>
            <div className="subtitle-lines" />
        </div>
    );
}