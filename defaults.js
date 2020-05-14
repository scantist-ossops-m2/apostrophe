module.exports = {
  modules: {
    '@apostrophecms/errors': {},
    '@apostrophecms/utils': {},
    '@apostrophecms/http': {},
    '@apostrophecms/tasks': {},
    '@apostrophecms/launder': {},
    '@apostrophecms/i18n': {},
    '@apostrophecms/db': {},
    '@apostrophecms/locks': {},
    '@apostrophecms/caches': {},
    '@apostrophecms/migrations': {},
    '@apostrophecms/express': {},
    '@apostrophecms/urls': {},
    '@apostrophecms/templates': {},
    '@apostrophecms/email': {},
    '@apostrophecms/push': {},
    '@apostrophecms/permissions': {},
    '@apostrophecms/assets': {},
    '@apostrophecms/admin-bar': {},
    '@apostrophecms/notifications': {},
    '@apostrophecms/login': {},
    '@apostrophecms/schemas': {},
    '@apostrophecms/docs': {},
    '@apostrophecms/jobs': {},
    '@apostrophecms/versions': {},
    '@apostrophecms/modals': {},
    '@apostrophecms/tags': {},
    '@apostrophecms/attachments': {},
    '@apostrophecms/oembed': {},
    '@apostrophecms/pager': {},
    '@apostrophecms/any-doc-type': {},
    // global comes first so it can register a doc type manager and clean things up before
    // pages claims any orphan page types
    '@apostrophecms/global': {},
    '@apostrophecms/polymorphic-type': {},
    '@apostrophecms/pages': {},
    '@apostrophecms/search': {},
    '@apostrophecms/any-page-type': {},
    '@apostrophecms/areas': {},
    '@apostrophecms/rich-text-widgets': {},
    '@apostrophecms/html-widgets': {},
    '@apostrophecms/video-fields': {},
    '@apostrophecms/video-widgets': {},
    '@apostrophecms/groups': {},
    '@apostrophecms/users': {},
    '@apostrophecms/images': {},
    '@apostrophecms/images-widgets': {},
    '@apostrophecms/files': {},
    '@apostrophecms/files-widgets': {},
    '@apostrophecms/soft-redirects': {}
  }
};
