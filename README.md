# Pac-Man Arcade Game Backend

This is the backend server for the Pac-Man Arcade Game, responsible for handling real-time communication between the game client and mobile controllers using Socket.IO and NestJS.

## Features

- **WebSocket Communication**: Facilitates real-time interaction between the game and remote controllers.
- **Session Management**: Manages game sessions using unique session IDs.
- **Scalable Architecture**: Built with NestJS for modularity and scalability.
- **CORS Enabled**: Configured to allow cross-origin requests from the client application.
- **Environment Configuration**: Uses environment variables for easy configuration.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (version 14 or higher recommended).
- **pnpm**, **npm**, or **yarn**: Package manager for installing dependencies.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/pacman-arcade-game-backend.git
   cd pacman-arcade-game-backend
   ```

2. **Install Dependencies**

   Using pnpm:

   ```bash
   pnpm install
   ```

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

3. **Environment Variables**

   - **Create a `.env` File**

     Create a `.env` file in the root directory of the project. You can use the provided `.env.example` file as a reference.

     ```bash
     cp .env.example .env
     ```

   - **Configure Environment Variables**

     Open the `.env` file and configure the environment variables as needed:

     ```bash
     SERVER_URL="http://localhost:3001"
     CLIENT_URL="http://localhost:3000"
     ```

     - `SERVER_URL`: The URL where your backend server will run.
     - `CLIENT_URL`: The URL where your client application is running.

     **Note**: Ensure that these URLs match your development or production setup.

4. **Start the Development Server**

   Using pnpm:

   ```bash
   pnpm run dev
   ```

   Using npm:

   ```bash
   npm run dev
   ```

   Using yarn:

   ```bash
   yarn dev
   ```

   The backend server should now be running at `http://localhost:3001`.

## Usage

The backend server listens for WebSocket connections from the client application and mobile controllers. It manages game sessions and relays control commands from the controllers to the game.

- **Starting a Game Session**

  When a client connects, a new game session is created using a unique `sessionId`.

- **Handling Controls**

  The backend receives control commands (`up`, `down`, `left`, `right`) from the mobile controller and emits them to the corresponding game session.

- **Real-Time Communication**

  Uses Socket.IO for efficient, bidirectional communication between the server, game client, and mobile controllers.

## Project Structure

- **src/**: Contains the main source code for the backend server.
  - **app.module.ts**: The root module of the application.
  - **main.ts**: Entry point of the application.
  - **game/**: Module containing the game gateway and service.
    - **game.gateway.ts**: Handles WebSocket events and communication.
    - **game.service.ts**: Manages game session logic.
    - **game.module.ts**: Module for the game components.
- **.env.example**: Example environment variables file.
- **package.json**: Lists dependencies and scripts.
- **tsconfig.json**: TypeScript configuration.

## Dependencies

The project relies on the following dependencies:

```json
{
  "dependencies": {
    "@nestjs/common": "^10.4.1",
    "@nestjs/core": "^10.4.1",
    "@nestjs/platform-express": "^10.4.1",
    "@nestjs/platform-socket.io": "^10.4.1",
    "@nestjs/websockets": "^10.4.1",
    "reflect-metadata": "^0.2.0",
    "rxjs": "^7.8.1",
    "socket.io": "^4.7.5"
  },
  "devDependencies": {
    "@nestjs/cli": "^10.0.0",
    "@nestjs/schematics": "^10.0.0",
    "@nestjs/testing": "^10.0.0",
    "@types/express": "^4.17.17",
    "@types/jest": "^29.5.2",
    "@types/node": "^20.3.1",
    "@types/socket.io": "^3.0.2",
    "@types/supertest": "^6.0.0",
    "@typescript-eslint/eslint-plugin": "^7.0.0",
    "@typescript-eslint/parser": "^7.0.0",
    "eslint": "^8.42.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-prettier": "^5.0.0",
    "jest": "^29.5.0",
    "prettier": "^3.0.0",
    "source-map-support": "^0.5.21",
    "supertest": "^7.0.0",
    "ts-jest": "^29.1.0",
    "ts-loader": "^9.4.3",
    "ts-node": "^10.9.1",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.1.3"
  }
}
```

- **@nestjs/** packages: Core NestJS modules and WebSocket support.
- **socket.io**: Enables WebSocket communication.
- **reflect-metadata**, **rxjs**: Required for NestJS and reactive programming.
- **TypeScript** and related **@types** packages: For type checking and improved code quality.
- **ESLint**, **Prettier**, and related plugins: For linting and maintaining code style.
- **Jest** and **Supertest**: For testing the application.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **Socket.IO**: Real-time communication library.
- **TypeScript**: Typed JavaScript for improved code quality.
- **WebSockets**: Enables real-time, bidirectional communication between the client and server.
- **Node.js**: JavaScript runtime environment.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly appreciated.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **NestJS** for providing a robust framework for building the backend.
- **Socket.IO** for enabling real-time communication.
- **The NestJS Community** for helpful resources and support.

## Additional Notes

- **Cross-Origin Resource Sharing (CORS)**: The backend is configured to accept requests from `http://localhost:3000` by default. Adjust the `origin` in `main.ts` and `game.gateway.ts` if your client runs on a different URL.

- **WebSocket Gateway**: The `GameGateway` class handles WebSocket events. It listens for connections, disconnections, and custom events like `startGame` and `control`.

- **Session Management**: The `GameService` class manages game sessions using a simple in-memory object. In a production environment, consider using a more robust solution like a database or cache.

## Example `.env` File

An example `.env` file (`.env.example`) is provided:

```bash
SERVER_URL="http://localhost:3001"
CLIENT_URL="http://localhost:3000"
```

Make sure to create your own `.env` file based on this example and adjust the values as necessary.

## Scripts

Commonly used scripts defined in `package.json`:

- **Start Development Server**

  Using pnpm:

  ```bash
  pnpm run dev
  ```

  Using npm:

  ```bash
  npm run dev
  ```

  Using yarn:

  ```bash
  yarn dev
  ```

- **Build the Project**

  ```bash
  npm run build
  ```

- **Start Production Server**

  ```bash
  npm run start:prod
  ```
