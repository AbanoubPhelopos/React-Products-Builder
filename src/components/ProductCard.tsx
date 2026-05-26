import { type FC } from 'react';
import Button from './Button';
import Image from './Image';

interface IProps {
    image: string;
    name: string;
    description?: string;
    price: number;
    category?: string;
    categoryImage?: string;
    onAddToCart?: () => void;
}

const colorOptions = [
    { name: 'Green', bg: 'bg-lime-600' },
    { name: 'Blue', bg: 'bg-blue-600' },
    { name: 'Yellow', bg: 'bg-yellow-600' },
    { name: 'Red', bg: 'bg-red-600' },
];

const ProductCard: FC<IProps> = ({
    image,
    name,
    description,
    price,
    category,
    categoryImage,
    onAddToCart,
}) => {
    return (
        <article className="flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1">
            {/* Image Section */}
            <div className="relative p-6 bg-gray-50">
                <Image
                    src={image}
                    alt={name}
                    className="w-full h-48 object-contain"
                />
                {category && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-700 rounded-full shadow-sm">
                        {category}
                    </span>
                )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 p-5">
                <div className="flex-1">
                    <h2 className="font-semibold text-gray-900 text-lg leading-tight mb-1">
                        {name}
                    </h2>
                    {description && (
                        <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                            {description}
                        </p>
                    )}

                    {/* Color Selection */}
                    <div className="flex items-center gap-2 mt-3">
                        <span className="text-xs text-gray-500 font-medium">Color:</span>
                        <div className="flex items-center gap-1.5">
                            {colorOptions.map((color) => (
                                <button
                                    key={color.name}
                                    title={color.name}
                                    aria-label={`Select ${color.name}`}
                                    className={`w-5 h-5 rounded-full ${color.bg} ring-2 ring-offset-1 ring-gray-200 cursor-pointer hover:scale-110 hover:ring-gray-300 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer: Price & Action */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900">${price}</span>
                        {categoryImage && (
                            <img
                                src={categoryImage}
                                alt={category}
                                className="w-6 h-6 rounded-full"
                            />
                        )}
                    </div>
                    <Button
                        variant="primary"
                        size="md"
                        onClick={onAddToCart}
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
