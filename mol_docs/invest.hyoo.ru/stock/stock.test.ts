namespace $ {
	$mol_test({

		'exit by rate'() {
			
			const stock = new $hyoo_invest_stock({
				enter_amount: 100,
				rate_annual: 10,
				enter_date: '2020-01-01',
				exit_date: '2020-07-01',
			})

			$mol_assert_equal( Math.round( stock.exit_amount() ) , 105 )

		},

		'rate by exit'() {
			
			const stock = new $hyoo_invest_stock({
				enter_amount: 100,
				exit_amount: 105,
				enter_date: '2020-01-01',
				exit_date: '2020-07-01',
			})

			$mol_assert_equal( Math.round( stock.rate_annual() ) , 10 )

		},

	})
}
