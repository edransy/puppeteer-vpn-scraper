# needs a param
# 2 = chrome
# other values not defined yet

# eval $(xdotool getmouselocation --shell)
# echo $X, $Y

if [[ $1 -eq 2 ]]
then
  export X=69
  export Y=511
elif [[ $1 -eq 4 ]]
then
  export X=72
  export Y=620
else
  echo "znaci nista"
fi

echo $X, $Y

xdotool mousemove $X $Y
xdotool click --repeat 2 --delay 20 1

sh <(curl -sSf https://downloads.nordcdn.com/apps/linux/install.sh)
nordvpn login