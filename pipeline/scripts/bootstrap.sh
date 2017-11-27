#!/bin/bash
# This scripts suppose to be run on PCF.
CURRENT_DIR="$(pwd)"
echo "Current Dir: ${CURRENT_DIR}"

echo "Setting npm registry to: $NPM_REGISTRY"
basePath="/home/vcap"
appPath="${basePath}/app"
PATH=$PATH:${appPath}/.cloudfoundry/node/bin:${appPath}/.cloudfoundry/node/lib/node_modules/npm/bin:${appPath}/.cloudfoundry/0/bin:${appPath}/.cloudfoundry/0/node/lib/node_modules/npm/bin
npm config set registry $NPM_REGISTRY
export SASS_BINARY_PATH=${appPath}/pipeline/resources/node-sass/linux-x64-48_binding.node

echo "Start Installation..."
npm install --registry=$NPM_REGISTRY
echo "Installation Completed."

echo "Start Build..."
npm run build $BUILD_FLAGS
echo "Build Completed."

echo "Running Server at port $PORT"
http-server ./build -p $PORT --cors -c-1