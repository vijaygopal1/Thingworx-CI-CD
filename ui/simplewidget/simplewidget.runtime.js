TW.Runtime.Widgets.simplewidget= function () {
	var valueElem;
	this.renderHtml = function () {
		// return any HTML you want rendered for your widget
		// If you want it to change depending on properties that the user
		// has set, you can use this.getProperty(propertyName). In
		// this example, we'll just return static HTML
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

	// this is called on your widget anytime bound data changes
	this.updateProperty = function (updatePropertyInfo) {
		// TargetProperty tells you which of your bound properties changed
		if (updatePropertyInfo.TargetProperty === 'SimpleWidget Property') {
			valueElem.text(updatePropertyInfo.SinglePropertyValue);
			this.setProperty('SimpleWidget Property', updatePropertyInfo.SinglePropertyValue);
		}
	};
};