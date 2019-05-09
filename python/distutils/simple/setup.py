
# If all you want to do is distribute a module called foo,
# contained in a file foo.py,
# then your setup script can be a simple as this

from distutils.core import setup

setup(name='foo',
      version='1.0'
      py_modules=['foo'],
    )
