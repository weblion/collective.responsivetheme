from setuptools import setup, find_packages
import os

version = '1.2.2'

setup(name='collective.responsivetheme',
      version=version,
      description="A responsive theme based on sunburst for Plone 4",
      long_description=open("README.txt").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      # Get more strings from
      # http://pypi.python.org/pypi?%3Aaction=list_classifiers
      classifiers=[
        "Framework :: Plone",
        "Programming Language :: Python",
        ],
      keywords='',
      author='Rob Porter',
      author_email='robzonenet@gmail.com',
      url='http://github.com/RobZoneNet/collective.responsivetheme',
      license='GPL',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['collective'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          'plonetheme.sunburst',
          'z3c.jbot>=0.6.0',
          # -*- Extra requirements: -*-
      ],
      entry_points="""
      # -*- Entry points: -*-

      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
