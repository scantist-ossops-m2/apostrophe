import Link from '@tiptap/extension-link';
export default (options) => {
  return Link.extend({
    addOptions() {
      return {
        ...this.parent?.(),
        openOnClick: false,
        linkOnPaste: true
      };
    },
    addAttributes() {
      return {
        'aria-label': {
          default: null
        }
      };
    },
  
  });
};
