import { Box, Center } from '@chakra-ui/react';
import React from 'react';

const TodoList = ({todoListItem}) => {
    console.log('todo list component  Rerender 🫣')
    return (
        <>{
            todoListItem.map((item, i) => {
                return <Box  key={i} borderRadius='md' borderWidth={1} w="4xl"  px={4} py={1} mt={1} h={8}>
                        <Center>{item}</Center>
                    </Box>
            })
        }</>
    )
}
export default React.memo(TodoList);
