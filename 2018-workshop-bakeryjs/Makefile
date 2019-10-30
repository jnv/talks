TARGET_DIR ?= __export

$(TARGET_DIR)/index.html: deck.mdx node_modules
	npm run build -- -d $(TARGET_DIR)

node_modules:
	npm install