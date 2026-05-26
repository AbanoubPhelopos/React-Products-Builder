import { type FC, type ImgHTMLAttributes, useState } from 'react';
import { cn } from '@/lib/utils';

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
    fallback?: string;
}

const Image: FC<IProps> = ({
    src,
    alt,
    className,
    fallback,
    onError,
    ...props
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setHasError(true);
        setIsLoading(false);
        if (fallback) {
            e.currentTarget.src = fallback;
        }
        onError?.(e);
    };

    const handleLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className={cn('relative overflow-hidden bg-gray-50', className)}>
            {isLoading && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                </div>
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={handleLoad}
                onError={handleError}
                className={cn(
                    'w-full h-full object-contain transition-opacity duration-300',
                    isLoading ? 'opacity-0' : 'opacity-100',
                    className
                )}
                {...props}
            />
        </div>
    );
};

export default Image;
