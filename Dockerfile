# Use the official Nginx image as the base image
FROM nginx:alpine

# Set the working directory to /usr/share/nginx/html (Nginx's default web root)
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static files
RUN rm -rf ./*

# Copy all the files from the current directory to the container's web root
COPY . .

# Expose port 80 to allow access to the application
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
