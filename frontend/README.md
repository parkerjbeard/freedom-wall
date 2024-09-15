# Freedom Wall

**Freedom Wall** is a dynamic web platform designed to empower individuals within educational communities to freely express their thoughts, ideas, and creativity. By providing an open and inclusive space, Freedom Wall fosters meaningful interactions and collaboration among students and teachers alike.

## Key Features

- **Open Expression:** Share posts in various formats including text, images, PDFs, and audio files without restrictions.
- **Inclusive Community:** Create and join categories that resonate with your interests and academic pursuits.
- **Secure Environment:** Ensures safe and respectful interactions through robust authentication and moderation tools.
- **Real-Time Updates:** Experience instant visibility of new posts and updates, keeping the community engaged and informed.
- **User-Friendly Interface:** Navigate seamlessly with an intuitive design tailored for both students and educators.

## Getting Started

### Prerequisites

- **Docker & Docker Compose:** Ensure Docker is installed and running on your machine. [Install Docker](https://docs.docker.com/get-docker/)
- **Git:** Version control system to clone the repository. [Install Git](https://git-scm.com/downloads)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/freedom-wall.git
   cd freedom-wall
   ```

2. **Configure Environment Variables**

   - **Backend:** Create a `.env` file inside the `backend/` directory with the necessary configurations.
   - **Frontend:** Create a `.env` file inside the `frontend/` directory to set the API endpoint.

3. **Start the Application Using Docker Compose**

   ```bash
   docker-compose up -d
   ```

## Accessing Freedom Wall

- **Website:** Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to explore Freedom Wall.
- **API:** Backend services are accessible at [http://localhost:5001/api](http://localhost:5001/api)

## Contributing

We welcome contributions from the community! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
---

*Empowering free expression and collaboration within educational communities.*