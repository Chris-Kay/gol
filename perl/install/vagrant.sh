#!/bin/bash

set -x

vagrant box add virtualbox/ubuntu/trusty-server https://oss-binaries.phusionpassenger.com/vagrant/boxes/latest/ubuntu-14.04-amd64-vbox.box
vagrant init virtualbox/ubuntu/trusty-server
vagrant up
vagrant ssh

