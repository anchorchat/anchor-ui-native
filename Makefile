default:
	@echo No target specified

build:
	rsync -avz --delete lib/ docs/src/anchor-ui-native
	rsync -avz --delete lib/ examples/anchor-ui-native
	cp package.json docs/src/anchor-ui-native
