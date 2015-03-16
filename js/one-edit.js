/*! ***************************************************************************
 *
 * evolutility :: one-edit.js
 *
 * View "one edit" to edit one backbone model.
 *
 * https://github.com/evoluteur/evolutility
 * Copyright (c) 2015, Olivier Giulieri
 *
 *************************************************************************** */

Evol.ViewOne.Edit = Evol.ViewOne.extend({

    viewName: 'edit',
    prefix: 'oe',

    postRender:function(){
        var pref = '#' + this.prefix + '-',
            fs= _.filter(this.getFields(), function(f){
                return f.type === 'list' && !f.readonly;
            });
        _.each(fs, function(f){
            this.$(pref + f.id).select2(
                {
                    data: f.list,
                    multiple:true
                }
            );
        });
    }
});
