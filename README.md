# Evolutility.js

Evolutility provides a set of generic Backbone Views to browse, edit, filter, export and chart Backbone models and collections of different structures.
With it you configure views with metadata instead of hand-coding templates, Javascript and CSS.

## Demo apps

[To Do list](http://evoluteur.github.io/evolutility/demo/index.html#todo/list),
[AddressBook](http://evoluteur.github.io/evolutility/demo/index.html#contact/list),
[Wine Cellar](http://evoluteur.github.io/evolutility/demo/index.html#winecellar/list),
[Graphic Novels](http://evoluteur.github.io/evolutility/demo/index.html#comics/cards).

## Installation

You can use Bower to install Evolutility.

```bash
# To get the latest stable version, use Bower from the command line.
bower install evolutility

# To get the most recent, latest committed-to-master version use:
bower install evolutility#master
```

## Views

Evolutility's views have a Backbone model (to define the data) and also a UI-model (to define the UI for this model).

All views for a Backbone model and collection share a single UI-Model which defines of all UI elements across views in a simple declarative way.

Evolutility provides 3 types of view
* Views for a model: Browse, Edit, Mini (quick edit), JSON.
* Views for a collection: List, Cards, Bubbles, Charts.
* Views for actions on a model or collection: Export, Filter.

A large part of the API (methods, options and events) is common to all views. Some views have additional API.

## Views for One model
### Browse
Shows all fields for viewing (read only). Fields are grouped in panels and tabs.

![screenshot 1](https://raw.githubusercontent.com/evoluteur/evolutility/master/doc/screenshots/one-browse.gif)
```javascript
var vw = new Evol.ViewOne.Browse({
            el: myElement,
            uiModel: myUIModel,
            model: myModel
        });
```
### Edit
This view shows all fields for edition to create or update models.
It automatically performs validation based on the UI-model and supports the Master-Details pattern (nested collections).
Fields are grouped in panels and tabs.

![screenshot 1](https://raw.githubusercontent.com/evoluteur/evolutility/master/doc/screenshots/one-edit.gif)
```javascript
var vw = new Evol.ViewOne.Edit({
            el: myElement,
            uiModel: myUIModel,
            model: myModel
        });
```
### Mini (Quick Edit)
Only shows important fields (required or showing as a column in grids). Fields are grouped in a single panel.

![screenshot 1](https://raw.githubusercontent.com/evoluteur/evolutility/master/doc/screenshots/one-mini.gif)
```javascript
var vw = new Evol.ViewOne.Mini({
            el: myElement,
            uiModel: myUIModel,
            model: myModel
        });
```
### JSON
JSON representation of the data.

![screenshot 1](https://raw.githubusercontent.com/evoluteur/evolutility/master/doc/screenshots/one-json.gif)
```javascript
var vw = new Evol.ViewOne.JSON({
            el: myElement,
            uiModel: myUIModel,
            model: myModel
        });
```

## Views for a collection of Many models
### List
Gives a tabular view of a collection with paging.

![screenshot 1](https://raw.githubusercontent.com/evoluteur/evolutility/master/doc/screenshots/many-list.gif)
```javascript
var vw = new Evol.ViewMany.List({
            el: myElement,
            uiModel: myUIModel,
            colllection: myCollection
        });
```
### Cards
Shows records side by side as cards.

![screenshot 1](https://raw.githubusercontent.com/evoluteur/evolutility/master/doc/screenshots/many-cards.gif)
```javascript
var vw = new Evol.ViewMany.Cards({
            el: myElement,
            uiModel: myUIModel,
            colllection: myCollection
        });
```
### Bubbles
The "Bubbles" view displays the data as bubbles with controls to group them and set their color and size (this view uses D3.js). 
    A tooltip with the Card view of the item show on mouse over.

![screenshot 1](https://raw.githubusercontent.com/evoluteur/evolutility/master/doc/screenshots/many-bubbles.gif)
```javascript
var vw = new Evol.ViewMany.Bubbles({
            el: myElement,
            uiModel: myUIModel,
            colllection: myCollection
        });
```
### Charts
Draws charts about the collection.

![screenshot 1](https://raw.githubusercontent.com/evoluteur/evolutility/master/doc/screenshots/many-charts.gif)
```javascript
var vw = new Evol.ViewMany.Charts({
            el: myElement,
            uiModel: myUIModel,
            colllection: myCollection
        });
```

## Views for Actions
Backbone Views for actions on a collection or a model.
### Export
View to define export options and preview the collection export in different data formats (CSV, TAB, HTML, XML, SQL and JSON).

![screenshot 1](https://raw.githubusercontent.com/evoluteur/evolutility/master/doc/screenshots/action-export.gif)
```javascript
var vw = new Evol.ViewAction.Export({
            el: myElement,
            uiModel: myUIModel,
            colllection: myCollection
        });
```
### Filter
View used to build a structured query to filter a collection.

![screenshot 1](https://raw.githubusercontent.com/evoluteur/evolutility/master/doc/screenshots/action-filter.gif)
```javascript
var vw = new Evol.ViewAction.Filter({
            el: myElement,
            uiModel: myUIModel
        });
```

[Live demo](http://evoluteur.github.io/evolutility/index.html) of these views.

More Views will be added in the future (thinking of Summary, Import, Mass update, Group, Dashboard, Report, PDF, Auto-documentation and specs...).


## UI-model

Views are not defined in templates but configured with a UI-model using [vocabulary](http://evoluteur.github.io/evolutility/doc/ui-model.html) with words like "field", "panel" and "tab" rather than "INPUT" and "DIV" to describe UI elements.

Here is the UI-model used to configure all views for the ["Graphic Novels" app demo](http://evoluteur.github.io/evolutility/demo/index.html#comics/cards):

```javascript

var uiModels_comics = {
    id: 'comics',
    label: 'Graphic Novels',
    name: 'graphic novel serie',
    namePlural: 'graphic novel series',
    fnTitle: 'title',
    fnBadge: function(m){
        var hNb=m.get('haveNb'),
            sNb=m.get('serieNb');
        return (hNb==sNb)?hNb:hNb+'/'+sNb;
    },
    elements: [
        {
            type: 'panel', label: 'Serie', width: 70,
            elements: [
                {
                    id: 'title', attribute: 'title', type: 'text', label: 'Title', required: true, 
                    maxLength: 255,
                    width: 62, inMany: true
                },
                {
                    id: 'genre', attribute: 'genre', type: 'lov', label: 'Genre', width: 38, inMany: true,
                    list: [
                        {id: 'adv', text: 'Adventure'},
                        {id: 'conte', text: 'Fairy tale'},
                        {id: 'eros', text: 'Erotic'},
                        {id: 'fantasy', text: 'Fantastic'},
                        {id: 'hf', text: 'Heroic Fantasy'},
                        {id: 'hist', text: 'Historic'},
                        {id: 'humor', text: 'Humor'},
                        {id: 'nocat', text: 'One of a kind'},
                        {id: 'youth', text: 'Youth'},
                        {id: 'pol', text: 'Thriller'},
                        {id: 'sf', text: 'Science-fiction'},
                        {id: 'sh', text: 'Super Heros'},
                        {id: 'wwest', text: 'Western'} 
                    ]
                },
                {
                    id: 'authors', attribute: 'authors', type: 'text', width: 62, inMany: true,
                    label: 'Authors'
                },
                {
                    id: 'language', attribute: 'language', type: 'lov', label: 'Language', width: 38, inMany: false,
                    list: [
                        {id: 'FR', text: 'French'},
                        {id: 'EN', text: 'English'}
                    ]
                },
                {
                    id: 'serieNb', attribute: 'serieNb', type: 'integer', width: 15, inMany: false,
                    label: 'Albums', inCharts:false 
                },
                {
                    id: 'haveNb', attribute: 'haveNb', type: 'integer', width: 15, inMany: false,
                    label: 'Owned', inCharts:false 
                },
                {
                    id: 'have', attribute: 'have', type: 'text', width: 32, inMany: false,
                    label: 'have' 
                },
                {
                    id: 'complete', attribute: 'complete', type: 'boolean', width: 19, inMany: true,
                    label: 'Complete', labelFalse:'Incomplete', labelTrue:'Complete'
                },
                {
                    id: 'finished', attribute: 'finished', type: 'boolean', width: 19, inMany: true,
                    label: 'Finished', labelTrue:'Finished', labelFalse:'Unfinished', css:'cBlue'
                },
                {
                    id:'amazon', label:'Amazon', type:'formula', width:100, css:'evol-ellipsis',
                    formula:function(m){
                        var link=m.get('language')=='FR' ?
                            'http://www.amazon.fr/s/ref=sr_nr_n_1?keywords='
                            :'http://www.amazon.com/s/ref=nb_sb_noss?field-keywords=';
                        link+=encodeURI(m.get('title')+' '+m.get('authors'));
                        return '<a target="a" href="'+link+'">'+link+'</a>';
                    }
                },
                {
                    id: 'notes', attribute: 'notes', type: 'textmultiline', label: 'Notes', maxLength: 1000,
                    width: 100, height: 6, inMany: false
                }
            ]
        },
        {
            type: 'panel', label: 'Cover', width: 30,
            elements: [
                {
                    id: 'pix', attribute: 'pix', type: 'image', width: 100, inMany: true,
                    label: 'Cover'
                }
            ]
        }
    ]
};

```

See [UI-Model documentation](http://evoluteur.github.io/evolutility/doc/ui-model.html) for the UI vocabulary available (structure of UI-models or metamodel).

UI-Models for the demo apps:
[To Do list](http://github.com/evoluteur/evolutility/blob/master/js/ui-models/apps/todo.js),
[AddressBook](http://github.com/evoluteur/evolutility/blob/master/js/ui-models/apps/contacts.js),
[Wine Cellar](http://github.com/evoluteur/evolutility/blob/master/js/ui-models/apps/winecellar.js),
[Graphic Novels](http://github.com/evoluteur/evolutility/blob/master/js/ui-models/apps/comics.js).

With Evolutility, a single UI-model defines a full single page applications (SPA) to view, edit, filter and export a Backbone model or collection.

Try it now: Download Evolutility.JS, make modification to the demo UI-models by adding and modifying fields and panels and see the demo apps become your apps.

## Stack and dependencies

Javascript, HTML5, CSS3,
[Backbone] (http://backbonejs.org),
[Underscore] (http://underscorejs.org/),
[jQuery] (http://jquery.com),
[D3.js] (http://d3js.org),
[Bootstrap] (http://getbootstrap.com/),
[Bootstrap-datepicker] (http://eternicode.github.io/bootstrap-datepicker/),
[Select2] (http://ivaynberg.github.io/select2/).

Note: For convenience, all dependencies are minified together in a single file "dependencies.min.js". The dependencies list is specified in "Gruntfile.js".

## Documentation

The (beginning of a) [documentation](http://evoluteur.github.io/evolutility/doc/index.html) is in progress: [ui-models](http://evoluteur.github.io/evolutility/doc/ui-model.html) and [views](http://evoluteur.github.io/evolutility/doc/views.html).

## Previous incarnation

Evolutility.js is a re-write of [Evolutility] (http://www.evolutility.org) generic CRUD UI for ASP.net.


## License

Copyright (c) 2015 Olivier Giulieri.

Evolutility.js is released under the GNU Affero General Public License version 3 [GNU AGPLv3](http://www.gnu.org/licenses/agpl-3.0.html).

