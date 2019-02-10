import React from 'react'
import {shallow} from 'enzyme'
import MovieTemplate from '../../app/components/MovieTemplate'

describe('[Components] - MovieTemplate', () => {

	test('should render correctly', () => {

		const node = shallow(<MovieTemplate/>)
		expect(node.find('.movieTemplate').exists()).toEqual(true)
	})

})
