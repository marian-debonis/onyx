/**
	_onyx.Toolbar_ is a horizontal bar containing controls used to perform
	common UI actions.
	
	A Toolbar customizes the styling of the controls it hosts, including
	buttons, icons, and inputs.
	
		{kind: "onyx.Toolbar", components: [
			{kind: "onyx.Button", content: "Favorites"},
			{kind: "onyx.InputDecorator", components: [
				{kind: "onyx.Input", placeholder: "Enter a search term..."}
			]},
			{kind: "onyx.IconButton", src: "go.png"}
		]}
	
	For more information, see the documentation on
	<a href="https://github.com/enyojs/enyo/wiki/Toolbars">Toolbars</a>	in the
	Enyo Developer Guide.
*/
enyo.kind({
	name: "onyx.Toolbar",
	classes: "onyx onyx-toolbar onyx-toolbar-inline"
});