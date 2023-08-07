# E-Commerce Website Backend

This is the backend for an e-commerce website developed for an internet retail company. The project is designed to provide the company with a competitive e-commerce platform 
## Table of Contents

- [Description](#e-commerce-website-backend)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone this repository to your local machine.

2. Install the project dependencies using npm:

```bash
npm install
## API Endpoints

The backend provides the following API endpoints:

- GET `/api/categories`: Fetch all categories.
- GET `/api/products`: Fetch all products.
- GET `/api/tags`: Fetch all tags.
- POST `/api/categories`: Create a new category.
- POST `/api/products`: Create a new product.
- POST `/api/tags`: Create a new tag.
- PUT `/api/categories/:id`: Update a category by ID.
- PUT `/api/products/:id`: Update a product by ID.
- PUT `/api/tags/:id`: Update a tag by ID.
- DELETE `/api/categories/:id`: Delete a category by ID.
- DELETE `/api/products/:id`: Delete a product by ID.
- DELETE `/api/tags/:id`: Delete a tag by ID.

## Environment Variables

The backend requires the following environment variables to be set in the `.env` file:

- `DB_USERNAME`: Your MySQL username.
- `DB_PASSWORD`: Your MySQL password.
- `DB_DATABASE`: The name of your MySQL database.

These environment variables are used to establish a connection to the MySQL database using Sequelize.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
