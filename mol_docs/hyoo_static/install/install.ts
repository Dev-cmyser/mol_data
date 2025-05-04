namespace $ {
	const port = Number( $mol_state_arg.value( 'port' ) || process.env.PORT )
	if( port ) $hyoo_static( port )
	else {
		console.error("Forger define port, sample: node node.js port=2281")
		process.exit()
	}
}
