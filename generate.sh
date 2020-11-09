examples=$(find ./examples -name "*.js")

if [ -d ./dist ]; then
    rm -rf ./dist
fi

if [ -f ~/.carbon-now.json ]; then
    rm ~/.carbon-now.json
fi

cp ./.carbon-now.json ~/.carbon-now.json
mkdir "./dist"

for example in $examples; do
  yarn run carbon $example -h -l ./dist -p latest-preset
done

