#!/bin/bash
set -ev
set -o pipefail

sudo apt-get install -y libssl-dev
cd /tmp
curl -Lo git-crypt.zip https://github.com/AGWA/git-crypt/archive/master.zip
unzip git-crypt.zip
cd git-crypt-master
make
sudo install git-crypt /usr/local/bin
cd $TRAVIS_BUILD_DIR
openssl aes-256-cbc -K $encrypted_bb5bb77d3466_key -iv $encrypted_bb5bb77d3466_iv -in git-crypt.key.enc -out git-crypt.key -d
git-crypt unlock git-crypt.key
rm git-crypt.key
