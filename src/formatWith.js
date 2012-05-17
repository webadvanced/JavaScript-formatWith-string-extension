(function ( String ) {
    if( !String.formatWith ) {
        String.prototype.formatWith = function ( obj ) {
        var str = this,
        type = typeof obj,
        i,
        l = arguments.length;
        if ( type === 'object' && l === 1 ) {
            for ( var prop in obj ) {
                var r = new RegExp( '{' + prop + '}', 'gi' );
                str = str.replace( r, obj[prop] );
            }
        } else {
            for ( i = 0; i < l; i += 1 ) {
                str = str.replace( '{' + i + '}', arguments[i] );
            }
        }
        return str;
    };
  }
})( String );