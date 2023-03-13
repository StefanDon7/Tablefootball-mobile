# koristi Node.js 14 kao bazni image
FROM node:14

# instaliraj Ionic CLI
RUN npm install -g @ionic/cli

# postavi radni direktorij
WORKDIR /app

# kopiraj package.json i package-lock.json
COPY package*.json ./

# instaliraj ovisnosti
RUN npm install

# kopiraj preostali kod u container
COPY . .

# pokreni Ionic aplikaciju
CMD ["ionic", "serve","--host", "0.0.0.0"]
