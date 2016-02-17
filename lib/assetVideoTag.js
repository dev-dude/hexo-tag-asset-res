(function() {
    var assetVideoRender, metaRegex, renderAsset;

    renderAsset = require('./renderAsset');


    assetVideoRender = function(args, content) {
        return '<a class="testLink">*****TEST*********</a>';
    };

    hexo.extend.tag.register('asset_video', assetVideoRender);

}).call(this);
