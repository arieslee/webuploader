/**
 * @fileOverview 完全版本。
 */
define([
    '../base',
    '../promise',
    '../uploader',

    // widgets
    '../widgets/filepicker',
    '../widgets/filednd',
    '../widgets/filepaste',
    '../widgets/image',
    '../widgets/queue',
    '../widgets/runtime',
    '../widgets/upload',
    '../widgets/validator',

    // runtimes
    // html5
    '../runtime/html5/blob',
    '../runtime/html5/dnd',
    '../runtime/html5/filepaste',
    '../runtime/html5/filepicker',
    '../runtime/html5/imagemeta/exif',
    '../runtime/html5/image',
    '../runtime/html5/transport',

    // flash
    '../runtime/flash/filepicker',
    '../runtime/flash/image',
    '../runtime/flash/transport'
], function( Base ) {
    return Base;
});