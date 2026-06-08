import './HoverImage.css';
import { Link } from 'react-router';

interface HoverImageProps {
    src: string;
    alt: string;
    className?: string;
    linkTo: string;
}

export default function HoverImage({ src, alt, className, linkTo }: HoverImageProps) {
    return (
        <div className={`hover-image-container ${className || ''}`}>
            <Link to={linkTo} className="hover-link" aria-label={alt}>
                <img src={src} alt={alt} className="hover-image" />
                <span className="hover-image-overlay" aria-hidden="true">
                    <span className="hover-image-text">{alt}</span>
                </span>
            </Link>
        </div>
    );
}
