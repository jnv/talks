MAKEFILES = $(shell find . -maxdepth 2 -type f -name Makefile)
SUBDIRS = $(filter-out ./,$(dir $(MAKEFILES)))
PUBLISH_DIR ?= ./public

all: $(PUBLISH_DIR)
	@for dir in $(SUBDIRS); do \
		export TARGET_DIR=../$(PUBLISH_DIR)/$${dir%/}; \
		$(MAKE) -C $$dir; \
	done

$(PUBLISH_DIR):
	mkdir $(PUBLISH_DIR)
