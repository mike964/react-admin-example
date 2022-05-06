import React from 'react'
import {
	Create,
	SimpleForm,
	TextInput,
	DateInput,
	SelectField,
	SelectInput,
} from 'react-admin'

const PostCreate = props => {
	const selectOptions = [
		{
			id: '1',
			name: 'John Smith',
		},
		{
			name: 'Mike Dev',
			id: 'iLiAjiZ',
		},
		{
			name: 'Lucy Lin',
			id: 'sdfsgs',
		},
	]
	return (
		<Create title='Create a Post' {...props}>
			<SimpleForm>
				<TextInput source='title' resettable />
				<TextInput multiline source='body' />
				<DateInput
					label='Published'
					source='publishedAt'
					defaultValue={Date.now()}
				/>
				<SelectInput label='Author' source='userId' choices={selectOptions} />
			</SimpleForm>
		</Create>
	)
}

export default PostCreate
