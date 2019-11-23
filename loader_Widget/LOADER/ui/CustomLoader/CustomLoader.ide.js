TW.IDE.Widgets.CustomLoader = function () {

    this.widgetIconUrl = function() {
        return "../Common/extensions/CustomLoader_ExtensionPackage/ui/CustomLoader/CustomLoader.png";
    };

    this.widgetProperties = function () {
        return {
            "name": "CustomLoader",
            "description": "This widget is a custom loader for thingworx ",
            "category": ['Common'],
            "supportsAutoResize": true,
            "isResizable": true,
            "allowPositioning": true,
            "properties": {
                "RenderTable":{
                    "baseType": "String",
                    "defaultValue": "",
                    "isBindingTarget": true,
                    "isBindingSource": true
                }
            }
        };
    };

    this.widgetEvents = function () {
        return {
          'windowOnResize':{}
        }
      };
    
    this.renderHtml = function () {
         return "<div class='widget-content widget-customLoader'>" +
            "<div class=\"loader\"></div>"+
			"<p class=\"noData\"><strong>No Data Available</strong></p>"+
            "</div>";
    };

};