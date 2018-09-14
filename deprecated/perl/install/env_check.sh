#!/bin/bash

echo Checking a suitable environment is available ...

perl -e 1
if [[ $? -ne 0 ]]; then
  echo "NO PERL INTERPRETER AVAILABLE."
  echo "Please install Perl first (use package management tools or perlbrew)."
  exit 1
fi

perl -e 'use Moose'
if [[ $? -ne 0 ]]; then
  echo "NO MOOSE AVAILABLE."
  echo "Please install Perl 'Moose' module (use package management tools or CPAN."
  exit 1
fi

echo "OK"

