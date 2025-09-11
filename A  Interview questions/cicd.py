
# ------------ Create the CD pipeline that
# Clones the repo
# Builds the docker image
# Pushes the docker image


# Make sure to add the dockerhub secrets to github secrets  of the repo (DOCKER_USERNAME, DOCKER_PASSWORD)
# You should see a workflow running

# You might have to inject more environment variables (like DB URL) in there for the build to work as expected





# -------------------------- 

# Create an ec2 server
# Download its keypair file
# Allow http/https traffic
# Ubuntu base image
# Download docker on the machine
# https://docs.docker.com/engine/install/ubuntu/
#  sudo docker run hello-world
# Update workflow to pull the latest image on the ec2 machine 


# Point userapp.your_domain.com to the IP of the server
# Add nginx reverse proxy to forward requests from userapp.your_domain.com to port on which the app is running

# Install certbot and Refresh certificate

# Take home assignments
# Get a DB on neon.tech / RDS  / Aeiven and add a DB migration step to the DB
# Pass in the DB credentials while starting the docker image
# Start the docker image so that it restarts if it goes down (similar to pm2)