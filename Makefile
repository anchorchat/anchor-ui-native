default:
	@echo No target specified

clean:
	rm -rf docs/src/anchor-ui-native
	rm -rf examples/anchor-ui-native

build:
	cp -R lib docs/src/anchor-ui-native
	cp -R lib examples/anchor-ui-native
	cp package.json docs/src/anchor-ui-native
