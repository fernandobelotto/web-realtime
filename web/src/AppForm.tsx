import { useForm } from 'react-hook-form'
import axios from 'axios'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    VStack,
    toast,
    useToast,
} from '@chakra-ui/react'

export function AppForm({ getMessages }: any) {
    const toast = useToast()
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    function onSubmit(values: any) {

        axios.post('http://localhost:8000/message', values)
            .then(() => {
                toast({ title: 'success', status: 'success' })
            })
            .catch((error) => {
                toast({ title: 'error', status: 'error' })
            })
        getMessages()

    }



    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <VStack spacing={5}>

                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor='name'>Name</FormLabel>
                    <Input
                        id='name'
                        placeholder='name'
                        {...register('name', {
                            required: 'This is required',
                        })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor='name'>Email</FormLabel>
                    <Input
                        id='email'
                        placeholder='email'
                        type='text'
                        {...register('email', {
                            required: 'This is required',
                        })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>


                <Button alignSelf={'end'} mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                    Submit
                </Button>
            </VStack>

        </form>
    )
}