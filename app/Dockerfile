FROM consol/ubuntu-xfce-vnc

USER root
RUN bash -c 'echo -e "a\na" | passwd root'

RUN apt-get update -y
RUN apt-get upgrade -y

# basic tools
RUN apt-get -y install bash curl dirmngr apt-transport-https \
  lsb-release ca-certificates vim criu tree sudo bash wget lsof \
  libpci-dev xdotool

# node toolchain
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN apt-get install -y gcc g++ make
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list
RUN apt-get update
RUN apt-get install -y yarn

# sound tools
# host must run pulseaudio
RUN apt-get update && apt-get install -y \
  alsa-utils \
  libasound2 \
  libasound2-plugins \
  pulseaudio \
  pulseaudio-utils \
  --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

COPY ./pulseaudio/default.pa /etc/pulse/default.pa
COPY ./pulseaudio/client.conf /etc/pulse/client.conf
COPY ./pulseaudio/daemon.conf /etc/pulse/daemon.conf

# create users and groups
RUN useradd -ou 0 -g 0 chromer
RUN mkdir -p /home/chromer/
RUN chown -R chromer: /home/chromer

RUN groupadd people

# set permissions
RUN usermod -aG sudo chromer
RUN usermod -a -G people root

# add permissions to people

RUN mkdir -p /usr/output
RUN mkdir -p /usr/app

RUN chown -R :people /usr/output
RUN chown -R :people /usr/app

USER chromer:root

RUN yarn install --production

CMD bash start.sh
