#!/bin/bash
pwd
npm install -g now --slient
now -e NODE_ENV=$ENVIRONMENT --token=$NOW_TOKEN --team=$NOW_TEAM
now alias --token=$NOW_TOKEN --team=$NOW_TEAM
