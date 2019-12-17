TW.IDE.Widgets.simplewidget = function () {

	this.widgetIconUrl = function() {
		return  "'../Common/extensions/MyAwesomeExtension/ui/simplewidget/default_widget_icon.ide.png'";
	};

	this.widgetProperties = function () {
		return {
			'name': 'SimpleWidget',
			'description': 'A simple example of Widget creation',
			'category': ['Common'],
			'properties': {
				'SimpleWidget Property': {
					'baseType': 'STRING',
					'defaultValue': 'Hello, Awesome User!',
					'isBindingTarget': true
				}
			}
		}
	};

	this.afterSetProperty = function (name, value) {
		var thisWidget = this;
		var refreshHtml = false;
		switch (name) {
			case 'Style':
			case 'SimpleWidget Property':
				thisWidget.jqElement.find('.simplewidget-property').text(value);
			case 'Alignment':
				refreshHtml = true;
				break;
			default:
				break;
		}
		return refreshHtml;
	};

	this.renderHtml = function () {
		// return any HTML you want rendered for your widget
		// If you want it to change depending on properties that the user
		// has set, you can use this.getProperty(propertyName).
		return 	'<div class="widget-content widget-simplewidget">' +
					'<span class="simplewidget-property">' + this.getProperty('SimpleWidget Property') + '</span>' +
				'</div>';
	};

	this.afterRender = function () {
		// NOTE: this.jqElement is the jquery reference to your html dom element
		// 		 that was returned in renderHtml()

		// get a reference to the value element
		valueElem = this.jqElement.find('.simplewidget-property');
		// update that DOM element based on the property value that the user set
		// in the mashup builder
		valueElem.text(this.getProperty('SimpleWidget Property'));
	};

};