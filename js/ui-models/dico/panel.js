
var uiModels=uiModels||{};
uiModels.panel = {
    id:'panel',
    icon: "edi_pnl.png",
    name: "panel",
    namePlural: "panels",
    fnTitle: 'label',
    elements: [
        {
            type: "panel",
            id:'pnl0',
            label: "Panel",
            width: 100,
            elements: [
                {
                    id:'label',
                    label: "Label",
                    type: "text",
                    help: "Field title for the user",
                    maxLength: 100,
                    required: true,
                    inMany: true,
                    width: 100
                },
                {
                    id: 'css',
                    label: "CSS",
                    labellist: "CSS Edit",
                    help: "Stylesheet class name for the field for the edit view.",
                    type: "text",
                    maxLength: 20,
                    width: 62
                },
                {
                    id: 'cssLabel',
                    label: "CSS label",
                    help: "Stylesheet class name for the field label.",
                    type: "text",
                    maxLength: 20,
                    width: 38
                }
            ]
        },
        {
            id:'pl-fields',
            attribute:'elements',
            type:'panel-list',
            label: 'Fields',
            width:100,
            readonly:true,
            elements:[
                {id:'id', type: "text", attribute:'id', label:'ID' },
                {id:'label', type: "text", attribute:'label', label:'Label'},
                {
                    id: 'type',
                    label: "Type",
                    help: "Type of field: UI type rather than data type.",
                    type: "lov",
                    list:uiFieldTypes,
                    required: true
                },
                {id:'width', type: "integer", attribute:'width', label:'Width'}
            ]
        }
    ]
};
