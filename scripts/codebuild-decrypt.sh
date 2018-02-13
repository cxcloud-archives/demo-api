#!/bin/bash
cd /tmp
curl -Lo git-crypt.zip https://github.com/AGWA/git-crypt/archive/master.zip
unzip git-crypt.zip
cd git-crypt-master
make
install git-crypt /usr/bin

cd $CODEBUILD_SRC_DIR
openssl aes-256-cbc -d -a -in git-crypt.key2.enc -out git-crypt.key
git stash
/usr/local/git-crypt unlock git-crypt.key
rm git-crypt.key
