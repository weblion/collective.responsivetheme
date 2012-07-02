Introduction
============

This Responsive Theme product will give your Plone a responsive theme on install. But you can also include collective.responsivetheme to the custom theme you are making. Here is how you do it. 

1. Make sure when buildout is run, it will get collective.responsivetheme. We will pretend you theme is named "plonetheme.yourcustomtheme". Within the first folder of plonetheme.yourcustomtheme is a file named setup.py.  In the  install_requires portion add this: ::

     install_requires=[
          'setuptools',
          'collective.responsivetheme',
          # -*- Extra requirements: -*- ],
      

2. Make sure your theme is based off of collective.responsivetheme. In your plonetheme.yourcustomtheme/plonetheme/yourcustomtheme/profiles/default/ find your skins.xml file change the <skin-path> **based-on=""** to Responsive Theme. ::

     <skin-path name="Your Custom Theme" based-on="Responsive Theme">
        ...
    </skin-path>

 
3. Make sure when you install your theme, it also installs collective.responsivetheme. In your plonetheme.yourcustomtheme/plonetheme/yourcustomtheme/profiles/default/ find your metadata.xml file. We need to add the dependancy.  Like so: ::
 
    <?xml version="1.0"?>
      <metadata>
         <version>1000</version>
         <dependencies>
             <dependency>profile-collective.responsivetheme:default</dependency>
         </dependencies>
      </metadata>
      
