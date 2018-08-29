from setuptools import setup, find_packages
from codecs import open
from os import path

here = path.abspath(path.dirname(__file__))

with open(path.join(here, 'README.md'), encoding='utf-8') as f:
    long_description = f.read()

with open(path.join(here, 'requirements.txt'), encoding='utf-8') as f:
    requires = f.read().split()

setup(
    name='hedgeme',
    version='0.0.1',
    description='Realtime Competitions',
    long_description=long_description,
    url='https://github.com/timkpaine/hedgeme',
    download_url='https://github.com/timkpaine/hedgeme/archive/v0.0.1.tar.gz',
    author='Tim Paine',
    author_email='timothy.k.paine@gmail.com',
    license='BSD 3 Clause',
    install_requires=requires,

    classifiers=[
        'Development Status :: 3 - Alpha',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
    ],

    keywords='realtime competition streaming',
    zip_safe=False,
    packages=find_packages(exclude=[]),
    include_package_data=True,

    #   py_modules=["my_module"],

    # install_requires=['peppercorn'],

    # extras_require={
    #     'dev': ['check-manifest'],
    #     'test': ['coverage'],
    # },

    # package_data={
    #     'sample': ['package_data.dat'],
    # },

    # data_files=[('my_data', ['data/data_file'])],

    entry_points={
        'console_scripts': [
        ],
    },
)
