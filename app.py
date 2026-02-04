from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='dist', static_url_path='')
CORS(app)

# Sample products data (mock database)
PRODUCTS = [
    {
        "id": 1,
        "name": "Streetwear Graphic Tee",
        "category": "streetwear",
        "price": 49,
        "description": "Bold graphic design meets comfort",
        "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
    },
    {
        "id": 2,
        "name": "Luxury Minimal Blazer",
        "category": "luxury",
        "price": 199,
        "description": "Premium tailoring, timeless elegance",
        "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400"
    },
    {
        "id": 3,
        "name": "Ethnic Embroidered Kurta",
        "category": "ethnic",
        "price": 89,
        "description": "Traditional craftsmanship, modern fit",
        "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400"
    },
    {
        "id": 4,
        "name": "Streetwear Hoodie",
        "category": "streetwear",
        "price": 79,
        "description": "Comfortable streetwear essential",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400"
    },
    {
        "id": 5,
        "name": "Luxury Silk Scarf",
        "category": "luxury",
        "price": 129,
        "description": "Luxurious silk with heritage patterns",
        "image": "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=400"
    },
    {
        "id": 6,
        "name": "Ethnic Palazzo Set",
        "category": "ethnic",
        "price": 119,
        "description": "Elegant occasion wear",
        "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400"
    },
]

@app.route('/api/products')
def get_products():
    """API endpoint to get all products"""
    return jsonify(PRODUCTS)

@app.route('/api/products/<int:product_id>')
def get_product(product_id):
    """API endpoint to get a specific product"""
    product = next((p for p in PRODUCTS if p['id'] == product_id), None)
    if product:
        return jsonify(product)
    return jsonify({"error": "Product not found"}), 404

@app.route('/api/products/category/<category>')
def get_products_by_category(category):
    """API endpoint to get products by category"""
    filtered = [p for p in PRODUCTS if p['category'] == category]
    return jsonify(filtered)

# Serve React app for all other routes (SPA routing)
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    # For development
    app.run(debug=True, host='0.0.0.0', port=5000)
else:
    # For production with gunicorn
    pass

