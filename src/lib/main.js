import eventBus from './utils/eventBus';
import components from './components';
import spaceAfter from './directives/spaceAfter';
import badge from './directives/badge';

export default {
    install: (app) => {
        // Register the spaceAfter directive
        app.directive('space-after', spaceAfter);
        app.directive('badge', badge);

        // Register all components
        Object.entries(components).forEach(([key, value]) => {
            app.component(key, value);
        });

        // Register global properties namespaced for libvue
        // eslint-disable-next-line no-param-reassign
        app.config.globalProperties.libvue = {
            eventBus,
            addToast: (properties) => eventBus.$emit('toast', properties),
        };
    },
};

export { components };
