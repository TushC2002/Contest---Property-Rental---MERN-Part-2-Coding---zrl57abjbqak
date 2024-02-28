// Function to create a new property
async function createProperty(title, location, price, type) {
    const url = '/api/v1/property/add';
    const data = {
        title: title,
        location: location,
        price: price,
        type: type
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create property');
        }

        return await response.json();
    } catch (error) {
        console.error('Error creating property:', error);
        throw error;
    }
}

// Function to get all properties
async function getAllProperties() {
    const url = '/api/v1/property';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch properties');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching properties:', error);
        throw error;
    }
}

// Function to search properties
async function searchProperties(searchTerm) {
    const url = `/api/v1/property/search?searchTerm=${encodeURIComponent(searchTerm)}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to search properties');
        }

        return await response.json();
    } catch (error) {
        console.error('Error searching properties:', error);
        throw error;
    }
}

// Function to filter properties
async function filterProperties(location, minPrice, maxPrice, type) {
    const url = `/api/v1/property/filter?location=${encodeURIComponent(location)}&minPrice=${minPrice}&maxPrice=${maxPrice}&type=${encodeURIComponent(type)}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to filter properties');
        }

        return await response.json();
    } catch (error) {
        console.error('Error filtering properties:', error);
        throw error;
    }
}
