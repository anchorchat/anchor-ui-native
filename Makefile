default:
	@echo No target specified

clean:
	rm -rf docs/src/anchor-ui-native
	rm -rf examples/anchor-ui-native

build: clean
	cp -R lib docs/src/anchor-ui-native
	cp -R lib examples/anchor-ui-native
