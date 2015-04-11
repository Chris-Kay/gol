echo on

vagrant box add virtualbox/ubuntu/trusty-server https://oss-binaries.phusionpassenger.com/vagrant/boxes/latest/ubuntu-14.04-amd64-vbox.box

vagrant up
vagrant provision
vagrant ssh -c /vagrant/install-moose.sh

@echo off

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

echo on

vagrant ssh

