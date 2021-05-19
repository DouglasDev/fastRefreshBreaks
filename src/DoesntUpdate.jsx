import React, { Component } from 'react';
import styled from 'styled-components'

const A = styled.div`
	color: red;
`

export default class DoesntUpdate extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <A>does not update when changed</A>
	}
}
