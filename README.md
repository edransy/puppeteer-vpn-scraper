# puppeteer-vpn-scrapers<div id="top"></div>

Puppeteer VPN Scrapers is eMedia Patch in-house software developed primarely to automate Ads triggering and Screenshoting. It utilizes VCN and NordVPN DockerImages to run locally for various markets depending on environment variables, and Puppeteer as primary tool to control Chrome headlessly as well as various custom helper functions for more efficient scraping. It's current setup runs Google screenshot tool, however it is easily modifiable to run on any other site and location.    

![alt text](https://i.postimg.cc/653NQFHc/bose-wireless-headphones.png)

### Usage


1. Clone the repo
   ```sh
   git clone https://github.com/edransy/puppeteer-vpn-scraper.git
   ```
2. Create vpn.env file like vpn.env.example

3. Docker compose
   ```sh
   docker-compose down --remove-orphans && docker-compose up --build --force-recreate
   ```
4. Connect to docker
   ```sh
   docker exec -it notabot /bin/bash
   ```
5. To access VCN GUI (optional)
   ```sh
   http://localhost:6901/?password=vncpassword
   ```   
6. Run google scraper for given keywords
   ```sh
   node index.js
   ```
