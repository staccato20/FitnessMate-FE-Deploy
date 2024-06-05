export const formAdapter = ({register, validator, name, ...props}) => {
	const {validate, attributes} = validator

	return {...register(name, {...validate}), ...attributes, ...props}
}
