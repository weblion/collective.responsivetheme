from Products.CMFCore.utils import getToolByName

def v1000_to_v1001(portal_setup):
    portal_quickinstaller = getToolByName(portal_setup, 'portal_quickinstaller')
    if not portal_quickinstaller.isProductInstalled('jarn.jsi18n'):
        return portal_setup.runAllImportStepsFromProfile('profile-jarn.jsi18n:default')


