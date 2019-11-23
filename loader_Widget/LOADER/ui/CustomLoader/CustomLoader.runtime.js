TW.Runtime.Widgets.CustomLoader = function () {

    var thisWidget = this;
    var valueElem;
    this.widgetIconUrl = function () {
        return "../Common/extensions/CustomLoader_ExtensionPackage/ui/CustomLoader/CustomLoader.png";
    };


    this.renderHtml = function () {
        return "<div class='widget-content widget-customLoader'>" +
            "<div class=\"loader\"></div>"+
			"<p class=\"noData\"><strong>No Data Available</strong></p>"+
            "</div>";
    };


    this.updateProperty = function (updatePropertyInfo) {
    valueElem = this.jqElement;
        if (updatePropertyInfo.TargetProperty === 'RenderTable') {
			if((updatePropertyInfo.SinglePropertyValue)==="")
			{
                valueElem.find(".noData").css('display','Block');
			}else
			{
				valueElem.find(".loader").hide()
			}
        } 

    }

};