# Official image by Node
FROM node:12.13.0-alpine

# Set the docker working directory
WORKDIR /app

# Copy current dir to workdir
COPY . /app

# Install any needed packages specified in pkg.json
RUN npm install

# Make port 80 available to the world outside this container
# EXPOSE 80

#RUN CMD when conatiner launches
CMD ["npm", "start"]
