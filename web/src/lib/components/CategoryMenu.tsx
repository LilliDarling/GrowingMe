import Link from 'next/link'

const categories = [
    { name: 'Technology', icon: '💻' },
    { name: 'Health', icon: '❤️' },
    { name: 'Business', icon: '💼' },
    { name: 'Lifestyle', icon: '🌿' },
]

export default function CategoryMenu() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {categories.map((category) => (
                    <Link 
                        key={category.name}
                        href={`/category/${category.name.toLowerCase()}`}
                        className="
                        flex flex-col items-center justify-center 
                        p-4 rounded-lg 
                        bg-gray-100 hover:bg-gray-200 
                        transition-colors
                        text-center
                        "
                    >
                        <span className="text-3xl mb-2">{category.icon}</span>
                        <span className="font-medium">{category.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}