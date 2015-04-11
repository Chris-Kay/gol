#!/bin/bash

# Assume we're on Reith and set proxies accordingly
on_reith=1


if [[ "$on_reith" -eq "1" ]]; then
  echo 'Environment has been set up to assume internet access is via Reith proxies'
  echo
  echo 'If this is not the case, then the following command will fail, this can be'
  echo 'fixed by editing the file "install-moose.sh", changing it to read:'
  echo '    on_reith=0'
  echo
  echo 'and then re-run vagrant.sh / vagrant.bat'
  echo

  export http_proxy=http://www-cache.reith.bbc.co.uk:80/
  export https_proxy=https://www-cache.reith.bbc.co.uk:80/
else
  echo 'Environment has been set up to assume internet access is direct (no Reith proxies)'
  echo
  echo 'If this is not the case, then the following command will fail, this can be'
  echo 'fixed by editing the file "install-moose.sh", changing it to read:'
  echo '    on_reith=1'
  echo
  echo 'and then re-run vagrant.sh / vagrant.bat'
  echo
fi


set -x
sudo aptitude -y install libmoose-perl

