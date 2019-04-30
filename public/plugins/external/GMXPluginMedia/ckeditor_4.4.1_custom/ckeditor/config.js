/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For the complete reference:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for a single toolbar row.
	config.toolbarGroups = [
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'forms' },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'links' },
		{ name: 'insert'},
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'tools' },
		{ name: 'others' },
		{ name: 'about' }
	];

	// The default plugins included in the basic setup define some buttons that
	// we don't want too have in a basic editor. We remove them here.
	//config.removeButtons = 'Cut,Copy,Paste,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript';
    config.customConfig = "gmxFBImgsLoad/gmxFBImgsLoadconfig.js";

    config.removePlugins = 'elementspath, magicline'; 
    config.resize_enabled = false; 
   // config.resize_dir = 'vertical';
   // config.resize_maxWidth = 150;
	// Let's have it basic on dialogs as well.
	config.removeDialogTabs = 'link:advanced';
	config.enterMode = CKEDITOR.ENTER_DIV;
	config.toolbar = 'MyToolbar';
    config.toolbar_MyToolbar = 
      [
         //['gmxFB', 'Cut', 'Copy', 'Paste', 'Bold', 'Undo', 'Redo', 'Insert'],
		 ['Bold', 'Italic', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'NumberedList', 'BulletedList', 'gmxFB', 'Link', 'SpecialChar']

      ];
             
};
	CKEDITOR.config.allowedContent = true;
    CKEDITOR.config.basicEntities = false;
    CKEDITOR.config.entities = false;
    CKEDITOR.config.entities_greek = false;
    CKEDITOR.config.entities_latin = false;
    CKEDITOR.config.htmlEncodeOutput = false;
    CKEDITOR.config.entities_processNumerical = false;
