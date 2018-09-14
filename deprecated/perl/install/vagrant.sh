#!/bin/bash

__box_exists=$( vagrant box list | grep virtualbox/ubuntu/trusty-server )

if [[ -z $__box_exists ]]; then

  set -x
  vagrant box add virtualbox/ubuntu/trusty-server https://oss-binaries.phusionpassenger.com/vagrant/boxes/latest/ubuntu-14.04-amd64-vbox.box
  set +x
fi

set -x

vagrant up
vagrant provision
vagrant ssh -c /vagrant/install-moose.sh

set +x

echo
echo '************************************************************************'
echo
echo 'About to connect to vagrant host'
echo
echo 'To confirm that environment is set correctly, do:'
echo '   $ /vagrant/env_check.sh'
echo
echo 'To run the perl test suite, do:'
echo '   $ cd ~/coding-test'
echo '   $ ./run_tests.sh'
echo
echo '************************************************************************'
echo

set -x

vagrant ssh

