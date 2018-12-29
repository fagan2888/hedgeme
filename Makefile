run:  ## run server
	python3 -m hedgeme.server

tests: clean ## Clean and Make unit tests
	python3 -m nose -v pytests --with-coverage --cover-erase --cover-package=`find hedgeme -name "*.py" | sed "s=\./==g" | sed "s=/=.=g" | sed "s/\.py//g" | tr '\n' ',' | rev | cut -c2- | rev`

test: clean lint ## run the tests for travis CI
	@ python3 -m nose -v pytests --with-coverage --cover-erase --cover-package=`find hedgeme -name "*.py" | sed "s=\./==g" | sed "s=/=.=g" | sed "s/\.py//g" | tr '\n' ',' | rev | cut -c2- | rev`

lint: ## run linter
	pylint hedgeme || echo
	flake8 hedgeme 

annotate: ## MyPy type annotation check
	mypy -s hedgeme

annotate_l: ## MyPy type annotation check - count only
	mypy -s hedgeme | wc -l 

clean: ## clean the repository
	find . -name "__pycache__" | xargs  rm -rf 
	find . -name "*.pyc" | xargs rm -rf 
	rm -rf .coverage cover htmlcov logs build dist *.egg-info
	make -C ./docs clean || echo

js:  ## build the js
	npm install
	npm run build

build:  ## build the repository
	python3 setup.py build

install:  ## install to site-packages
	python3 setup.py install

docs:  ## make documentation
	make -C ./docs html && open docs/_build/html/index.html

dist:  ## dist to pypi
	python3 setup.py sdist upload -r pypi

# Thanks to Francoise at marmelab.com for this
.DEFAULT_GOAL := help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

print-%:
	@echo '$*=$($*)'

.PHONY: clean run test tests help annotate annotate_l docs run build js dist
