# !/bin/bash

su - root -c 'service dbus start'
sleep 5

yarn
whoami
touch /usr/output/here-scraper.txt

# firefox --start-debugger-server 9222 \
#   --profile '/usr/output/.firefox/profiles/$FIREFOX_PROFILE' \
#   --disable-gpu --no-first-run --disable-save-password-bubble \
#   --no-default-browser-check \
#   --new-instance

# chromium-browser \
#   --user-data-dir='/usr/output/.chrome/profiles/profile-1' \
#   --remote-debugging-port=21222 \
#   --autoplay-policy=no-user-gesture-required \
#   --no-first-run \
#   --suppress-message-center-popups \
#   --disable-gpu \
#   --use-fake-device-for-media-stream &

sed -i 's/chromium-browser %U/chromium-browser %U --remote-debugging-port=21222 /g' ~/Desktop/chromium-browser.desktop


trap 'exit 0' SIGTERM
while true; do sleep 12; done
