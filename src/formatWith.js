(function ( String, O ) {
    if( !String.formatWith ) {
        String.prototype.formatWith = function ( obj ) {
        var str = this,
        type =  O.prototype.toString.call( obj ).replace( 'object ', '' ),
        i = 0,
        l = arguments.length;
        if ( type === '[Object]' && l === 1 ) {
            for ( var prop in obj ) {
                var r = new RegExp( '\{' + prop + '\}', 'g' );
                str = str.replace( r, obj[prop] );
            }
        } else {
            for ( ; i < l; i++ ) {
                var r = new RegExp( '\\{' + i + '\\}', 'gi' );
                str = str.replace( r, arguments[i] );
            }
        }
        return str;
    };
  }
})( String, Object );