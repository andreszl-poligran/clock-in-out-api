# Use a base image that includes Node.js and any other necessary dependencies
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy configuration files and source code into the container
COPY . .

# Install project dependencies
RUN npm install

# Install Serverless globally
RUN npm install -g serverless

# Configure AWS access keys as environment variables
ENV AWS_ACCESS_KEY_ID=YOUR_AWS_ACCESS_KEY_ID
ENV AWS_SECRET_ACCESS_KEY=YOUR_AWS_SECRET_ACCESS_KEY
ENV SERVERLESS_ACCESS_KEY=YOUR_AWS_SECRET_ACCESS_KEY
ENV AWS_REGION=us-east-1

# Set the AWS region (if needed)

# Authenticate for Serverless Framework
RUN apk --no-cache update && \
    apk --no-cache add aws-cli

# Configure AWS credentials
RUN aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID && \
    aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY && \
    aws configure set region $AWS_REGION && \
    aws configure set output json

# Run serverless offline
CMD ["serverless", "offline", "--host", "0.0.0.0"]
