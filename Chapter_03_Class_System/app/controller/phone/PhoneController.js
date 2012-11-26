Ext.define('Chapter3ClassSystem.controller.phone.PhoneController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            listView: 'indexview > #listView',
            indexView: 'indexview'
        },
        control: {
            listView: {
                itemtap: 'listViewItemTap' 
            }
        }
    },

    listViewItemTap: function(list, index, target, record, e, eOpts) {
        var screenName = record.get('screen');
        var text = record.get('text');
        if (!this.screens) {
            this.screens = {};
        }
        if (!this.screens[screenName]) {
            this.screens[screenName] = Ext.widget(screenName, {
                title: text
            });
        }
        this.getIndexView().push(this.screens[screenName]);
    }
});

