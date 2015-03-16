/*! ***************************************************************************
 *
 * evolutility :: one-json.js
 *
 * View "one json" to edit one backbone model in JSON.
 *
 * https://github.com/evoluteur/evolutility
 * Copyright (c) 2015, Olivier Giulieri
 *
 *************************************************************************** */

Evol.ViewOne.JSON = Evol.ViewOne.extend({

    events: {
        'click > .evol-buttons > button': 'click_button'
    },

    viewName: 'json',

    render: function () {
        var h = [],
            eUI=Evol.UI;
        if(this.model){
            var jsonStr=JSON.stringify(this.model, null, 2);

            h.push(
                eUI.label('uimjson', 'JSON'),
                eUI.input.textMJSON('uimjson', jsonStr, 16));
            this._renderButtons(h, 'json');
        }else{
            h.push(eUI.HTMLMsg(Evol.i18n.nodata, '', 'info'));
        }
        this.$el.html(h.join(''));
        this.setData(this.model);
        //this.custOn=false;
        return this;
    },

    validate: function () {
        var isValid=true,
            data=this.getData(),
            $fp=this._getDOMField().parent();

        //this.clearMessages();
        isValid=!Evol.UI.addRemClass($fp, data===null, 'has-error');
        this.$el.trigger('action', 'validate', {valid:isValid});
        return isValid?[]:[Evol.i18n.validation.invalid];
    },

    getData: function () {
        var jsonStr=this._getDOMField().val(),
            obj;

        try{
            obj=$.parseJSON(jsonStr);
        }catch(err){
            obj=null;
        }
        return obj;
    },

    setData: function (m) {
        this.clearError()._getDOMField().val(JSON.stringify(m, null, 2));
        return this.setTitle();
    },

    clear: function () {
        this._getDOMField().val('');
        return this;
    },

    clearError: function(){
        this._getDOMField().parent().removeClass('has-error');
        return this;
    },

    _getDOMField: function(){
        return this.$el.children('textarea');
    }

});
