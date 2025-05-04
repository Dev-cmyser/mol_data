namespace $ {
	
	const $hyoo_lingua_translate_api = [
		
		// https://rapidapi.com/joshimuddin8212/api/free-google-translator
		// 5k req/mon
		( $:$, lang, text )=> $.$mol_rapidapi(
			'free-google-translator',
			'external-api/free-google-translator',
			{
				from: 'auto',
				to: lang,
				query: text,
			},
			{},
		).translation,
		
		// https://rapidapi.com/nlpwrite/api/cheapest-google-deep-batch-translate
		// 600k char/mon
		( $:$, lang, text )=> $.$mol_rapidapi( 'cheapest-google-deep-batch-translate', 'google-translate', {}, {
			text,
			to: lang,
			from: 'auto',
			keepCurlyBraces: '1',
		} ).data.translations[0],
		
		// https://rapidapi.com/robust-api-robust-api-default/api/google-translate113
		// 1k req/mon
		( $:$, lang, text )=> $.$mol_rapidapi( 'google-translate113', 'api/v1/translator/text', {}, {
			text,
			to: lang,
			from: 'auto',
		} ).trans,
		
		// https://rapidapi.com/andryerica1/api/google-translate-official
		// 500 req/mon
		( $:$, lang, text )=> $.$mol_rapidapi( 'google-translate-official', 'translate', {}, new URLSearchParams({
			texte: text,
			to_lang: lang,
			source: 'auto',
		}) ).translation_data.translation,
		
		// https://rapidapi.com/scrappa/api/unlimited-google-translate1
		// 500 req/mon
		( $:$, lang, text )=> $.$mol_rapidapi( 'unlimited-google-translate1', 'api/translate', {
			text: text,
			target: lang,
			source: 'auto',
		} ).translated_text,
		
		// https://rapidapi.com/sohailglt/api/translate-plus
		// 500 req/mon
		( $:$, lang, text )=> $.$mol_rapidapi( 'translate-plus', 'translate', {}, {
			text,
			target: lang,
			source: 'auto',
		} ).translations.translation,
		
	] as readonly( ( $: $, lang: string, text: string )=> string )[]
	
	export function $hyoo_lingua_translate( this: $, lang: string, text: string ) {
		
		if( !text.trim() ) return ''
		
		const apis = $mol_array_shuffle_sync( $hyoo_lingua_translate_api )
		for( const fetch of apis ) {
			try {

				const res = fetch( this, lang, text )
				if( res === undefined ) $mol_fail( new Error( 'Broken API' ) )
				return res

			} catch( error ) {

				if( $mol_promise_like( error ) ) $mol_fail_hidden( error )
				$mol_fail_log( error )

			}
		}
		
		throw new Error( 'No alive API' )
	}
	
}
