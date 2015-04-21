var uiModels = uiModels || {};

uiModels.todo = {
    id: 'todo',
    label: 'To Do',
    entity: 'task',
    entities: 'tasks',
    icon: 'todo.gif',
    leadfield:'title',
    elements: [
        {
            type: 'panel', label: 'Task', width: 62,
            elements: [
                {
                    id: 'title', attribute: 'title', type: 'text', label: 'Title', required: true,
                    //placeholder: 'Call John',
                    maxlength: 255,
                    width: 100, viewmany: true
                },
                {
                    id: 'duedate', attribute: 'duedate', type: 'date', label: 'Due Date', width: 62, viewmany: true
                },
                {
                    id: 'category', attribute: 'category', type: 'lov', label: 'Category', width: 38, viewmany: true,
                    list: [
                        {id: 'home', text: 'Home'},
                        {id: 'work', text: 'Work'},
                        {id: 'fun', text: 'Fun'},
                        {id: 'others', text: 'Others'},
                        {id: 'misc', text: 'Misc.'}
                    ],
                    typechart:'bars'
                }
            ]
        },
        {
            type: 'panel', label: 'Status', width: 38,
            elements: [
                {
                    id: 'priority', attribute: 'priority', type: 'lov', label: 'Priority', required: true,
                    width: 100,  viewmany: true,
                    list: [
                        {id: '1', text: '1 - ASAP'},
                        {id: '2', text: '2 - Urgent'},
                        {id: '3', text: '3 - Important'},
                        {id: '4', text: '4 - Medium'},
                        {id: '5', text: '5 - Low'}
                    ]
                },
                {
                    id: 'complete', attribute: 'complete', type: 'boolean', width: 100, viewmany: true,
                    label: 'Complete', 
                    labelcharts:'Tasks completion', labeltrue: 'Complete', labelfalse:'Incomplete',
                    typechart:'pie'
                }
            ]
        },
        {
            type: 'panel', label: 'Task Description', label2:'and Notes', width: 100,
            elements: [
                {
                    id: 'description', attribute: 'description', type: 'textmultiline', 
                    label: 'Description', 
                    maxlength: 1000,
                    width: 62, height: 5, viewmany: false
                },
                {
                    id: 'notes', attribute: 'notes', type: 'textmultiline', label: 'Notes', maxlength: 1000,
                    width: 38, height: 5, viewmany: false
                }
            ]
        }
    ]
};
