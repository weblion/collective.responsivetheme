Introduction
============

This Responsive Theme product will give your Plone a responsive theme on install. But you can also include collective.responsivetheme to the custom theme you are making. Here is how you do it. 

We will pretend you theme is named "plonetheme.yourcustomtheme". 

Within the first folder of plonetheme.yourcustomtheme is a file named setup.py.  In the  install_requires portion add this:

 install_requires=[
          'setuptools',
          'collective.responsivetheme',
          # -*- Extra requirements: -*-
      ],
      
      
This will make sure that buildout will get responsivetheme when it is run.

Secondly, in your plonetheme.yourcustomtheme/plonetheme/yourcustomtheme/profiles/default/ find your skins.xml file change the <skin-path> based-on="" to Responsive Theme. 

 <skin-path name="Your Custom Theme" based-on="Responsive Theme">
 
 This will enable your theme to be based on the Responsive Theme. It is based on Sunburst theme so you will get all that ships with Plone. 
 
Finally, in your plonetheme.yourcustomtheme/plonetheme/yourcustomtheme/profiles/default/ find your metadata.xml file. We need to add the dependancy.  Like so:
 
 <?xml version="1.0"?>
<metadata>
  <version>1000</version>
  <dependencies>
     <dependency>profile-collective.responsivetheme:default</dependency>
  </dependencies>
</metadata>


