import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostCreate = props => {
	return (
		<Create title='Create a Post' {...props}>
			<SimpleForm>
				<TextInput source='title' />
				<TextInput multiline source='body' />
				<DateInput
					label='Published'
					source='publishedAt'
					defaultValue={Date.now()}
				/>
			</SimpleForm>
		</Create>
	)
}

export default PostCreate
