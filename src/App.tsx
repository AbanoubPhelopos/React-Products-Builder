import ProductCard from './components/ProductCard';

const products = [
    {
        id: '1',
        name: 'Premium Wireless Headphones',
        description: 'High-quality audio with noise cancellation. Perfect for music lovers.',
        price: 149.99,
        image: 'https://images.pexels.com/photos/35862531/pexels-photo-35862531.jpeg',
        category: 'Electronics',
    },
    {
        id: '2',
        name: 'Smart Watch Pro',
        description: 'Track your fitness and stay connected with this sleek smartwatch.',
        price: 299.99,
        image: 'https://images.pexels.com/photos/35862531/pexels-photo-35862531.jpeg',
        category: 'Wearables',
    },
    {
        id: '3',
        name: 'Portable Speaker',
        description: 'Powerful bass and crystal clear sound in a compact design.',
        price: 79.99,
        image: 'https://images.pexels.com/photos/35862531/pexels-photo-35862531.jpeg',
        category: 'Audio',
    },
    {
        id: '4',
        name: 'Laptop Stand',
        description: 'Ergonomic aluminum stand for better posture and cooling.',
        price: 49.99,
        image: 'https://images.pexels.com/photos/35862531/pexels-photo-35862531.jpeg',
        category: 'Accessories',
    },
];

function App() {
    const handleAddToCart = (productName: string) => {
        console.log(`Added ${productName} to cart`);
    };

    return (
        <main className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
                    <p className="text-gray-500">Browse our collection of premium items</p>
                </header>

                {/* Product Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                            category={product.category}
                            onAddToCart={() => handleAddToCart(product.name)}
                        />
                    ))}
                </section>
            </div>
        </main>
    );
}

export default App;
